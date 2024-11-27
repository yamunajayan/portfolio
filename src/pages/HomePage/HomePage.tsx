import Experience from "../../components/Experience/Experience";
import About from "../../components/About/About";
import Header from "../../components/Header/Header";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import { Provider } from "../../components/ui/provider";
import Education from "../../components/Education/Education";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Provider>
        <Header />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Footer />
      </Provider>
    </>
  );
};

export default HomePage;
