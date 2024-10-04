import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
import Posts from './posts';



const PostsContainer = (props) => {
  
  const state = props.store.getState();

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  const onPostChange = (text) => {
    const action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  }

  return <Posts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.postData} newPostText={state.profilePage.newPostText} />;
  
}

export default PostsContainer;