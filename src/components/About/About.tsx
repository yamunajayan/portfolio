import profileImage from "../../assets/photos/yamuna.jpg";
import linkedInLogo from "../../assets/logos/linkedin.svg";
import githubLogo from "../../assets/logos/github.svg";
import gmailLogo from "../../assets/logos/gmail.svg";

const About = () => {
  return (
    <section className="md:flex justify-between font-custom p-4 md:p-8 max-w-5xl lg:mx-auto">
      <div className="md:w-1/2 text-gray-300 py-4 flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-300 text-center py-4 md:text-left">
          Hello there 👋🏽
        </h1>
        <p className="font-light md:text-xl">I am Yamuna Jayan 👧🏻</p>
        <p className="font-light md:text-xl">
          I am a Full -Stack developer/ Software Engineer...
        </p>
        <p className="font-light md:text-xl">
          I love coding, problem solving, creating new things..
        </p>
        <p className="font-light md:text-xl">
          I love coffees ☕ and pastries 🍰
        </p>
        <p className="font-light md:text-xl ">
          I am a chatterbox and I think I am funny 😎
        </p>
        <h3
          className="text-xl md:text-2xl pt-8 	
text-yellow-500"
        >
          Contact me:
        </h3>
        <div className="flex py-4 items-center gap-4">
          <a href="https://www.linkedin.com/in/yamuna-jayan/">
            <img src={linkedInLogo} alt="Linked in Logo" />
          </a>
          <a href="https://github.com/yamunajayan">
            <img src={githubLogo} alt="Github Logo" />
          </a>
          <a href="mailto:yamunajayan@gmail.com">
            <img src={gmailLogo} alt="Gmail Logo" />
          </a>
        </div>
      </div>
      <div className="flex justify-center md:justify-end py-4 md:w-1/2">
        <img
          src={profileImage}
          alt="profile picture"
          className="h-96 rounded-3xl shadow"
        />
      </div>
    </section>
  );
};

export default About;
