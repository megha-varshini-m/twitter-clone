import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Avatar } from '@mui/material'
import React from 'react'
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import './Post.css'
function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
  return (
    <div className='post'>
       <div className='post__avatar'> 
       <Avatar src="data:image/jpeg;base64,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"/>
       </div> 
       <div className='post__Body'>
        <div className='post__header'>
        <div className='post__headerText'>
            <h3>
                megha varshini{" "}<span className='post__headerSpecial'>
                    <VerifiedIcon className='post__badge'/>@meghavarshini
                </span>
            </h3>
        </div> 
        <div className='post__headerDescription'>
            <p>
                I challenge you to build a twitter clone
            </p>
        </div>
        </div>
        <img src="https://i0.wp.com/www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif?fit=450%2C250&ssl=1" alt=""/>
        <div className='post__footer'>
            <ChatBubbleOutlineIcon fontSize='small'/>
            < RepeatIcon fontSize='small'/>
            < FavoriteBorderIcon fontSize='small'/>
            < PublishIcon fontSize='small'/>
        </div>
       </div>
    </div>
  )
}

export default Post