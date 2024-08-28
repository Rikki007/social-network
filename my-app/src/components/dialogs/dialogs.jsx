import obj from './dialogs.module.css';
import DialogItem from './dialogItem/dialogItem';
import Message from './message/message';


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

let dialogsElements = dialogsData.map((dialog) => {
  return (<DialogItem key={dialog.id} name={dialog.name}/>)
});

let messagesElements = messagesData.map((mes) => {
  return (<Message key={mes.id} message={mes.text}/>)
})

const Dialogs = (props) => {
  return (
    <div className={obj.wrapper}>
      <h2 className={obj.title}>Dialogs</h2>
      <div className={obj.chatList}>
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