import React from 'react'
import styles from './Post.module.css'

const Post = (props) => {
    return (
        <div className={styles.item}>
            <img src='https://i.ytimg.com/vi/e2klKMj4JEw/maxresdefault.jpg' alt = ''/>
            {props.message}
    <div><span>Likes : {props.likesCount}</span></div>
        </div>
    )
}

export default Post;