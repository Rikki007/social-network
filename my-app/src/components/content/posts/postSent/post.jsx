import obj from './post.module.css';
import avatar from '../../profile/profileAssets/avatar.png';
import like from './postSentAssets/like.svg';
import dislike from './postSentAssets/dislike.svg';
import share from './postSentAssets/share.svg';
const Post = (props) => {

  return (
    <div className={obj.wrapper}>

      <img src={avatar} className={obj.avatar} alt="avatar"/>

      <p className={obj.text}>
        { props.message }
      </p>

      <div className={obj.actions}>

        <div className={obj.feedback}>
          <img src={like} className={obj.icon} alt="icon"/>
          <span className={obj.counter}>
            { props.likes }
          </span>
        </div>

        <div className={obj.feedback}>
          <img src={dislike} className={obj.icon} alt="icon"/>
          <span className={obj.counter}>
            { props.dislikes }
          </span>
        </div>
        
        <div className={obj.feedback}>
          <img src={share} className={obj.icon} alt="icon"/>
          <span className={obj.counter}>
            {props.share}
          </span>
        </div>
        
      </div>

    </div>
  );
}

export default Post;