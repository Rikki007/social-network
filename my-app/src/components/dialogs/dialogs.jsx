import obj from './dialogs.module.css';
import DialogItem from './dialogItem/dialogItem';
import Message from './message/message';



const Dialogs = (props) => {

  let dialogsElements = props.state.dialogsData
  .map((dialog) => {
    return (<DialogItem key={dialog.id} id={dialog.id}
    name={dialog.name}/>)
  });
  
  let messagesElements = props.state.messagesData
  .map((mes) => {
    return (<Message key={mes.id} isUserMessage={mes.isUserMessage} message={mes.text}/>)
  });

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