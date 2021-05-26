import React, { Component } from "react";
import Header from "./src/components/Header.jsx";
import Feed from "./src/components/Feed.jsx";
import Sidebar from "./src/components/Sidebar.jsx";
import tweets from "./src/mocks/tweets.js"

class App extends Component {
  constructor(props) {
    super(props),
    this.state = {
      tweets: []
    }
  };
  componentDidMount() {
    this.setState({
      tweets
    })
  }
  render() {
    return (
      <div className="wrap">
        <Header/>
        <main className="main">
          <Sidebar />
          <Feed tweets = {tweets}/>
        </main>
      </div>
    );
  }
}

export default App;
