import React, { Component } from "react";

class PostsList extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="posts-lists">
        {posts.map((post) => (
          <div className="posts-wrapper" key={post._id}>
            <div className="post-header">
              <div className="post-avatar">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/17/17004.png"
                  alt="user-pic"
                />

                <div>
                  <span className="post-author">{post.user.name}</span>
                  <span className="post-time">a minute ago</span>
                </div>
              </div>
              <div className="post-content">{post.content}</div>

              <div className="post-actions">
                <div className="post-like">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3670/3670153.png"
                    alt="likes-icon"
                  />
                  <span>{post.likes.length}</span>
                </div>

                <div className="post-comments-icon">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4970/4970263.png"
                    alt="comments-icon"
                  />
                  <span>{post.comments.length}</span>
                </div>
              </div>
              <div className="post-comment-box">
                <input placeholder="Start typing a commnet" />
              </div>
              <div className="post-comments-list">
                <div className="post-comments-item">
                  <div className="post-comment-header">
                    <span className="post-comment-author">Bill</span>
                    <span className="post-comment-time">a minute ago</span>
                    <span className="post-comment-likes">22</span>
                  </div>

                  <div className="post-comment-content">Random Comment</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PostsList;
