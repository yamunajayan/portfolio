import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="md:flex justify-between font-custom p-4 md:p-8 md:max-w-5xl lg:mx-auto">
      <div className="text-gray-300 flex justify-center font-custom py-4 md:py-0">
        <Link to={"/"} className="hover:cursor-pointer">
          <h3 className="text-xl md:text-2xl font-bold">YAMUNA JAYAN</h3>
        </Link>
      </div>
      <nav className="md:w-1/2">
        <ul className="text-gray-300 flex justify-between text-xs ">
          <Link to={"/"} className="hover:cursor-pointer">
            <li className="text-yellow-600 md:text-lg">Home</li>
          </Link>
          <a
            href="#projects"
            className="hover:cursor-pointer hover:text-yellow-600"
          >
            <li className="md:text-lg">Projects</li>
          </a>
          <a
            href="#skills"
            className="hover:cursor-pointer hover:text-yellow-600"
          >
            <li className="md:text-lg">Skills</li>
          </a>
          <a
            href="#experience"
            className="hover:cursor-pointer hover:text-yellow-600"
          >
            <li className="md:text-lg">Experience</li>
          </a>
          <a
            href="#education"
            className="hover:cursor-pointer hover:text-yellow-600"
          >
            <li className="md:text-lg">Education</li>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
