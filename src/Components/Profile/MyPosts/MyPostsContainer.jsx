import React from 'react'
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../Redux/profileReducer'
import MyPosts from './MyPosts'



const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        // props.addPost();
        props.store.dispatch(addPostActionCreator())
    }

    let PostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    let newPostText = props.store.getState().profilePage.newPostText

    return (<MyPosts addPost={addPost} updateNewPostText={PostChange} newPostText={newPostText}
        posts={state.profilePage.posts} />)
}
export default MyPostsContainer;