import React, { useEffect, useState } from "react";
import s from "./Head.module.scss";

function Head() {
  const [deg, setDeg] = useState(0);
  useEffect(() => {
    let int = setInterval(() => {
      setDeg((deg) => deg + 5);
    }, 100);
    return () => clearInterval(int);
  }, []);
  return (
    <div className={s.wrapper}>
      <div className={s.head}>
        <div className={s.head__text}>
          <h1
            className={s.text__title}
            key={deg === 360 ? setDeg(0) : deg}
            style={{
              background: `linear-gradient(${deg}deg, #05D6D9, #F907FC)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            NFT Gallery
          <div className={s.text__title_bg} style={{
              background: `linear-gradient(${deg}deg, #05D6D9, #F907FC)`
            }}></div>
          </h1>
          <div className={s.text__subtitle}>
            This website is for those who want to be part of the development of{" "}
            <span className={s.subtitle__highlighter}>Web 3.0</span>. For those
            who are ready to accept the new world and understand the latest
            technologies
          </div>
        </div>
        <div className={s.head__img}></div>
      </div>
    </div>
  );
}

export default Head;
