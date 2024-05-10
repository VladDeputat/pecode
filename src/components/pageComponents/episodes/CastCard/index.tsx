import Image from "next/image";
import React from "react";
import { Character } from "../../../../../types";
import s from "./styles.module.scss";

const CastCard: React.FC<{ character: Character }> = ({ character }) => {
  return (
    <li key={character.id} className={s.characterCard}>
      <div className={s.imgWrapper}>
        <Image
          src={character.image}
          alt={character.name}
          width={60}
          height={60}
        />
      </div>

      <div>
        <p className={s.name}>{character.name}</p>
        <p>gender: {character.gender}</p>
        <p>species: {character.species}</p>
        <p>status: {character.status}</p>
        <p>&#128205; {character.location.name}</p>
      </div>
    </li>
  );
};

export default CastCard;
