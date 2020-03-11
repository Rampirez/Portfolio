import React from "react";
import "./style.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-custom">
        <a className="navbar-brand" href="/">Mathew Ramirez</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item navbar-brand nav-link" href="/Portfolio">Portfolio</a>
            <a className="nav-item navbar-brand nav-link" href="/Contact">Contact</a>
          </div>
        </div>
      </nav>
    );
}

export default Nav;