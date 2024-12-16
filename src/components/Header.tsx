import { FC } from "react";
import { FaFileDownload } from "react-icons/fa";

const Header: FC = () => {
  return (
    <header className=" container m-auto flex items-center justify-between px-6 py-4 bg-white ">
      {/* Logo */}
      <div className="flex items-center space-x-2">
  <img src="/images/logo.png" alt="Logo" className="h-23 w-26" />

</div>


      {/* Navigation Links */}
      <nav className="flex space-x-8">
        <a href="#about" className="text-gray-800 hover:text-blue-500">
          About Me
        </a>
        <a href="#skills" className="text-gray-800 hover:text-blue-500">
          Skills
        </a>
        <a href="#projects" className="text-gray-800 hover:text-blue-500">
          Project
        </a>
        <a href="#contact" className="text-gray-800 hover:text-blue-500">
          Contact Me
        </a>
      </nav>

      {/* Resume Button */}
      <a
        href="/resume.pdf"
        target="_blank"
        className="flex items-center px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-800"
      >
        Resume <FaFileDownload className="ml-2" />
      </a>
    </header>
  );
};

export default Header;
