import React, { Component } from "react";
import "../styles/main.css";
import Play from "../assets/Icons/SVG/Icon-play.svg";
import FullScreen from "../assets/Icons/SVG/Icon-fullscreen.svg";
import Volume from "../assets/Icons/SVG/Icon-volume.svg";
import DefaultVideo from "../assets/Video/BrainStation.mp4";

export default class VideoPlayer extends Component {
  constructor(props) {
    //create a ref for the video object
    super(props);
    this.mainVideo = React.createRef();
  }

  render() {
    return (
      <section className="video-player">
        <div className="video-player__container">
          <video
            ref={this.mainVideo}
            className="current-video"
            id={this.props.currentVideo.id}
            width="320"
            height="183"
            poster={this.props.currentVideo.image}
          >
            <source src={DefaultVideo} type="video/mp4"></source>
          </video>

          <div className="video-player__container--controls">
            <button
              onClick={() => {
                if (this.mainVideo.current.paused) {
                  this.mainVideo.current.play();
                } else {
                  this.mainVideo.current.pause();
                }
              }}
              className="video-player__container--controls--play"
              id="playpause"
              title="play"
            >
              <img src={Play} alt="play button" />
            </button>
            <div className="video-player__container--controls--scrubber"></div>
            <div className="video-player__container--controls--functions">
              <img src={FullScreen} alt="full screen" />
              <img src={Volume} alt="volume" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
