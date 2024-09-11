import React from 'react';
import obj from './dialogs.module.css';
import DialogItem from './dialogItem/dialogItem';
import Message from './message/message';
import send from './assets/send.png';



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

  const newMessageElement = React.createRef();

  const addMessage = () => {
    if(newMessageElement.current.value === '') {
      console.log('nothing to send');
      return
    }
    console.log(newMessageElement.current.value);
  }

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

      <div className={obj.typing_wrapper}>

        <textarea className={obj.typing_area} ref={newMessageElement}></textarea>

        <img onClick={addMessage} className={obj.send} src={send} alt="icon" />

      </div>

    </div>
  );
}

export default Dialogs;