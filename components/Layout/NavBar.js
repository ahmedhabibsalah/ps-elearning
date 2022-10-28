import React, { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SideBar toggle={toggle} isOpen={isOpen} />
      <Header toggle={toggle} />
    </>
  );
}

export default NavBar;
