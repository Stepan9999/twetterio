import React, { Component } from "react";

const Sidebar = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <aside className="main_aside">
      <nav className="main_aside_nav">
        <a className="nes-btn nav_comp" href="index.html">
          #Home
        </a>
        <a className="nes-btn nav_comp" href="index.html">
          #Profile
        </a>
        <a className="nes-btn nav_comp" href="index.html">
          #Log out
        </a>
      </nav>
      <section className="menu-tweet-action main_aside_section">
        <button
          type="button"
          className="nes-btn is-primary tweet-btn main_aside_section_btn"
          onСlick="document.getElementById('dialog-default').showModal();"
        >
          tweet
        </button>
        <dialog className="nes-dialog" id="dialog-default">
          <form method="dialog">
            <label for="textarea_field">What's happening?</label>
            <textarea id="textarea_field" className="nes-textarea"></textarea>
            <menu className="dialog-menu">
              <button className="nes-btn">Cancel</button>
              <button className="nes-btn is-primary">Tweet</button>
            </menu>
          </form>
        </dialog>
      </section>
    </aside>
  );
};
export default Sidebar;
