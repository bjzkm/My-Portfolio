import classes from "./styles/index.module.scss";

export default function SidebarFooter() {
  return (
    <footer className={classes.sidebarFooter}>
      <a href="https://github.com/bjzkm" target="_blank" rel="noreferrer">
        <img src="/icons/github-icon.svg" alt="github-icon" />
      </a>
      <a href="https://www.linkedin.com/in/zin-kyaw-moe-73254b21a/" target="_blank" rel="noreferrer">
        <img src="/icons/linkedin-icon.svg" alt="github-icon" />
      </a>
      <a href="mailto: zinkyawmoe.bj@gmail.com">
        <img src="/icons/email-icon.svg" alt="github-icon" />
      </a>
    </footer>
  );
}
