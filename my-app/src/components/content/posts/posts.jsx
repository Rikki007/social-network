import obj from './posts.module.css';
import Post from './postSent/post';

let postData = [
  {id: 1, message: 'Hi, this is my first post!', likes: 13, dislikes: 4, share: 5},
  {id: 2, message: 'what a wonderful day!', likes: 6, dislikes: 1, share: 8},
  {id: 3, message: 'third post!', likes: 22, dislikes: 2, share: 1},
  {id: 4, message: 'I finck you fricky and i like you a lot!', likes: 28, dislikes: 3, share: 11},
];

let posts = postData.map(post => {
  return (
  
    <Post key={post.id} message={post.message} likes={post.likes} dislikes={post.dislikes} share={post.share}/>

  );
})

const Posts = () => {
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