import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav-menu">
          <div className="nav-brand">
            <a href="/" className="nav-logo">
              Instagram
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
