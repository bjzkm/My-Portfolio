import { useLayoutEffect, useRef } from "react";
import useElementOffsetContext from "../../../context/ElementOffsetContext";
import classes from "./style/index.module.scss";

export default function Skills() {
  const skillsRef = useRef<HTMLInputElement>(null);
  const { setSkillsOffset } = useElementOffsetContext();

  useLayoutEffect(() => {
    skillsRef.current && setSkillsOffset(skillsRef.current.offsetTop)
  }, [setSkillsOffset])

  return (
    <section ref={skillsRef} className={classes.skills}>
      <h3 className={classes.title}>Skills</h3>
      <p className={classes.descriptions}>
        Wasn&apos;t sure what the best way to present my skill-set was as I didn&apos;t
        want to list a bunch of buzz words here.
        So I will just list some of the tools and frameworks I&apos;m currently
        using:
      </p>


      <ul className={classes.skillList}>
        <li className={classes.skill}>
          <h4 className={classes.skillTitle}>HTML 5</h4>

          <div className={classes.progressBar}>
            <span style={{color: "#D5D90F", left: "95%"}} className={classes.percentage}>95%</span>
            <div style={{backgroundColor: "#D5D90F", width: "95%"}} className={classes.progress}></div>
          </div>
        </li>

        <li className={classes.skill}>
          <h4 className={classes.skillTitle}>Css 3</h4>

          <div className={classes.progressBar}>
            <span style={{color: "#15C6D1", left: "90%"}} className={classes.percentage}>90%</span>
            <div style={{backgroundColor: "#15C6D1", width: "90%"}} className={classes.progress}></div>
          </div>
        </li>

        <li className={classes.skill}>
          <h4 className={classes.skillTitle}>Vue Js</h4>

          <div className={classes.progressBar}>
            <span style={{color: "#4DCD20", left: "75%"}} className={classes.percentage}>75%</span>
            <div style={{backgroundColor: "#4DCD20", width: "75%"}} className={classes.progress}></div>
          </div>
        </li>

        <li className={classes.skill}>
          <h4 className={classes.skillTitle}>Laravel</h4>

          <div className={classes.progressBar}>
            <span style={{color: "#E36E1A", left: "50%"}} className={classes.percentage}>50%</span>
            <div style={{backgroundColor: "#E36E1A", width: "50%"}} className={classes.progress}></div>
          </div>
        </li>

        <li className={classes.skill}>
          <h4 className={classes.skillTitle}>React Js</h4>

          <div className={classes.progressBar}>
            <span style={{color: "#9670E8", left: "70%"}} className={classes.percentage}>70%</span>
            <div style={{backgroundColor: "#9670E8", width: "70%"}} className={classes.progress}></div>
          </div>
        </li>

        <li className={classes.skill}>
          <h4 className={classes.skillTitle}>Next Js</h4>

          <div className={classes.progressBar}>
            <span style={{color: "#000000", left: "30%"}} className={classes.percentage}>30%</span>
            <div style={{backgroundColor: "#000000", width: "30%"}} className={classes.progress}></div>
          </div>
        </li>

        <li className={classes.skill}>
          <h4 className={classes.skillTitle}>Flutter</h4>

          <div className={classes.progressBar}>
            <span style={{color: "#2A89FA", left: "30%"}} className={classes.percentage}>30%</span>
            <div style={{backgroundColor: "#2A89FA", width: "30%"}} className={classes.progress}></div>
          </div>
        </li>

        <li className={classes.skill}>
          <h4 className={classes.skillTitle}>Figma</h4>

          <div className={classes.progressBar}>
            <span style={{color: "#C652EE", left: "40%"}} className={classes.percentage}>40%</span>
            <div style={{backgroundColor: "#C652EE", width: "40%"}} className={classes.progress}></div>
          </div>
        </li>
      </ul>
    </section>
  );
}
