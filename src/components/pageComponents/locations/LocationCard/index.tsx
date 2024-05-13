import React from "react";
import { Location } from "../../../../../types";
import s from "./styles.module.scss";
import Image from "next/image";

interface LocationCardProps {
  location: Location;
  onModalOpen?: (location: Location) => void;
}

const LocationCard: React.FC<LocationCardProps> = ({
  location,
  onModalOpen,
}) => {
  return (
    <li
      className={s.locationCard}
      onClick={() => onModalOpen && onModalOpen(location)}
    >
      <div className={s.posterWrapper}>
        <Image src={"/img/location.png"} alt="poster" width={70} height={70} />
      </div>
      <div className={s.info}>
        <p>Name:{location.name}</p>
        <p>Type:{location.type}</p>
        <p>Dimension:{location.dimension}</p>
      </div>
    </li>
  );
};

export default LocationCard;
