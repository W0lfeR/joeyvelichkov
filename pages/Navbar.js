import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const hideSidebar = () => {
    setIsOpen(false);
  };


  return (
    <header className="joey-header">
      <div className="joey-header-wrap">
        <nav className="joey-nav">
          <ul className="joey-ul">
            <li className="nav-joeyitems">
              <Link href="/">Home</Link>
              <Link href="/#aboutme">About</Link>
              <Link href="/#projects">Projects</Link>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>

          <div className="header-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul id="joey-ul-mobile" className={isOpen ? "sidebar-menu active" : "sidebar-menu"}>
            <li className="nav-joeyitems-mobile">
              <Link href="/" onClick={hideSidebar}>Home</Link>
              <Link href="/#aboutme" onClick={hideSidebar}>About</Link>
              <Link href="/#projects" onClick={hideSidebar}>Projects</Link>
              <Link href="/blog" onClick={hideSidebar}>Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
