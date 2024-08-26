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
  {id: 1, message: 'Hi'},
  {id: 2, message: 'Hello'},
  {id: 3, message: 'How are you?'},
  {id: 4, message: 'So-so. You?'},
  {id: 5, message: 'As well as you.'},
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

const Dialogs = (props) => {
  return (
    <div className={obj.wrapper}>
      <h2 className={obj.title}>Dialogs</h2>
      <div className={obj.chat}>
        <ul className={obj.list}>

          <DialogsItem id={dialogsData[0].id} name={dialogsData[0].name} />
          <DialogsItem id={dialogsData[1].id} name={dialogsData[1].name} />
          <DialogsItem id={dialogsData[2].id} name={dialogsData[2].name} />
          <DialogsItem id={dialogsData[3].id} name={dialogsData[3].name} />
          <DialogsItem id={dialogsData[4].id} name={dialogsData[4].name} />
          <DialogsItem id={dialogsData[5].id} name={dialogsData[5].name} />
          <DialogsItem id={dialogsData[6].id} name={dialogsData[6].name} />
          <DialogsItem id={dialogsData[7].id} name={dialogsData[7].name} />

        </ul>
      </div>
      <div className={obj.messages}>

        <Message message={messagesData[0].message}/>
        <Message message={messagesData[1].message}/>
        <Message message={messagesData[2].message}/>
        <Message message={messagesData[3].message}/>
        <Message message={messagesData[4].message}/>

      </div>
    </div>
  );
}

export default Dialogs;