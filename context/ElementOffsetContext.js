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
  setHomeOffset: (homeOffset) => {},
  setAboutMeOffset: (aboutMeOffset) => {},
  setSkillsOffset: (skillsOffset) => {},
  setExperiencesOffset: (experiencesOffset) => {},
  setMainContainer: (elementRef) => {},
  scrollToOffset: (offset, containerType) => {},
});

export function ElementOffsetProvider(props) {
  const [homeOffset, setHomeOffset] = useState(0);
  const [aboutMeOffset, setAboutMeOffset] = useState(0);
  const [skillsOffset, setSkillsOffset] = useState(0);
  const [experiencesOffset, setExperiencesOffset] = useState(0);
  const [containers, setContainers] = useState({});
  const [activeElement, setActiveElement] = useState("home");

  const context = {
    homeOffset,
    aboutMeOffset,
    skillsOffset,
    experiencesOffset,
    activeElement,
    setHomeOffset,
    setAboutMeOffset,
    setSkillsOffset,
    setExperiencesOffset,
    setMainContainer,
    scrollToOffset,
  };

  function scrollToOffset(offset, containerType = "main") {
    if (containers[containerType]) {
      containers[containerType].scrollTo({
        top: offset - containers[containerType].offsetTop - 25,
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
    if(containers["main"]) {
      containers["main"].addEventListener("scroll", () => {

        if(containers["main"].scrollTop === 0) {
          setActiveElement("home")
        } else {

          if (containers["secondary"]) {
            function setActive() {
              let result = getNearest(
                [homeOffset, aboutMeOffset, skillsOffset, experiencesOffset],
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
