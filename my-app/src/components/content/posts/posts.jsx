import React from 'react';
import obj from './posts.module.css';
import Post from './postSent/post';

const Posts = (props) => {

  const posts = props.state.map(post => {
    return (
    
      <Post key={post.id} message={post.message} likes={post.likes} dislikes={post.dislikes} share={post.share}/>
  
    );
  });

  const newPostElement = React.createRef();

  const addPost = () => {
    let text = newPostElement.current.value;
    if(text === '') {
      return
    }
    props.addPost(text);
    newPostElement.current.value = '';
  }

  const removeText = () => {
    if(newPostElement.current.value === '') {
      console.log('nothing to remove');
      return
    }
    newPostElement.current.value = '';
  }

  return (
    <div className={obj.interface}>
      <h2 className={obj.title}>My posts</h2>
      <textarea ref={newPostElement} className={obj.text} placeholder="your news" rows="4"></textarea>
      <div className={obj.buttons__container}>
        <button onClick={addPost} className={`${obj.button} ${obj.share}`} type="button">Send</button>
        <button 
       onClick={removeText} className={`${obj.button} ${obj.remove}`} type="button">Remove</button>
      </div>

      { posts }

    </div>
  );
  
}

export default Posts;