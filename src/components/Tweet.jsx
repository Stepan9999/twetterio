import React from "react";
import dayjs from "dayjs";

const Tweet = (props) => {
const { user = {}, createdAt, content, numbers, _id, /*onLike, onRetweet*/ } = props; 
    return (
        <div className="tweet nes-container is-rounded">
            <div className="avatar">
                <img className="nes-avatar is-rounded is-large"
                    alt="Gravatar image example"
                    src={user.avatarUrl}
                />
            </div>
            <div>
                <div >
                    <div className="tweet_title">
                        <a className="tweet_title_link" href="">
                            <span className="tweet_title_link_name">{user.firstName} {user.lastName}</span>
                            <span className="tweet_titlee_link_nickname">@{user._nickName}</span>
                        </a>
                        <span>·</span>
                        <span className="tweet_title_date nes-text">{dayjs(createdAt).fromNow()}</span>
                    </div>
                    <p className="tweet_content">
                        {content}
                    </p>
                </div>
                <div className="tweet_actions_container">
                    <div className="tweet_action" /*onClick={() => onLike()}*/ >
                        <svg  className="actions_svg" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M9 2H5v2H3v2H1v6h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2V2h-4v2h-2v2h-2V4H9V2zm0 2v2h2v2h2V6h2V4h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V6h2V4h4z" fill="currentColor" />
                        </svg>
                        <span className="counter">{numbers}</span>
                    </div>

                    <div className="tweet_action" /*onClick={() => onRetweet(_id)}*/>
                        <svg className="actions_svg" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M14 5h-2v4H6v2H4v6h2v-2h6v4h2v-2h2v-2h2v-2h2v-2h-2V9h-2V7h-2V5z" fill="currentColor" />
                        </svg>
                        <span className="counter">{42}</span>
                    </div>

                    <div className="tweet_action">
                        <svg className="actions_svg" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M4 2h18v20h-2V4H4v12h14v2h2v2h-2v-2H2V2h2z" fill="currentColor" />
                        </svg>
                        <span className="counter">{42}</span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Tweet;
