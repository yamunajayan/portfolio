import Experience from "../../components/Experience/Experience";
import About from "../../components/About/About";
import Header from "../../components/Header/Header";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import { Provider } from "../../components/ui/provider";

const HomePage = () => {
  return (
    <>
      <Provider>
        <Header />
        <About />
        <Projects />
        <Skills />
        <Experience />
      </Provider>
    </>
  );
};

export default HomePage;
