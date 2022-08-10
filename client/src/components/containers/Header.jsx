import React from "react";
import NavBar from "../Navbar";
import { useEffect } from "react";

function Header() {
  useEffect(() => {
    /*=============== CHANGE BACKGROUND HEADER ===============*/
    function scrollHeader() {
      const header = document.getElementById("header");
      // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
      if (this.scrollY >= 50) header.classList.add("scroll-header");
      else header.classList.remove("scroll-header");
    }
    window.addEventListener("scroll", scrollHeader);
  });

  return (
    <div>
      <header className="header" id="header">
        <NavBar />
      </header>
    </div>
  );
}

export default Header;
