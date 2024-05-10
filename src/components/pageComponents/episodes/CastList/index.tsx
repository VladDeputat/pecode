import React, { useEffect, useState } from "react";
import { Character } from "../../../../../types";
import s from "./styles.module.scss";
import CastCard from "../CastCard";

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

  return (
    <div className={s.listWrapper}>
      <ul className={s.list}>
        {loadedCharacters.map((character: Character) => (
          <CastCard character={character} />
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
