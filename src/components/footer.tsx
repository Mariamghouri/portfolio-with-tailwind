const Footer = () => {
    return (
      <footer className="bg-black text-white py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
          {/* Left Section: Logo and Name */}
          <div className="flex items-center space-x-2">
            {/* Logo */}
            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
              <span className="text-black font-bold text-lg">P</span>
            </div>
            <span className="text-lg font-semibold">Personal</span>
          </div>
  
          {/* Right Section: Text */}
          <div className="text-right text-gray-400">
            <p>@ 2019-2023 Personal</p>
            <p>Made in Figma</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  