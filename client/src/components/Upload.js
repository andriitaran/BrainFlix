import React from "react";
import UploadImage from "../assets/Images/video-list-5.jpg";
import Header from "./Header";
import uuid from "uuid/v4";
import axios from "axios";

export default function Upload() {
  const uploadVideo = video => {
    // had to move this function from APP component as I couldn't find a way to pass it as props to UPLOAD component
    axios({
      method: "post", //posts comments to the API
      url: `http://localhost:5000/api/videos/`,
      data: {
        id: video.id,
        title: video.title,
        channel: video.channel,
        description: video.description,
        image: video.image
      }
    }).then(response => {
      console.log("Video was uploaded");
    });
  };
  const handleUpload = event => {
    //creates new comment
    event.preventDefault();
    let video = {
      id: uuid(),
      channel: "John Doe",
      title: event.target.title.value,
      description: event.target.description.value,
      image:
        "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/vancouverbc/Aerial_Sunset_Vancouver_d3_copy_1bb86ed0-1edc-4cda-841d-0b033ca0bb72.jpg"
    };
    console.log(video);
    uploadVideo(video);
    document.querySelector("#upload-video").reset();
  };

  return (
    <>
      <Header />
      <section className="upload-page">
        <div className="upload-page-container">
          <span className="upload-page-container__title">Upload Video</span>
          <div className="upload-page-container__thumbnail">
            <span className="upload-page-container__thumbnail--text">
              VIDEO THUMBNAIL
            </span>
            <img
              className="upload-page-container__thumbnail--img"
              src={UploadImage}
              alt="video thumbnail"
            />
          </div>
          <form
            id="upload-video"
            className="upload-page-container__upload-section"
            action="submit"
            onSubmit={handleUpload}
          >
            <span className="upload-page-container__upload-section--title">
              TITLE YOUR VIDEO
            </span>
            <input
              name="title"
              className="upload-page-container__upload-section--add-title"
              type="text"
              placeholder="Add a title to your video"
            />
            <span className="upload-page-container__upload-section--description">
              ADD A VIDEO DESCRIPTION
            </span>
            <textarea
              name="description"
              className="upload-page-container__upload-section--add-description"
              placeholder="Add a description of your video"
            ></textarea>
            <div className="upload-page-container__upload-section-container">
              <input
                className="upload-page-container__upload-section--publish"
                id="button"
                type="submit"
                value="PUBLISH"
              ></input>
              <input
                className="upload-page-container__upload-section--cancel"
                id="button"
                type="submit"
                value="CANCEL"
              ></input>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
