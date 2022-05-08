import { useState } from "react";
import NavBar from "./nav-bar";
import SideBar from "./side-bar";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
      <header>
        <SideBar setOpen={setOpen} isOpen={isOpen} />
        <NavBar setOpen={setOpen} isOpen={isOpen} />
      </header>
    );
  };
  
  export default Header;
  