import React from "react";
import s from "./index.module.scss";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.info}>
        <p>Name: Vlad Deputat</p>
        <p>Stack: Next, React, TS, Redux(RTK), Axios, SCSS</p>
        <p>
          Api:{" "}
          <a href="https://rickandmortyapi.com/documentation/">
            rickandmortyapi
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
