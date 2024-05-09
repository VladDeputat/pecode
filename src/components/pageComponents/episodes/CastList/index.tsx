import React, { useEffect, useState } from "react";
import { Character } from "../../../../../types";
import s from "./styles.module.scss";
import Image from "next/image";

const CastList: React.FC<{ characters: string[] }> = ({ characters }) => {
  const [loadedCharacters, setLoadedCharacters] = useState<Character[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchInitialCharacters = async () => {
      const charactersToLoad = characters.slice(currentIndex, currentIndex + 3);
      const characterData = await Promise.all(
        charactersToLoad.map((url: string) =>
          fetch(url).then((response) => response.json())
        )
      );
      currentIndex === 0
        ? setLoadedCharacters(characterData)
        : setLoadedCharacters((prev) => [...prev, ...characterData]);
    };
    if (currentIndex < characters.length) {
      fetchInitialCharacters();
    }
  }, [currentIndex, characters]);

  const loadMoreCharacters = () => {
    setCurrentIndex((prevIndex) => prevIndex + 3);
  };

  //   const data = {
  //     id: 1,
  //     gender: "Male",
  //     image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  //     location: {
  //       name: "Citadel of Ricks",
  //       url: "https://rickandmortyapi.com/api/location/3",
  //     },
  //     name: "Rick Sanchez",
  //     origin: {
  //       name: "Earth (C-137)",
  //       url: "https://rickandmortyapi.com/api/location/1",
  //     },
  //     species: "Human",
  //     status: "Alive",
  //     type: "",
  //     url: "https://rickandmortyapi.com/api/character/1",
  //   };

  return (
    <div className={s.listWrapper}>
      <ul className={s.list}>
        {loadedCharacters.map((character: Character) => (
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
        ))}
      </ul>
      {loadedCharacters.length < characters.length && (
        <button onClick={loadMoreCharacters} className={s.loadBtn}>
          Load More
        </button>
      )}
    </div>
  );
};

export default CastList;
