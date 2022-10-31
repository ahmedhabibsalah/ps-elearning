import React, { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="block m-0 p-0">
      <SideBar toggle={toggle} isOpen={isOpen} />
      <Header toggle={toggle} />
    </div>
  );
}

export default NavBar;
