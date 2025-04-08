import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import HeadingPage from "./components/ui/parts/HeadingPage.jsx";
import Intro from "./components/ui/parts/Intro.jsx";
import Skills from "./components/ui/parts/Skills.jsx";
import Projects from "./components/ui/parts/Projects.jsx";
import Toggle from "./components/ui/parts/Toggle.jsx";
import HeadingPageLight from "./components/ui/lightMode/HeadingPageLight.jsx";
import IntroLight from "./components/ui/lightMode/IntroLight.jsx";
import ProjectsLight from "./components/ui/lightMode/HobbiesLight.jsx";
import { Flex, VStack, Heading, Box } from "@chakra-ui/react";

const MotionBox = motion(Box);

function App() {
  const [isProfessional, setIsProfessional] = useState(true);
  // Toggle switch logica
  const smoothScrollToTop = () => {
    const startPosition = window.scrollY;
    const duration = 750;
    const startTime = performance.now();

    const scroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, startPosition * (1 - progress));

      if (progress < 1) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };

  const handleToggle = () => {
    setIsProfessional(!isProfessional);
    smoothScrollToTop();
  };

  return (
    <MotionBox>
      {isProfessional ? (
        <>
          <HeadingPage />
          <Intro />
          <Skills />
          <Projects />
        </>
      ) : (
        <>
          <HeadingPageLight />
          <IntroLight />
          <ProjectsLight />
        </>
      )}

      <Toggle isProfessional={isProfessional} onToggle={handleToggle} />
    </MotionBox>
  );
}
export default App;
