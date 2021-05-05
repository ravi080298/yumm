import React from "react";
import VideoCall from "./videoCall/VideoCall";
import "./ygForm.css";
import { Link } from "react-router-dom";

export default function YgForm() {
  const handleVideoCall = () => {
    return <VideoCall />;
  };
  let currentSelect = "";
  function selectLink(string) {
    console.log(string);
    currentSelect = string;
  }
  return (
    <div className="yg-contact">
      <form method="post" id="contact-form" name="contact-form">
        <div className="inner">
          <div className="top">
            <h2 className="overlay-name">Let's talk.</h2>
            <div className="mid">
              <p className="maxwidth-xs">Share your excitement with us.</p>
              <br />
              <a
                className="link-animation link white"
                id="contact"
                href="mailto:info@yummygum.com"
              >
                <span>
                  info@yummygum.com
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                  >
                    <path
                      class="arrow-vector"
                      fill="#fff"
                      fill-rule="evenodd"
                      d="M120.828427,16.6568542 L111,16.6568542 L111,18.6568542 L120.828427,18.6568542 L117.585786,21.8994949 L119,23.3137085 L124.656854,17.6568542 L123.949747,16.9497475 L119,12 L117.585786,13.4142136 L120.828427,16.6568542 Z"
                      transform="translate(-111 -12)"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div className="info">
            <h4 className="margin-xxs-bottom">Let's talk about</h4>
            <div className="type">
              <ul type="none">
                <li className="child">
                  <lable className="strip-top">
                    <input
                      type="radio"
                      name="reason"
                      value="your great project"
                      className="white"
                    />
                    Your great project
                  </lable>
                </li>
                <li className="child">
                  <label>
                    <input
                      type="radio"
                      name="reason"
                      id="meeting-coffee"
                      value="Meeting for a coffee"
                      className="white"
                    />
                    Meeting for a coffee
                  </label>
                </li>
                <li className="child">
                  <label>
                    <input
                      type="radio"
                      name="reason"
                      id="bird-bees"
                      value="Birds and bees"
                      className="white"
                    />
                    Birds and bees
                  </label>
                </li>
                <li className="child">
                  <label>
                    <input
                      type="radio"
                      name="reason"
                      id="video-call"
                      value="Plan a video call"
                      className="white"
                      onClick={selectLink("video")}
                    />
                    Plan a video call
                  </label>
                </li>
              </ul>
              <button type="button" className="next">
                Next
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
