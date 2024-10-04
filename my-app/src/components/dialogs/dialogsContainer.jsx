import React from 'react';
import Dialogs from './dialogs'
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";



const DialogsContainer = (props) => {

  const state = props.store.getState().dialogsPage;

  const onSendMessageClick = () => {
    // if(newMessageElement.current.value === '') {
    //   console.log('nothing to send');
    //   return
    // }
    props.store.dispatch(sendMessageCreator());
  }

  const onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }

  return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state} />;
}

export default DialogsContainer;