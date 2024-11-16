import "./App.css";
// import profileImage from "../src/assets/photos/yamuna.jpg";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { Provider } from "./components/ui/provider";

function App() {
  return (
    <>
      <Provider>
        <Header />
        <About />
        <Projects />
        <Skills />
      </Provider>

      {/* <section className="bg-gray-900 md:flex font-custom p-4 md:p-8">
        <div className="md:w-1/2 text-white py-4">
          <h1 className="text-4xl font-bold text-white text-center py-4 md:text-left">
            Hello there 👋🏽
          </h1>
          <h3 className="font-light">I am a Full -Stack developer...</h3>
          <h3 className="font-light">
            I love coding, problem solving, creating new things..
          </h3>
          <h3 className="font-light">I love coffees ☕ and pastries 🍰</h3>
          <h3 className="font-light">
            I am a chatterbox and I think I am funny
          </h3>
        </div>
        <div className="flex justify-center py-4 md:w-1/2">
          <img
            src={profileImage}
            alt="profile picture"
            className="h-96 rounded-3xl shadow"
          />
        </div>
      </section> */}
    </>
  );
}

export default App;
