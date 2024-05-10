"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getEpisodes } from "@/redux/operations";
import { episodesSelector } from "@/redux/selectors";
import React, { useEffect, useState } from "react";
import s from "./styles.module.scss";
import { Episode } from "../../../types";
import Modal from "@/components/Modal";
import EpisodeCard from "@/components/pageComponents/episodes/EpisodesCard";
import Pagination from "@/components/Pagination";

const EpisodesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [curEpisode, setCurEpisode] = useState<Episode | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const episodesData = useAppSelector(episodesSelector);

  useEffect(() => {
    dispatch(getEpisodes());
  }, []);

  const onModalOpen = (episode: Episode) => {
    setCurEpisode(episode);
    setIsModalOpen(true);
  };

  const itemsPerPage = 5;
  const totalPages = Math.ceil(episodesData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, episodesData.length);
  const currentItems = episodesData.slice(startIndex, endIndex);

  const nextPage = () => {
    if (currentPage < totalPages) {
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
        {currentItems.length > 0 && (
          <div className={s.container}>
            <ul className={s.moviesList}>
              {currentItems.map((episode) => (
                <EpisodeCard
                  key={episode.id}
                  episode={episode}
                  onModalOpen={onModalOpen}
                />
              ))}
            </ul>
            <Pagination
              setPrevPage={prevPage}
              setNextPage={nextPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
              currentPage={currentPage}
            />
          </div>
        )}
      </main>
      {isModalOpen && (
        <Modal
          episode={curEpisode as Episode}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
};

export default EpisodesPage;
