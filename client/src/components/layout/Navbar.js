import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar bg-primary">
      <h1 className="title-nav">
        <i className="fab fa-linode" />
        Job Matcher
      </h1>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Jobs</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
