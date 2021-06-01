import React, { Component } from "react";
import Header from "./src/components/Header.jsx";
import { MainFeed } from "./src/containers";
import Sidebar from "./src/components/Sidebar.jsx";

class App extends Component {
  constructor(props) {
    super(props),
    this.state = {
      tweets: []
    }
  };
  
  render() {
    return (
      <div className="wrap">
        <Header/>
        <main className="main">
          <Sidebar />
          <MainFeed/>
        </main>
      </div>
    );
  }
}

export default App;
