import { useLayoutEffect, useRef } from "react";
import useElementOffsetContext from "../../../context/ElementOffsetContext";
import classes from "./style/index.module.scss";

export default function Experiences() {
  const experiencesRef = useRef<HTMLDivElement>(null);
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
              <a href="https://www.befeni.de" target="_blank" rel="noreferrer"> Befeni GmbH </a> 
              ( 2022 - present )
            </h2>

            <p className={classes.experienceDescriptions}>
              Befeni GmbH is a fast growing German startup that produces custom personalized shirts built to order in 
              Thailand and then shipped to our customers abroad. At every step in the process, customers can keep 
              track of their shirt through their phone and have input into their order. As a full stack developer 
              for Befeni. I have to maintain existing code, finding bugs and writing the web services and API 
              end points. Even if i&apos;m a full stack developer, i have spend most of the time in front-end, 
              such as developing new user-facing features, determining the structure and design of web pages, 
              building reusable codes, optimize page loading times, and using a variety of markup languages to 
              create the web pages as well as the integration with back-end. In this Company i got a chance to 
              learn writing proper documentation, creating plans for our progress, and the best thing is i 
              have got a chance to learn english and speak every day.
            </p>
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

            <p className={classes.experienceDescriptions}>
              Bilions is a Myanmar base Company, we provide services to IT Software Companies and Telecommunication 
              Companies to build mobile app, web app, web landing page, and also give award-wining 
              UI/UX designs. My role in this company is to oversee a team of developers working on building and
              maintaining our IT solutions. And Writing API end points and integrate with front-end, 
              in this company i have got a chance to learn flutter from my colleague and build some excellent mobile apps.
            </p>
          </div>
        </div>

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

            <p className={classes.experienceDescriptions}>
              Proptexx is a growing Real-Estate services company base in Singapore. They provide a bunch of 
              AI services to their customers, who want to start their business as a Real-Estate agent such 
              as optimizing images, renovation, . . . .And also this is the company who give me a lot of hope 
              in my first step as a professional web developer. As a junior developer in this company i have to 
              write a bunch on landing pages and build some admin dashboard as will as writing API end pints 
              and integrate it to front-end. And i also got a lot of chance to learn from my senior developer.
            </p>
          </div>
        </div>

        <div className={classes.experience}>
          <div className={classes.experienceIcon}></div>

          <div className={classes.experienceDetails}>
            <h2 className={classes.experienceTitle}>
            
              Now it&apos;s time to move to your company 
            </h2>

            <p className={classes.experienceDescriptions}>
              Don&apos;t waste you time, just click the link and email me now. 
              
              <a href="mailto: zinkyawmoe.bj@gmail.com"> 
                &nbsp;zinkyawmoe.bj@gmail.com
                <img className={classes.pointerIcon} src="/icons/pointer-icon.svg" alt="icon" />
              </a>
              
            </p>
            <br />
          </div>
        </div>
      </div>

      {activeElement !== "home" && <div className={classes.experienceJourney}></div>}
      
    </section>
  );
}
