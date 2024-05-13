"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getEpisodes } from "@/redux/operations";
import { episodesInfoSelector, episodesSelector } from "@/redux/selectors";
import React, { useEffect, useState } from "react";
import s from "./styles.module.scss";
import { Episode } from "../../../types";
import Modal from "@/components/Modal";
import EpisodeCard from "@/components/pageComponents/episodes/EpisodesCard";
import Pagination from "@/components/Pagination";
import CastList from "@/components/pageComponents/episodes/CastList";

const EpisodesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [curEpisode, setCurEpisode] = useState<Episode | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const episodesData = useAppSelector(episodesSelector);
  const { pages } = useAppSelector(episodesInfoSelector);

  useEffect(() => {
    dispatch(getEpisodes(currentPage));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  const onModalOpen = (episode: Episode) => {
    setCurEpisode(episode);
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
        {episodesData.length > 0 && (
          <div className={s.container}>
            <ul className={s.moviesList}>
              {episodesData.map((episode) => (
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
              totalPages={pages}
              currentPage={currentPage}
            />
          </div>
        )}
      </main>
      {isModalOpen && curEpisode ? (
        <Modal setIsModalOpen={setIsModalOpen}>
          <EpisodeCard episode={curEpisode} />
          <CastList characters={curEpisode.characters} />
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};

export default EpisodesPage;
