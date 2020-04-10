import React, { Component } from "react";
import timeSince from "./timeSince";

export default class OldComments extends Component {
  render() {
    const handleDelete = event => { //deletes a comment
      let comment = {
        id: event.target.id
      };
      this.props.deleteComment(comment);
    };

    const oldComments = this.props.currentVideo.comments.map(comment => {
      return (
        <div key={comment.id} className="comment-card">
          <div className="comment-card__avatar"></div>
          <div className="comment-card__body">
            <div className="comment-card__body--top">
              <span className="comment-card__body--top--username">
                {comment.name}
              </span>
              <span className="comment-card__body--top--date">
                {timeSince(new Date(comment.timestamp))}
              </span>
            </div>
            <span className="comment-card__body--text">{comment.comment}</span>
            <img
              className="comment-card__body--delete"
              src="https://image.flaticon.com/icons/svg/263/263067.svg"
              alt="delete comment"
              onClick={handleDelete}
              id={comment.id}
            />
          </div>
        </div>
      );
    });
    return (
      <section className="old-comments">
        <div className="old-comments-container">{oldComments}</div>
      </section>
    );
  }
}
