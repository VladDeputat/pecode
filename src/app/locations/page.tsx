"use client";
import React, { useEffect, useState } from "react";
import s from "./styles.module.scss";
import Modal from "@/components/Modal";
import Pagination from "@/components/Pagination";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { locationsInfoSelector, locationsSelector } from "@/redux/selectors";
import { Location } from "../../../types";
import { getLocations } from "@/redux/operations";
import LocationCard from "@/components/pageComponents/locations/LocationCard";
import CastList from "@/components/pageComponents/episodes/CastList";

const LocationsPage = () => {
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [curLocation, setCurLocation] = useState<Location | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const locationsData = useAppSelector(locationsSelector);
  const { pages } = useAppSelector(locationsInfoSelector);

  useEffect(() => {
    dispatch(getLocations(currentPage));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  const onModalOpen = (location: Location) => {
    setCurLocation(location);
    setIsModalOpen(true);
  };

  const nextPage = () => {
    if (currentPage < pages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <main>
        <ul className={s.list}>
          {locationsData.length > 0 &&
            locationsData.map((location: Location) => (
              <LocationCard
                location={location}
                key={location.id}
                onModalOpen={onModalOpen}
              />
            ))}
        </ul>
        <Pagination
          setPrevPage={prevPage}
          setNextPage={nextPage}
          setCurrentPage={setCurrentPage}
          totalPages={pages}
          currentPage={currentPage}
        />
      </main>
      {isModalOpen && curLocation ? (
        <Modal setIsModalOpen={setIsModalOpen}>
          <LocationCard location={curLocation} />
          <CastList characters={curLocation.residents} />
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};

export default LocationsPage;
