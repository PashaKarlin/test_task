import React from 'react'
import styles from './Profile.module.css'


const Profile = () => {
    return(
        <div className ={styles.content}>
          <div>
            <img src = 'https://i.imgur.com/RRUe0Mo.png' className = 'background_img'/>
          </div>
          <div>
            profile
          </div>
          <div>
            My posts
            <div>
              New post
            </div>
            <div className = {styles.posts  }>
              <div className = {styles.item}>
                post1
              </div>
              <div className = {styles.item}>
                post2
              </div>
            </div>
          </div>
        </div>
      )
}

export default Profile;    