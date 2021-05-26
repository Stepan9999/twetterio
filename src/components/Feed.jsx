import React, { Component } from "react";
import TweetForm from "./TweetForm.jsx";
import Tweet from './Tweet.jsx'

class Feed extends Component {
  constructor(props){
    super(props);
    // this.onTweetLike=this.onTweetLike.bind(this)
  }
  // onTweetLike(like){
  //   like.current.classList.add('redLike')
  // } 
  // onTweetRetweet(_id){
  //   classList.add("redLike")
  // }
  render() {
    const { tweets = [] } = this.props
    return (
      <div className="feed">
        <TweetForm />
       {tweets.map(({ user={ }, createdAt, content, numbers, _id }) => (
         <Tweet 
          key={_id} 
          user={user} 
          createdAt={createdAt} 
          content={content} 
          numbers={numbers} 
          _id={_id}
          // onLike={this.onTweetLike} 
          // onRetweet={this.onTweetRetweet}
        />))}
      </div>
    );
  }
}

export default Feed;
