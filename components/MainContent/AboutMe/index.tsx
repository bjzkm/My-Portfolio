import { useLayoutEffect, useRef } from "react";
import useElementOffsetContext from "../../../context/ElementOffsetContext";
import classes from "./style/index.module.scss";

export default function AboutMe() {
  const aboutMeRef = useRef<HTMLInputElement>(null);
  const { setAboutMeOffset} = useElementOffsetContext();

  useLayoutEffect(() => {
    aboutMeRef.current && setAboutMeOffset(aboutMeRef.current.offsetTop)
  }, [setAboutMeOffset])
  
  return (
    <section ref={aboutMeRef} className={classes.aboutMe}>
      <h3 className={classes.title}>About Me</h3>
      <p className={classes.descriptions}>
        Hey i&apos;m <strong>Zin Kyaw Moe</strong> but everyone <strong>call me BJ</strong>, so you can also call me BJ. <br />
        I&apos;m from Myanmar. I have started my carrier on the very first of 2021 and now it is 2023, time has gone by so fast. <br />
        In 2 years of times i had a chance to learn a lot from my senior developers and i want to say thanks <br />
        to all of them because i&apos;m here because of them . I work as a full stack developer along my journal and <br />
        i really love to do it. But when it come to frontend, i feel like i got two brains :). <br />
        I believe that every have their super power, and my super power is that <br />
        i&apos;m the person who is super active, always hungry to learn new things and take responsibility. <br />
      </p>
    </section>
  );
}
