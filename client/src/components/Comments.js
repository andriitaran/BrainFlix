import React from "react";
import NewComment from "./NewComment";
import OldComments from "./OldComments";

export default function Comments({
  currentVideo,
  addComment,
  deleteComment,
  loading,
}) {
  if (loading) {
    return (
      <>
        <NewComment currentVideo={currentVideo} addComment={addComment} />
        <OldComments
          currentVideo={currentVideo}
          deleteComment={deleteComment}
        />
      </>
    );
  } else {
    return <h1>Loading...</h1>; // displays "Loading" while comments are loading from an API
  }
}
