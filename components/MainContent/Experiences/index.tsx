import { useLayoutEffect, useRef } from "react";
import useElementOffsetContext from "../../../context/ElementOffsetContext";
import classes from "./style/index.module.scss";

export default function Experiences() {
  const experiencesRef = useRef<HTMLInputElement>(null);
  const { setExperiencesOffset, activeElement} = useElementOffsetContext();

  useLayoutEffect(() => {
    experiencesRef.current && setExperiencesOffset(experiencesRef.current.offsetTop)
  }, [setExperiencesOffset])

  return (
    <section ref={experiencesRef} className={classes.experiences}>

      <div className={classes.experienceList}>
        <h3 className={classes.title}>Experiences</h3>

        <div className={classes.experience}>
          <div className={classes.experienceIcon}>
            <img src="/icons/experience-icon.svg" alt="icon" />
          </div>

          <div className={classes.experienceDetails}>
            <h2 className={classes.experienceTitle}>
              Full Stack Web Developer at 
              <a href="https://proptexx.com" target="_blank" rel="noreferrer"> Proptexx  </a> 
              ( 2021 - 2022 )
            </h2>

            <p className={classes.experienceDescriptions}>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
          </div>
        </div>

        <div className={classes.experience}>
          <div className={classes.experienceIcon}>
            <img src="/icons/experience-icon.svg" alt="icon" />
          </div>

          <div className={classes.experienceDetails}>
            <h2 className={classes.experienceTitle}>
              Full Stack Developer at 
              <a href="https://bilions.org" target="_blank" rel="noreferrer"> Bilions </a> 
              ( 2022 )
            </h2>

            <p className={classes.experienceDescriptions}>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
          </div>
        </div>

        <div className={classes.experience}>
          <div className={classes.experienceIcon}>
            <img src="/icons/experience-icon.svg" alt="icon" />
          </div>

          <div className={classes.experienceDetails}>
            <h2 className={classes.experienceTitle}>
              Full Stack Web Developer at 
              <a href="https://www.befeni.de" target="_blank" rel="noreferrer"> Befeni GmbH </a> 
              ( 2022 - present )
            </h2>

            <p className={classes.experienceDescriptions}>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
          </div>
        </div>

        <div className={classes.experience}>
          <div className={classes.experienceIcon}></div>

          <div className={classes.experienceDetails}>
            <h2 className={classes.experienceTitle}>
              Now it’s time to move to your company 
            </h2>

            <p className={classes.experienceDescriptions}>
              Don’t waste you time, just click the link and email me now. 
              <a href="mailto: zinkyawmoe.bj@gmail.com"> zinkyawmoe.bj@gmail.com</a>
            </p>
            <br />
          </div>
        </div>
      </div>

      {activeElement !== "home" && <div className={classes.experienceJourney}>
        <svg
          width="76"
          height="655"
          viewBox="0 0 76 655"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M38 0.5V583C48.8333 583.167 70.8 590.4 72" />
        </svg>
      </div>}
      
    </section>
  );
}
