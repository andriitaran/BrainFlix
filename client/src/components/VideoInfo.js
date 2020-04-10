import React from "react";
import "../styles/main.css";
import Views from "../assets/Icons/SVG/Icon-views.svg";
import Likes from "../assets/Icons/SVG/Icon-likes.svg";
import timeSince from "./timeSince";

export default function VideoInfo({ currentVideo, likeVideo }) {
  const handleLike = event => {
    //adds likes
    event.preventDefault();
    // let likesNumber = parseInt(currentVideo.likes.replace(/,/g, ""), 10) + 1; //converts string with comma into a number
    let video = {
      id: currentVideo.id,
      // likes: likesNumber.toLocaleString() //converts number into a string with coma
    };
    // console.log(video.likes);
    likeVideo(video);
  };

  return (
    <>
      <section className="video-info">
        <div className="video-info-container">
          <div className="video-info-container__top">
            <span className="video-info-container__top--title">
              {currentVideo.title}
            </span>
            <span className="video-info-container__top--author">
              {currentVideo.channel}
            </span>
            <span className="video-info-container__top--date">
              {timeSince(new Date(currentVideo.timestamp))}
            </span>
            <span className="video-info-container__top--views">
              <img src={Views} alt="views" />
              {currentVideo.views}
            </span>
            <span className="video-info-container__top--likes">
              {" "}
              <img src={Likes} alt="likes" onClick={handleLike} />
              {currentVideo.likes}
            </span>
          </div>
          <span className="video-info-container__description">
            {currentVideo.description}
          </span>
        </div>
      </section>
    </>
  );
}
