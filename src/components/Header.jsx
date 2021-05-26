import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <a className="header_comp" href="index.html">
          <i className="nes-icon twitter is-medium"></i>
          <span className="nes-text is-primary header_comp_title">
            Twitterio <span className="header_comp_title-mod">by NES</span>
          </span>
        </a>
      </header>
    );
  };
};

export default Header;
