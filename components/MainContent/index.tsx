import { useLayoutEffect, useRef } from "react";
import useElementOffsetContext from "../../context/ElementOffsetContext";
import AboutMe from "./AboutMe";
import Experiences from "./Experiences";
import Skills from "./Skills";
import classes from "./style/index.module.scss";

export default function MainContent() {
  const mainRef = useRef<HTMLDivElement>(null)
  const { setMainContainer } = useElementOffsetContext();

  useLayoutEffect(() => {
    mainRef.current && setMainContainer({ secondary : mainRef.current })
  }, [])

  return (
    <main ref={mainRef} className={classes.mainContent}>
      <AboutMe />
      <Skills />
      <Experiences />
    </main>
  );
}