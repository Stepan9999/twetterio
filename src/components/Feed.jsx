import React, { Component } from "react";
import TweetForm from "./TweetForm.jsx";
import Tweet from './Tweet.jsx'

class Feed extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { tweets = [], onLike, onComment, onReply } = this.props
    return (
      <div className="feed">
        <TweetForm />
        {tweets.map(({ user = {}, createdAt, content, numbers, _id, statistic }) => (
          <Tweet
            key={_id}
            user={user}
            createdAt={createdAt}
            content={content}
            numbers={numbers}
            id={_id}
            statistic={statistic}
            onLikeClick={onLike}
            onCommentClick={onComment}
            onReplyClick={onReply}
          />))}
      </div>
    );
  }
}

export default Feed;
