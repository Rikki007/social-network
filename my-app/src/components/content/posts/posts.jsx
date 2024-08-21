import obj from './posts.module.css';

const Posts = () => {
  return (
    <div className={obj.interface}>
        <h2 className={obj.title}>My posts</h2>
        <textarea className={obj.text} placeholder="your news" rows="4" cols="55"></textarea>
        <button className={obj.share} type="button">Send</button>
        <div></div>
    </div>
  );
  
}

export default Posts;