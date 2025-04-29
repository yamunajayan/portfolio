import Experience from "../../components/Experience/Experience";
import About from "../../components/About/About";
import Header from "../../components/Header/Header";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import { Provider } from "../../components/ui/provider";
import Education from "../../components/Education/Education";
import Footer from "../../components/Footer/Footer";
import { useRef } from "react";
import { RefObject } from "react";

const HomePage = () => {
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);

  const scrollToSection = (ref: RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Provider>
        <Header
          scrollToSection={scrollToSection}
          refs={{
            projectsRef,
            skillsRef,
            experienceRef,
            educationRef,
          }}
        />
        <About />
        <Projects refProp={projectsRef} />
        <Skills refProp={skillsRef} />
        <Experience refProp={experienceRef} />
        <Education refProp={educationRef} />
        <Footer />
      </Provider>
    </>
  );
};

export default HomePage;
