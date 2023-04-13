import React from 'react';
import './Feed.css';
import Post from './Post';
import TweetBox from './TweetBox';
// import db from './firebase';
function Feed() {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {

  // db.collection("posts").onSnapshot((snapshot)=>
  //    setPosts(snapshot.docs.map((doc) => doc.data( ))) //loop to pass thrugh diff post and .data is getting data about each field like username avatra etc
  // );
  // },[]);
  return (
    <div className='feed'>
        
        <div className='feed__header'>
            <h2>Home</h2>
        </div>
        
       <TweetBox />
      
          <Post 
          displayName="megha varshini m" 
          username="mxghx"
          verified = "true"
          text="post 1"
          image="https://i0.wp.com/www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif?fit=450%2C250&ssl=1"
          avatars ="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-png-vectors%2Fdog-logo&psig=AOvVaw3FmcEA3YqConV9wDEpxWtF&ust=1681456988631000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPihjMappv4CFQAAAAAdAAAAABAJ"
          />
          
     
       
        <Post
          displayName="user 2" 
          username="ABCuser"
          verified = ""
          text="post 2"
          avatars="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Fdog-logo-design--624874517029834217%2F&psig=AOvVaw3FmcEA3YqConV9wDEpxWtF&ust=1681456988631000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPihjMappv4CFQAAAAAdAAAAABAE"
          image="https://i0.wp.com/www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif?fit=450%2C250&ssl=1"
        />
        <Post/>
        <Post/>
        <Post/>
        
       
    </div>
  )
}

export default Feed
