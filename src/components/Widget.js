import React from 'react'
import './Widget.css';
import SearchIcon from '@mui/icons-material/Search';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";


function Widget() {
  return (
    <div className='widgets'>
        <div className='widgets__input'>
          <SearchIcon className='widgets__searchIcon'/>
          <input placeholder="Search twitter" type="text"/>
        </div>
        <div className="widgets__widgetsContainer">
          <h2>whats happening</h2>
          <TwitterTweetEmbed tweetId={"858551177860055040"} />
          <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
        </div>
    </div>
  )
}

export default Widget