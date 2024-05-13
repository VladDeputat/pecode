"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getCharacters } from "@/redux/operations";
import { charactersSelector, characterInfoSelector } from "@/redux/selectors";
import React, { useEffect, useState } from "react";
import { Character } from "../../../types";
import CastCard from "@/components/pageComponents/episodes/CastCard";
import s from "./styles.module.scss";
import SearchBar from "@/components/pageComponents/characters/SearchBar";
import Pagination from "@/components/Pagination";

const CharactersPage = () => {
  const dispatch = useAppDispatch();
  const charactersData = useAppSelector(charactersSelector);
  const { pages } = useAppSelector(characterInfoSelector);

  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    status: "",
    gender: "",
  });
  const { name, status, gender } = formData;

  const getDataWithSearch = () => {
    setCurrentPage(1);
    dispatch(getCharacters(currentPage, name, status, gender));
  };

  useEffect(() => {
    dispatch(getCharacters(currentPage, name, status, gender));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setFormData({ name: "", status: "", gender: "" });
    setCurrentPage(1);
    getDataWithSearch();
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
    <main>
      <SearchBar
        onSearch={getDataWithSearch}
        onReset={handleReset}
        onChange={handleChange}
        formData={formData}
      />
      <ul className={s.list}>
        {charactersData.length > 0 &&
          charactersData.map((character: Character) => (
            <CastCard character={character} key={character.id} />
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
  );
};

export default CharactersPage;
