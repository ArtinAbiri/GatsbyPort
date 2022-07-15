import React from "react";
import "./style.scss";

export default function Navbar() {
    function goProjects() {
        window.location.href = "/projects";
    }
    function goHome() {
        window.location.href = "/";
    }
  return (
    <div className="navbar" data-scroll-section >

      <div onClick={goHome}>Artin Abiri</div>

        <div onClick={goProjects}>Projects</div>

    </div>
  );
}
