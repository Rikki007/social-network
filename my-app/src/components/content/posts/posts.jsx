import obj from './posts.module.css';
import Post from './postSent/post';

const Posts = (props) => {

  let posts = props.state.map(post => {
    return (
    
      <Post key={post.id} message={post.message} likes={post.likes} dislikes={post.dislikes} share={post.share}/>
  
    );
  });

  return (
    <div className={obj.interface}>
      <h2 className={obj.title}>My posts</h2>
      <textarea className={obj.text} placeholder="your news" rows="4"></textarea>
      <div className={obj.buttons__container}>
        <button className={`${obj.button} ${obj.share}`} type="button">Send</button>
        <button className={`${obj.button} ${obj.remove}`} type="button">Remove</button>
      </div>

      { posts }

    </div>
  );
  
}

export default Posts;