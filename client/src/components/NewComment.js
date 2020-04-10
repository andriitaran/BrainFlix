import React, { Component } from "react";

export default class NewComment extends Component {
  render() {
    const handleSubmit = event => { //creates new comment
      event.preventDefault();
      let comment = {
        name: "John Doe",
        comment: event.target.comment.value,
      };
      event.target.comment.value.length < 2 // checks if comment length is < 2
        ? alert("Please write something meaningful")
        : this.props.addComment(comment); //calls funtion to add comment to the API
      document.querySelector("#submit-form").reset(); 
    };
    return (
      <section className="new-comment">
        <div className="new-comment-container">
          <span className="new-comment-container__commentcount">
            {this.props.currentVideo.comments.length} Comments 
          </span> 
          <span className="new-comment-container__join">
            JOIN THE CONVERSATION
          </span>
          <div className="new-comment-container__newcomment">
            <div className="new-comment-container__newcomment--avatar"></div>
            <form
              className="new-comment-container__newcomment--box"
              id="submit-form"
              onSubmit={handleSubmit}
            >
              <textarea
                className="new-comment-container__newcomment--box--comment"
                name="comment"
                id="new-comment"
                placeholder="Add a new comment"
              ></textarea>
              <input
                className="new-comment-container__newcomment--box--button"
                id="button"
                type="submit"
                value="COMMENT"
              ></input>
              
            </form>
          </div>
        </div>
      </section>
    );
  }
}
