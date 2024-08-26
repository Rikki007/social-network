import obj from './posts.module.css';
import Post from './postSent/post';

let postData = [
  {id: 1, message: 'Hi, this is my first post!', likes: 13, dislikes: 4, share: 5},
  {id: 1, message: 'what a wonderful day!', likes: 6, dislikes: 1, share: 8},
  {id: 1, message: 'third post!', likes: 22, dislikes: 2, share: 1},
];

const Posts = () => {
  return (
    <div className={obj.interface}>
      <h2 className={obj.title}>My posts</h2>
      <textarea className={obj.text} placeholder="your news" rows="4"></textarea>
      <div className={obj.buttons__container}>
        <button className={`${obj.button} ${obj.share}`} type="button">Send</button>
        <button className={`${obj.button} ${obj.remove}`} type="button">Remove</button>
      </div>

      <Post message={postData[0].message} likes={postData[0].likes} dislikes={postData[0].dislikes} share={postData[0].share} />

      <Post message={postData[1].message} likes={postData[1].likes} dislikes={postData[1].dislikes} share={postData[1].share} />

      <Post message={postData[2].message} likes={postData[2].likes} dislikes={postData[2].dislikes} share={postData[2].share} />

    </div>
  );
  
}

export default Posts;