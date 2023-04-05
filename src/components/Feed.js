import React , {useEffect, useState}from 'react'
import './Feed.css';
import Post from './Post';
import TweetBox from './TweetBox';
import db from './firebase';
function Feed() {
  const[posts, setPosts] = useState([]);
  useEffect(()=>{

  db.collection('posts').onSnapshot(snapshot=>(
     setPosts(snapshot.docs.map(doc => doc.data( ))) //loop to pass thrugh diff post and .data is getting data about each field like username avatra etc
  ))
  },[])
  return (
    <div className='feed'>
        
        <div className='feed__header'>
            <h2>Home</h2>
        </div>
        
       <TweetBox />
       {posts.map}
        <Post displayName="Megha Varshini" 
        username="mxghx" 
        verified={true} 
        text="yoo its working"
        avatar="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fsearch%3Fq%3DDOG&psig=AOvVaw02GTU2rGDPkgS9oy8fwP0K&ust=1680343504113000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNj4or_1hf4CFQAAAAAdAAAAABAE"
        image="https://i0.wp.com/www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif?fit=450%2C250&ssl=1"/>
        
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        {/* header */}
        {/* tweetbox */}
       
    </div>
  )
}

export default Feed
