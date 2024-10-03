const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
  dialogsData: [
    {id: 1, name: 'Yana',},
    {id: 2, name: 'Andrey',},
    {id: 3, name: 'Vorona',},
    {id: 4, name: 'Dmity',},
    {id: 5, name: 'Inessa',},
    {id: 6, name: 'Aleksandr',},
    {id: 7, name: 'Voldemar',},
    {id: 8, name: 'Ibragim',},
  ],
  
  messagesData: [
    {id: 1, isUserMessage: false, text: 'Hi'},
    {id: 2, isUserMessage: true, text: 'Hello'},
    {id: 3, isUserMessage: false, text: 'How are you?'},
    {id: 4, isUserMessage: true, text: 'So-so. You?'},
    {id: 5, isUserMessage: false, text: 'As well as you.'},
  ],

  newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
  if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    state.newMessageBody = action.body;
  }
  
  if (action.type === SEND_MESSAGE) {
    let body = state.newMessageBody;
    state.newMessageBody = '';
    state.messagesData.push({id: state.messagesData.length + 1, isUserMessage: true, text: body});
  }

  return state;  
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE, });

export const updateNewMessageBodyCreator = (body) => 
  ({ type: UPDATE_NEW_MESSAGE_BODY, body: body, });

export default dialogsReducer;