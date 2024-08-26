import obj from './dialogs.module.css';
import avatar from './assets/avatar_icon.svg';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {

  let path = '/dialogs/1' + props.id;
  return (

    <li className={obj.item}>
      <NavLink to={path} className={navData => navData.isActive ? obj.choose : obj.link}>
        {props.name}
      </NavLink>
    </li>

  );
}

const Message = (props) => {
  return (

    <div className={obj.blok}>
          <div className={obj.avatar}>
            <img className={obj.picture} src={avatar} alt="icon" />         
          </div>
          <div className={obj.letter}>
            <p className={obj.message}>{props.message}</p>
          </div>
        </div>

  );
}

const Dialogs = (props) => {
  return (
    <div className={obj.wrapper}>
      <h2 className={obj.title}>Dialogs</h2>
      <div className={obj.chat}>
        <ul className={obj.list}>

          <DialogsItem id='1' name='Yana' />
          <DialogsItem id='2' name='Andrey' />
          <DialogsItem id='3' name='Vorona' />
          <DialogsItem id='4' name='Dmity' />
          <DialogsItem id='5' name='Inessa' />
          <DialogsItem id='6' name='Aleksandr' />
          <DialogsItem id='7' name='Voldemar' />
          <DialogsItem id='8' name='Ibragim' />
          <DialogsItem id='9' name='Nurlan' />

        </ul>
      </div>
      <div className={obj.messages}>

        <Message message='Hi'/>
        <Message message='Hello'/>
        <Message message='How are you?'/>
        <Message message='So-so. You?'/>
        <Message message='As well as you.'/>
        
      </div>
    </div>
  );
}

export default Dialogs;