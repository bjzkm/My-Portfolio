import { useLayoutEffect, useRef } from "react";
import useElementOffsetContext from "../../../context/ElementOffsetContext";
import classes from "./style/index.module.scss";

export default function CollaborationProjects() {
  const projectRef = useRef<HTMLDivElement>(null);
  const { setProjectsOffset } = useElementOffsetContext();

  useLayoutEffect(() => {
    projectRef.current && setProjectsOffset(projectRef.current.offsetTop)
  }, [setProjectsOffset])

  return (
    <section ref={projectRef} className={classes.collaborationProjects}>
      <h3 className={classes.title}>Collaboration Projects</h3>

      <ul className={classes.projectList}>
        <li>
          <a href="https://merchant.manawstore.com/" target="_blank" rel="noreferrer" className={classes.project}>
            <h4 className={classes.projectTitle}>ManNaw Store</h4>
            <div className={classes.projectImageContainer}>
              <img src="/images/manaw-store-1.png" alt="MaNaw Store"/>
            </div>
          </a>
        </li>

        <li>
          <a href="https://merchant.manawstore.com/" target="_blank" rel="noreferrer" className={classes.project}>
            <h4 className={classes.projectTitle}>Doctor MM</h4>
            <div className={classes.projectImageContainer}>
              <img src="/images/doctor-mm-1.png" alt="MaNaw Store"/>
            </div>
          </a>
        </li>
      </ul>
    </section>
  );
}
