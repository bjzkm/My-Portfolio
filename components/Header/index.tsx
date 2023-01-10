import { useLayoutEffect, useRef } from "react";
import useElementOffsetContext from "../../context/ElementOffsetContext";
import classes from "./styles/index.module.scss";

export default function Header() {
  const homeRef = useRef<HTMLDivElement>(null);
  const { setHomeOffset, activeElement} = useElementOffsetContext();

  useLayoutEffect(() => {
    homeRef.current && setHomeOffset(homeRef.current.offsetTop)
  }, [setHomeOffset])

  return <header className={classes.header}>
    <h1 ref={homeRef} className={classes.title}>
      <span className={classes.titleHighlight}>Zin Kyaw Moe, </span> 
      full stack developer living in Myanmar.
    </h1>

    <div className={classes.actionButtons}>
      <a href="/zinkyawmoe-bj-cv.pdf" target="_blank" rel="noreferrer" className={`
        ${classes.downloadCvButton}
        ${activeElement !== "home" && classes.small}
      `}>
        <span>Download CV</span>
        <img src="/icons/cv-icon.svg" alt="icon" />
      </a>
      <a href="mailto: zinkyawmoe.bj@gmail.com" className={classes.contactMeButton}>Contact Me</a>
    </div>
  </header>;
}
