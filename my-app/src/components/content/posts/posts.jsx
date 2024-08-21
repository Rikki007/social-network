import obj from './posts.module.css';
import Post from './postSent/post';

const Posts = () => {
  return (
    <div className={obj.interface}>
        <h2 className={obj.title}>My posts</h2>
        <textarea className={obj.text} placeholder="your news" rows="4" cols="55"></textarea>
        <button className={obj.share} type="button">Send</button>
        <Post/>
    </div>
  );
  
}

export default Posts;