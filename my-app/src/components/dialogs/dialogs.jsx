import obj from './dialogs.module.css';
import avatar from './assets/avatar_icon.svg';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {

  let path = '/dialogs/' + props.id;
  return (

    <li className={obj.item}>
      <NavLink to={path} className={navData => navData.isActive ? obj.choose : obj.link}>
        {props.name}
      </NavLink>
    </li>

  );
}

let dialogsData = [
  {id: 1, name: 'Yana',},
  {id: 2, name: 'Andrey',},
  {id: 3, name: 'Vorona',},
  {id: 4, name: 'Dmity',},
  {id: 5, name: 'Inessa',},
  {id: 6, name: 'Aleksandr',},
  {id: 7, name: 'Voldemar',},
  {id: 8, name: 'Ibragim',},
];

let messagesData = [
  {id: 1, text: 'Hi'},
  {id: 2, text: 'Hello'},
  {id: 3, text: 'How are you?'},
  {id: 4, text: 'So-so. You?'},
  {id: 5, text: 'As well as you.'},
];



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

let dialogsElements = dialogsData.map((dialog) => {
  return (<DialogsItem id={dialog.id} name={dialog.name}/>)
});

let messagesElements = messagesData.map((mes) => {
  return (<Message message={mes.text}/>)
})

const Dialogs = (props) => {
  return (
    <div className={obj.wrapper}>
      <h2 className={obj.title}>Dialogs</h2>
      <div className={obj.chat}>
        <ul className={obj.list}>

          { dialogsElements }

        </ul>
      </div>
      <div className={obj.messages}>

        { messagesElements }

      </div>
    </div>
  );
}

export default Dialogs;