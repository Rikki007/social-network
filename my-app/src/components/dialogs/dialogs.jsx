import React from 'react';
import obj from './dialogs.module.css';
import DialogItem from './dialogItem/dialogItem';
import Message from './message/message';
import send from './assets/send.png';
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/state";



const Dialogs = (props) => {

  const state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogsData
  .map((dialog) => {
    return (<DialogItem key={dialog.id} id={dialog.id}
    name={dialog.name}/>)
  });
  
  let messagesElements = state.messagesData
  .map((mes) => {
    return (<Message key={mes.id} isUserMessage={mes.isUserMessage} message={mes.text}/>)
  });

  let newMessagesBody = state.newMessagesBody;

  const onSendMessageClick = () => {
    // if(newMessageElement.current.value === '') {
    //   console.log('nothing to send');
    //   return
    // }
    props.store.dispatch(sendMessageCreator());
  }

  const onNewMessageChange = (e) => {
    const body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body))
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
        <div>
          <textarea className={obj.typing_area}
                    value={newMessagesBody}
                    onChange={onNewMessageChange}
                    placeholder='Enter your massage'></textarea>
        </div>
        <div>
          <img onClick={onSendMessageClick} className={obj.send} src={send} alt="icon" />
        </div>
      </div>

    </div>
  );
}

export default Dialogs;