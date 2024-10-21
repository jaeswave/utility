import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "../Button";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-white px-16 py-3 h-[10vh]">
      <div className="mx-auto px-4 flex justify-between items-center relative">
        <div>
          {/* <img src="" alt="logo" className="w-[30%]" /> */}

          <h1 className="text-black font-bold text-3xl">Logo</h1>
        </div>

        <div className="flex gap-5 items-center justify-center">
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } flex flex-col absolute top-[5rem] left-[0.3rem] gap-5 w-full sm:flex sm:flex-row sm:static`}
          >
            <Button title="Log in" />
            <Button title="Register" />
          </div>
          <button className="block sm:hidden" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
