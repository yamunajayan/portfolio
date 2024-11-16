const Header = () => {
  return (
    <header className="md:flex justify-between font-custom p-4 md:p-8 md:max-w-5xl lg:mx-auto">
      <div className="text-white flex justify-center font-custom py-4 md:py-0">
        <h3>YAMUNA JAYAN</h3>
      </div>
      <nav className="md:w-1/2">
        <ul className="text-white flex justify-between text-xs ">
          <li className="text-yellow-600">Home</li>
          <li>Projects</li>
          <li>Education</li>
          <li>Experience</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
