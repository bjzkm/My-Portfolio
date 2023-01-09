import { useState } from "react";
import useElementOffsetContext from "../../context/ElementOffsetContext";
import SidebarFooter from "./SidebarFooter";
import classes from "./styles/index.module.scss";

export default function Sidebar() {
  const { homeOffset, aboutMeOffset, skillsOffset, experiencesOffset, projectsOffset, scrollToOffset, activeElement } = useElementOffsetContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <aside className={classes.sidebar}>
      <div className={classes.profile}>
        <div className={classes.avatar}>
          <img src="/images/avatar.png" alt="avatar-image"></img>
          <a href="#" className={classes.downloadCvButton}>
            <img src="/icons/cv-icon.svg" alt="icon" />
          </a>
        </div>
        
        <h2 className={classes.title}>Zin Kyaw Moe</h2>
        <p className={classes.info}>Full stack developer from Myanmar.</p>
        <a href="mailto: zinkyawmoe.bj@gmail.com" className={classes.email}>zinkyawmoe.bj@gmail.com</a>
      </div>

      <div className={`
        ${classes.navigationListWrapper}
        ${isMenuOpen && classes.active}
      `}>
        <ul className={classes.navigationList}>
          <li className={`
            ${classes.navigationListItem}
            ${activeElement === "home" && classes.active}
          `}>
            <span onClick={() => {
              scrollToOffset(homeOffset)
              setIsMenuOpen(false)
            }}>Home</span>
          </li>

          <li className={`
            ${classes.navigationListItem}
            ${activeElement === "aboutMe" && classes.active}
          `}>
            <span onClick={() => {
              scrollToOffset(aboutMeOffset, "secondary")
              setIsMenuOpen(false)
            }}>About Me</span>
          </li>

          <li className={`
            ${classes.navigationListItem}
            ${activeElement === "skills" && classes.active}
          `}>
            <span onClick={() => {
              scrollToOffset(skillsOffset, "secondary")
              setIsMenuOpen(false)
            }}>Skills</span>
          </li>

          <li className={`
            ${classes.navigationListItem}
            ${activeElement === "experiences" && classes.active}
          `}>
            <span onClick={() => {
              scrollToOffset(experiencesOffset, "secondary")
              setIsMenuOpen(false)
            }}>Experiences</span>
          </li>

          <li className={`
            ${classes.navigationListItem}
            ${activeElement === "projects" && classes.active}
          `}>
            <span onClick={() => {
              scrollToOffset(projectsOffset, "secondary")
              setIsMenuOpen(false)
            }}>Projects</span>
          </li>
        </ul>

        <svg onClick={() =>setIsMenuOpen(!isMenuOpen)} className={classes.toggleMenu} width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.5 23.625H1.50001C0.671548 23.625 0 22.8695 0 21.9375C0 21.0056 0.671548 20.25 1.50001 20.25H22.5C23.3285 20.25 24.0001 21.0056 24.0001 21.9375C24 22.8695 23.3285 23.625 22.5 23.625Z" fill="white"/>
          <path d="M22.5 15.1875H1.50001C0.671548 15.1875 0 14.432 0 13.5C0 12.5681 0.671548 11.8125 1.50001 11.8125H22.5C23.3285 11.8125 24.0001 12.568 24.0001 13.5C24.0001 14.4321 23.3285 15.1875 22.5 15.1875Z" fill="white"/>
          <path d="M22.5 6.74999H1.50001C0.671548 6.74999 0 5.9945 0 5.06248C0 4.13046 0.671548 3.37497 1.50001 3.37497H22.5C23.3285 3.37497 24.0001 4.13046 24.0001 5.06248C24.0001 5.9945 23.3285 6.74999 22.5 6.74999Z" fill="white"/>
        </svg>

      </div>

      <SidebarFooter />
    </aside>
  );
}
