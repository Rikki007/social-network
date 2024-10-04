import React from 'react';
import obj from './posts.module.css';
import Post from './postSent/post';




const Posts = (props) => {


  const posts = props.posts.map(post => {
    return (
    
      <Post key={post.id} message={post.message} likes={post.likes} dislikes={post.dislikes} share={post.share}/>
  
    );
  });

  const newPostElement = React.createRef();

  const sendPost = () => {
    props.addPost();
  }

  const removeText = () => {
    if(newPostElement.current.value === '') {
      console.log('nothing to remove');
      return
    }
    newPostElement.current.value = '';
  }

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={obj.interface}>
      <h2 className={obj.title}>My posts</h2>
      <textarea ref={newPostElement} onChange={onPostChange} className={obj.text} value={props.newPostText} rows="4"/>
      <div className={obj.buttons__container}>
        <button onClick={sendPost} className={`${obj.button} ${obj.share}`} type="button">Send</button>
        <button 
       onClick={removeText} className={`${obj.button} ${obj.remove}`} type="button">Remove</button>
      </div>

      { posts }

    </div>
  );
  
}

export default Posts;