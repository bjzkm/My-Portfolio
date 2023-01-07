import useElementOffsetContext from "../../context/ElementOffsetContext";
import SidebarFooter from "./SidebarFooter";
import classes from "./styles/index.module.scss";

export default function Sidebar() {
  const { homeOffset, aboutMeOffset, skillsOffset, experiencesOffset, scrollToOffset, activeElement } = useElementOffsetContext();

  return (
    <aside className={classes.sidebar}>
      <div className={classes.profile}>
        <div className={classes.avatar}>
          <img src="/images/avatar.png" alt="avatar-image"></img>
        </div>
        <h2 className={classes.title}>Zin Kyaw Moe</h2>
        <p className={classes.info}>Full stack developer from Myanmar.</p>
      </div>

      <ul className={classes.navigationList}>
        <li className={`
          ${classes.navigationListItem}
          ${activeElement === "home" && classes.active}
        `}>
          <span onClick={() => scrollToOffset(homeOffset)}>Home</span>
        </li>
        <li className={`
          ${classes.navigationListItem}
          ${activeElement === "aboutMe" && classes.active}
        `}>
          <span onClick={() => scrollToOffset(aboutMeOffset, "secondary")}>About Me</span>
        </li>
        <li className={`
          ${classes.navigationListItem}
          ${activeElement === "skills" && classes.active}
        `}>
          <span onClick={() => scrollToOffset(skillsOffset, "secondary")}>Skills</span>
        </li>
        <li className={`
          ${classes.navigationListItem}
          ${activeElement === "experiences" && classes.active}
        `}>
          <span onClick={() => scrollToOffset(experiencesOffset, "secondary")}>Experiences</span>
        </li>
      </ul>

      <SidebarFooter />
    </aside>
  );
}
