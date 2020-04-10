const express = require("express");
const router = express.Router();
const helper = require("../../helper/helper");

const videosFile = __dirname + "/../../models/videos.json";
const videos = require(videosFile);

//route for getting an array of videos with 4 key:value pairs
router.get("/", (req, res) => {
  return res.send(
    videos.map(video => {
      return (video = {
        id: video.id,
        title: video.title,
        channel: video.channel,
        image: video.image,
        description: video.description,
        likes: video.likes,
        duration: video.duration,
        video: video.video,
        timestamp: video.timestamp,
        comments: video.comments
      });
    })
  );
});

// route for getting specific video by ID
router.get("/:id", (req, res) => {
  let video = videos.find(video => {
    return video.id === req.params.id;
  });
  if (video.id === req.params.id) {
    return res.json(video);
  } else {
    res.status(404).json({
      error: `Video ID${req.params.id} is not found`
    });
  }
});

//upload video route
router.post("/", (req, res) => {
  const newVideo = {
    id: req.body.id,
    title: req.body.title,
    channel: req.body.channel,
    image: req.body.image,
    description: req.body.description,
    views: "0",
    likes: "0",
    duration: "0",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: Math.round(new Date().getTime()), // assigns new timestamp
    comments: []
  };
  videos.push(newVideo); //pushes new video into an existing array
  helper.writeJSONFile(videosFile, videos); //writes new array of videos to JSON
  res.json(videos); //return a new array of videos
});

//post a new comment route
router.post("/:id/comments", (req, res) => {
  const video = videos.find(video => {
    //finds a correct video
    return video.id === req.params.id;
  });
  console.log(video);
  if (video) {
    const newComment = {
      //creates new comment with data coming from request
      id: helper.getNewId(),
      name: req.body.name,
      comment: req.body.comment,
      timestamp: Math.round(new Date().getTime()) // assigns new timestamp
    };
    if (!newComment.name || !newComment.comment) {
      return res.status(400).json({
        errorMessage: " Please provide name and comment"
      });
    }
    video.comments.push(newComment); // pushes a new comment into array of comment of a specific video
    videos.forEach(newVideo => {
      //finds a video in the array of videos and updates it with new comment
      if (newVideo.id === video.id) {
        newVideo = video;
      }
    });
    helper.writeJSONFile(videosFile, videos); //writes new array of videos to JSON
    res.json(video); //returns updated video
  } else {
    res.status(404).json({
      error: `Video ID${req.params.id} is not found`
    });
  }
});

//delete a comment route
router.delete("/:videoId/comments/:commentId", (req, res) => {
  const video = videos.find(video => {
    // finds correct video
    return video.id === req.params.videoId;
  });
  if (video) {
    const comment = video.comments.find(comment => {
      // finds correct comment
      return comment.id === req.params.commentId;
    });
    if (comment) {
      const updatedVideoComments = video.comments.filter(newComment => {
        return newComment.id !== comment.id; // returns all comments except for a specific one we need to delete
      });
      video.comments = updatedVideoComments; // updates comments with a new array(sans deleted comment)
      res.json(video.comments);
    } else {
      res.status(404).json({
        error: `Comment ID${req.params.id} is not found`
      });
    }
  } else {
    res.status(404).json({
      error: `Video ID${req.params.id} is not found`
    });
  }
});

//add a like on video route
router.put("/:id/likes", (req, res) => {
  let video = videos.find(video => {
    return video.id === req.params.id;
  });
  if (video.id === req.params.id) {
    const likesNumber = parseInt(video.likes.replace(/,/g, ""), 10) + 1;
    video.likes = likesNumber.toLocaleString();
    videos.forEach(newVideo => {
      if (newVideo.id === video.id) {
        newVideo = video;
      }
    });
    helper.writeJSONFile(videosFile, videos);
    return res.json(video);
  } else {
    res.status(404).json({
      error: `Video ID${req.params.id} is not found`
    });
  }
});

module.exports = router;
