import React from "react";
import s from "./styles.module.scss";
import { Episode } from "../../../../../types";
import Image from "next/image";

interface EpisodeCardProps {
  episode: Episode;
  onModalOpen?: (episode: Episode) => void;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode, onModalOpen }) => {
  return (
    <li
      key={episode.id}
      className={s.episodeCard}
      onClick={() => onModalOpen && onModalOpen(episode)}
    >
      <div className={s.posterWrapper}>
        <Image src={"/img/movie.jpg"} alt="poster" width={100} height={100} />
      </div>
      <div className={s.info}>
        <p className={s.name}>{episode.name}</p>
        <p>{episode.air_date.split(",")[1]}</p>
        <p>{episode.episode}</p>
      </div>
    </li>
  );
};

export default EpisodeCard;
