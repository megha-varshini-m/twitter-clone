
import { Avatar, Button } from '@mui/material';
import React from 'react'
import './TweetBox.css';


function TweetBox() {
  return (
    <div className='tweetBox'>
      <form>
      <div className='tweetBox__input'>
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7u9xdjc2wSHDcnYd2y0iNTVoUJXJAEWrXRA&usqp=CAU"/>
      <input placeholder="What's Happening?" type="text"/>  
      </div>
 
      <input className='tweetBox__imageInput' 
      placeholder="Optional: Enter image URL" 
      type="text"/> 
      <Button className='tweetBox__tweetbutton'>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox