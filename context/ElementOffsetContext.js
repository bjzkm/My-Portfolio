import { createContext, useContext, useEffect, useState } from "react";

// interface ElementOffsetContextType {
//   homeOffset: undefined;
//   aboutMeOffset: number | undefined;
//   skillsOffset: number | undefined;
//   experiencesOffset: number | undefined;
//   setHomeOffset: (homeOffset: number) => void;
//   setAboutMeOffset: (aboutMeOffset: number) => void;
//   setSkillsOffset: (skillsOffset: number) => void;
//   setExperiencesOffset: (experiencesOffset: number) => void;
// }

const ElementOffsetContext = createContext({
  homeOffset: 0,
  aboutMeOffset: 0,
  skillsOffset: 0,
  experiencesOffset: 0,
  activeElement: "home",
  projectsOffset: 0,
  setHomeOffset: (homeOffset) => {},
  setAboutMeOffset: (aboutMeOffset) => {},
  setSkillsOffset: (skillsOffset) => {},
  setExperiencesOffset: (experiencesOffset) => {},
  setProjectsOffset: (projectOffset) => {},
  setMainContainer: (elementRef) => {},
  scrollToOffset: (offset, containerType) => {},
});

export function ElementOffsetProvider(props) {
  const [homeOffset, setHomeOffset] = useState(0);
  const [aboutMeOffset, setAboutMeOffset] = useState(0);
  const [skillsOffset, setSkillsOffset] = useState(0);
  const [experiencesOffset, setExperiencesOffset] = useState(0);
  const [projectsOffset, setProjectsOffset] = useState(0);
  const [containers, setContainers] = useState({});
  const [activeElement, setActiveElement] = useState("home");

  const context = {
    homeOffset,
    aboutMeOffset,
    skillsOffset,
    experiencesOffset,
    projectsOffset,
    activeElement,
    setHomeOffset,
    setAboutMeOffset,
    setSkillsOffset,
    setExperiencesOffset,
    setProjectsOffset,
    setMainContainer,
    scrollToOffset,
  };

  function scrollToOffset(offset, containerType = "main") {
    if(window.innerWidth > 550) {
      if (containers[containerType]) {
        containers[containerType].scrollTo({
          top: offset - containers[containerType].offsetTop - 25,
          behavior: "smooth",
        });
      }  
    } else {
      window.scrollTo({
        top: offset - 80,
        behavior: "smooth",
      });
    }
  }

  function setMainContainer(elementRef) {
    setContainers((containers) => {
      return Object.assign(containers, elementRef);
    });
  }

  function getNearest(array, target) {
    let nearest = array[0];
    for (const num of array) {
      if (Math.abs(num - target) < Math.abs(nearest - target)) {
        nearest = num;
      }
    }
    return nearest;
  }

  useEffect(() => {
    if(window.innerWidth > 550) {
      if(containers["main"]) {
        containers["main"].addEventListener("scroll", () => {
  
          if(containers["main"].scrollTop === 0) {
            setActiveElement("home")
          } else {
  
            if (containers["secondary"]) {
              function setActive() {
                let result = getNearest(
                  [homeOffset, aboutMeOffset, skillsOffset, experiencesOffset, projectsOffset],
                  containers["secondary"].scrollTop +
                    containers["secondary"].offsetTop +
                    25
                );
        
                switch (result) {
                  case aboutMeOffset:
                    setActiveElement("aboutMe");
                    break;
                  case skillsOffset:
                    setActiveElement("skills");
                    break;
                  case experiencesOffset:
                    setActiveElement("experiences");
                    break;
                  case projectsOffset:
                    setActiveElement("projects");
                    break;
                  default:
                    setActiveElement("home");
                    break;
                }
              }
        
              setActive();
              containers["secondary"].addEventListener("scroll", setActive);
            }
          }
        });
      }
    } else {
      function setActive() {
        let result = getNearest(
          [homeOffset, aboutMeOffset, skillsOffset, experiencesOffset, projectsOffset],window.scrollY
        );

        switch (result) {
          case aboutMeOffset:
            setActiveElement("aboutMe");
            break;
          case skillsOffset:
            setActiveElement("skills");
            break;
          case experiencesOffset:
            setActiveElement("experiences");
            break;
          case projectsOffset:
            setActiveElement("projects");
            break;
          default:
            setActiveElement("home");
            break;
        }
      }

      setActive();
      window.addEventListener("scroll", setActive);
    }

  }, [homeOffset, aboutMeOffset, skillsOffset, experiencesOffset]);

  return (
    <ElementOffsetContext.Provider value={context}>
      {props.children}
    </ElementOffsetContext.Provider>
  );
}

export default function useElementOffsetContext() {
  return useContext(ElementOffsetContext);
}
