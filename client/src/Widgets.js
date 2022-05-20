import React from "react";
import "./Widgets.css";
import { AiOutlineSearch } from 'react-icons/ai'

import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";
function Widgets() {
    return (
        <div className="widgets">
          <div className="widgets__input">
            <AiOutlineSearch className="widgets__searchIcon" />
            <input placeholder="Search Twitter" type="text" />
          </div>
          <div className="widgets__widgetContainer">
             <h2>What's happening</h2>
          </div>
          <TwitterTimelineEmbed
          sourceType="profile"
          screenName="ethereum"
          options={{ height: 800 }}
        />
        </div>
      );
}

export default Widgets;