import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  debugger;
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        addPostGlobal={props.addPostGlobal}
        newPostText={props.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  )
}

export default Profile;    