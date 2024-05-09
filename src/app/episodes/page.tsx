"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getEpisodes } from "@/redux/operations";
import { episodesSelector } from "@/redux/selectors";
import React, { useEffect, useState } from "react";
import s from "./styles.module.scss";
import { Episode } from "../../../types";
import Image from "next/image";
import Modal from "@/components/Modal";
import EpisodeCard from "@/components/pageComponents/episodes/EpisodesCard";

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

  // const data = {
  //   air_date: "December 2, 2013",
  //   characters: [
  //     "https://rickandmortyapi.com/api/character/1",
  //     "https://rickandmortyapi.com/api/character/2",
  //     "https://rickandmortyapi.com/api/character/35",
  //     "https://rickandmortyapi.com/api/character/38",
  //     "https://rickandmortyapi.com/api/character/62",
  //     "https://rickandmortyapi.com/api/character/92",
  //     "https://rickandmortyapi.com/api/character/127",
  //     "https://rickandmortyapi.com/api/character/144",
  //     "https://rickandmortyapi.com/api/character/158",
  //     "https://rickandmortyapi.com/api/character/175",
  //     "https://rickandmortyapi.com/api/character/179",
  //     "https://rickandmortyapi.com/api/character/181",
  //     "https://rickandmortyapi.com/api/character/239",
  //     "https://rickandmortyapi.com/api/character/249",
  //     "https://rickandmortyapi.com/api/character/271",
  //     "https://rickandmortyapi.com/api/character/338",
  //     "https://rickandmortyapi.com/api/character/394",
  //     "https://rickandmortyapi.com/api/character/395",
  //     "https://rickandmortyapi.com/api/character/435",
  //   ],
  //   created: "2017-11-10T12:56:33.798Z",
  //   episode: "S01E01",
  //   id: 1,
  //   name: "Pilot",
  //   url: "https://rickandmortyapi.com/api/episode/1",
  // };

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
            <div className={s.pagination}>
              <button
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
              >
                1
              </button>
              <button onClick={prevPage} disabled={currentPage === 1}>
                &lt;
              </button>
              <button disabled>{currentPage}</button>
              <button onClick={nextPage} disabled={currentPage === totalPages}>
                &gt;
              </button>
              <button
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
              >
                {totalPages}
              </button>
            </div>
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
