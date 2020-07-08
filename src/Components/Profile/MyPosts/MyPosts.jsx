import React from 'react'
import styles from './MyPosts.module.css'
import Post from '../MyPosts/Post/Post'




const MyPosts = (props) => {

  const postItems = props.posts.map(post => <Post message={post.message} likesCount = {post.likesCount}/>)

  let onAddPost = () => {
    props.addPost()
  }

  let onPostChange = (event) => {
    let text = event.target.value;
    props.updateNewPostText(text)
  }


  return (
    <div className={styles.postsBlock}>
      <h3>
        My posts
      </h3>
      <div>
        <div>
          <textarea onChange={onPostChange} value={props.newPostText}/>
        </div>
        <div>
          <button className={styles.add} onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>
        {postItems}
      </div>
    </div>

  )
}
export default MyPosts;