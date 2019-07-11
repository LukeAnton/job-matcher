import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar bg-primary">
      <h1 className="title-nav">
        <i class="fab fa-linode" />
        Job Matcher
      </h1>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">Jobs</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
