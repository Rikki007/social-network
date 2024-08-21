import obj from './post.module.css';
import avatar from '../../profile/profileAssets/avatar.png';
import like from './postSentAssets/like.svg';
import dislike from './postSentAssets/dislike.svg';
import share from './postSentAssets/share.svg';
const Post = () => {
  return (
    <div className={obj.wrapper}>
      <img src={avatar} className={obj.avatar} alt="avatar"/>
      <p className={obj.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repudiandae neque delectus nulla magnam eos. Repellat, ratione! Consequuntur nostrum, soluta nobis laudantium illo obcaecati? Inventore nihil distinctio quasi quod consequuntur?
      </p>
      <div className={obj.actions}>
        <img src={like} className={obj.icon} alt="icon"/>
        <img src={dislike} className={obj.icon} alt="icon"/>
        <img src={share} className={obj.icon} alt="icon"/>
      </div>
    </div>
  );
}

export default Post;