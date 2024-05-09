import React from "react";
import s from "./styles.module.scss";
import { Episode } from "../../../types";
import EpisodeCard from "../pageComponents/episodes/EpisodesCard";
import CastList from "../pageComponents/episodes/CastList";

interface ModalProps {
  episode: Episode;
  setIsModalOpen: (a: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ episode, setIsModalOpen }) => {
  const handleClose = (e: React.MouseEvent) => {
    const element = e.target as HTMLElement;
    if (element.id === "backdrop" || element.id === "close") {
      setIsModalOpen(false);
    }
  };

  return (
    <div className={s.modal} onClick={handleClose} id="backdrop">
      <div className={s.modalContent}>
        <span className={s.close} onClick={handleClose} id="close">
          &times;
        </span>
        <EpisodeCard episode={episode} />
        <CastList characters={episode.characters} />
      </div>
    </div>
  );
};

export default Modal;
