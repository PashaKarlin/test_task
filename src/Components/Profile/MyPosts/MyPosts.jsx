import React from 'react'
import styles from './MyPosts.module.css'
import Post from '../MyPosts/Post/Post'



const MyPosts = (props) => {

  const postItems = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)

  let newText = React.createRef()

  let addPost = () => {
    let text = newText.current.value;
    props.addPostGlobal(text);
    newText.current.value =" ";
  }

 return (
    <div className={styles.postsBlock}>
      <h3>
        My posts
      </h3>
      <div>
        <div>
          <textarea ref = {newText}></textarea>
        </div>
        <div>
          <button className={styles.add} onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>
        {postItems}
      </div>
    </div>

  )
}
export default MyPosts;