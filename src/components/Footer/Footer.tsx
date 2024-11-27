import linkedInLogo from "../../assets/logos/linkedin.svg";
import githubLogo from "../../assets/logos/github.svg";
import gmailLogo from "../../assets/logos/gmail.svg";

const Footer = () => {
  return (
    <footer className="md:flex flex-col justify-center font-custom p-4 md:p-8 md:max-w-5xl lg:mx-auto ">
      <div className="flex justify-center">
        <h3 className="text-gray-100 text-xl">Connect with me on </h3>
      </div>
      <div className="flex py-4 items-center justify-center gap-6">
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
    </footer>
  );
};

export default Footer;
