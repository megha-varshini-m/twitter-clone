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
          verified = ""
          text="post 1"
          image="https://i0.wp.com/www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif?fit=450%2C250&ssl=1"
          avatars ="https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg"
          />
          
     
       
        <Post
          displayName="megan fox" 
          username="meganuser"
          verified = "true"
          text="post 2"
          avatars="https://m.media-amazon.com/images/M/MV5BMTc5MjgyMzk4NF5BMl5BanBnXkFtZTcwODk2OTM4Mg@@._V1_FMjpg_UX1000_.jpg"
          image="https://media.tumblr.com/tumblr_mcbfrsUQKF1r68qz5.gif"
        />
        <Post
         displayName="brad pitt" 
         username="bradhere"
         verified = "true"
         text="look at me smile"
        avatars="https://cdn.britannica.com/61/137461-050-BB6C5D80/Brad-Pitt-2008.jpg"
        image="https://media.tenor.com/1q5vLyWdhGwAAAAM/brad-pitt.gif"
        />
        <Post
        displayName="ford" 
        username="fordgt"
        verified = "true"
        text="brand new mustang 2023"
        avatars="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/640px-Ford_logo_flat.svg.png"
        image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/4e9a7794-1663012415.jpg?resize=480:*"
       />

                
       
    </div>
  )
}
 
export default Feed
