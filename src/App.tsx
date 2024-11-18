import "./App.css";
// import profileImage from "../src/assets/photos/yamuna.jpg";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { Provider } from "./components/ui/provider";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider>
          <Header />
          <About />
          <Projects />
          <Skills />
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
