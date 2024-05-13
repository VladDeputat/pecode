import React, { ReactNode } from "react";
import s from "./styles.module.scss";
import { Episode } from "../../../types";
import EpisodeCard from "../pageComponents/episodes/EpisodesCard";
import CastList from "../pageComponents/episodes/CastList";

interface ModalProps {
  setIsModalOpen: (a: boolean) => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ setIsModalOpen, children }) => {
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

        {children}
      </div>
    </div>
  );
};

export default Modal;
