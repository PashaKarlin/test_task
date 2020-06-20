import React from 'react'
import styles from './MyPosts.module.css'
import Post from '../MyPosts/Post/Post'
const MyPosts = () => {
  
  
  const postData =[
    {id : 1, message: 'Hi, how are you', likesCount: 12},
    {id : 2, message: 'Its my first post', likesCount: 21},
]
  return (
    <div className={styles.postsBlock}>
      <h3>
        My posts
      </h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button className = {styles.add}>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>
        <Post message={postData[0].message} likesCount = {postData[0].likesCount}/>
        <Post message={postData[1].message} likesCount = {postData[1].likesCount}/>
      </div>
    </div>
  )
}
export default MyPosts;