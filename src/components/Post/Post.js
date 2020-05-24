import React from "react";
import "./Post.css";

class Post extends React.Component {
  

  render() {
    const username = this.props.username;
    const avatar = this.props.avatar;
    const image = this.props.image;
    const caption = this.props.caption;

    return (
      <article className="post">
        <div className="post-wrapper">
          <div className="post-user">
            <div className="post-user-pic">
              <img src={avatar} alt={username} />
            </div>
            <div className="post-user-username">
              <span>{username}</span>
            </div>
          </div>

          <div className="post-img">
            <div className="post-image-bg">
              <img alt={caption} src={image} />
            </div>
          </div>

          <div className="post-caption">
            <strong>{username}</strong> {caption}
          </div>
        </div>
      </article>
    );
  }
}

export default Post;
