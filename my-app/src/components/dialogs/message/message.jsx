import obj from './message.module.css';
import avatar from './assets/avatar_icon.svg';

const Message = (props) => {
  return (

    <div className={props.isUserMessage ? obj.blok_right : obj.blok}>

      <div className={obj.avatar}>
        <img className={obj.picture} src={avatar} alt="icon" />         
      </div>

      <div className={obj.letter}>
        <p className={obj.message}>{props.message}</p>
      </div>
          
    </div>

  );
}

export default Message;