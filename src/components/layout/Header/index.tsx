import React from "react";
import s from "./index.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <Link href={"/episodes"} className={s.link}>
          episodes
        </Link>
        <Link href={"/characters"} className={s.link}>
          characters
        </Link>
        <Link href={"/locations"} className={s.link}>
          locations
        </Link>
      </nav>
    </header>
  );
};

export default Header;
