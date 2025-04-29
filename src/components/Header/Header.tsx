import { Link } from "react-router-dom";

import React, { RefObject } from "react";

// Define types for the props
interface HeaderProps {
  scrollToSection: (ref: RefObject<HTMLElement>) => void;
  refs: {
    projectsRef: RefObject<HTMLElement>;
    skillsRef: RefObject<HTMLElement>;
    experienceRef: RefObject<HTMLElement>;
    educationRef: RefObject<HTMLElement>;
  };
}
const Header: React.FC<HeaderProps> = ({ scrollToSection, refs }) => {
  return (
    <header className="sticky top-0 left-0  md:flex justify-between font-custom p-4 md:p-8 md:max-w-5xl mx-auto bg-gray-900">
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

          <li
            className="md:text-lg hover:cursor-pointer hover:text-yellow-600"
            onClick={() => scrollToSection(refs.projectsRef)}
          >
            Projects
          </li>

          <li
            className="md:text-lg hover:cursor-pointer hover:text-yellow-600"
            onClick={() => scrollToSection(refs.skillsRef)}
          >
            Skills
          </li>

          <li
            className="md:text-lg hover:cursor-pointer hover:text-yellow-600"
            onClick={() => scrollToSection(refs.experienceRef)}
          >
            Experience
          </li>

          <li
            className="md:text-lg hover:cursor-pointer hover:text-yellow-600"
            onClick={() => scrollToSection(refs.educationRef)}
          >
            Education
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
