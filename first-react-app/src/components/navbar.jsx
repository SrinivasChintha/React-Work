import React, { Component } from "react";

const NavBar = ({ totalSelected }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalSelected}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
