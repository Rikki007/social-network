import yana from './assets/female_black.png';
import innesa from './assets/female_blond.png';
import akito from './assets/female_red.png';
import voldemar from './assets/male_blond.png';
import ibragim from './assets/male_dag.png';
import vorona from './assets/male_afro.png';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const store = {
  _state: {
    profilePage: {
      postData: [
        {id: 1, message: 'Hi, this is my first post!', likes: 13, dislikes: 4, share: 5},
        {id: 2, message: 'what a wonderful day!', likes: 6, dislikes: 1, share: 8},
        {id: 3, message: 'third post!', likes: 22, dislikes: 2, share: 1},
        {id: 4, message: 'I finck you fricky and i like you a lot!', likes: 28, dislikes: 3, share: 11},
      ],
      newPostText: 'Write something.',
    },
  
    dialogsPage: {
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
    },
  
    friends: {
  
      friendsData: [
        {id: 1, userName: 'Yana', userAvatar: yana},
        {id: 2, userName: 'Innesa', userAvatar: innesa},
        {id: 3, userName: 'Akito', userAvatar: akito},
        {id: 4, userName: 'Voldemar', userAvatar: voldemar},
        {id: 5, userName: 'Ibragim', userAvatar: ibragim},
        {id: 6, userName: 'Vorona', userAvatar: vorona},
      ],
  
    }
  
  },
  _callSubscriber() {
    console.log('state was changed');
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  getState() {
    return this._state
  },
  
  dispatch(action) {
    if(action.type === 'ADD-POST') {
      const newPost = {
        id: this._state.profilePage.postData.length + 1,
        message: this._state.profilePage.newPostText,
        likes: 0,
        dislikes: 0,
        share: 0,
      }
    
      if (newPost.message === '' || newPost.message === 'Write something.') {
        console.log('message is empty, write something.');
        return
      }
    
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = 'Write something.';
      this._callSubscriber(this._state);
    }

    if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }

    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
      console.log(this._state.dialogsPage.messagesData)
      console.log(this._state.dialogsPage.newMessageBody)
    }

    if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.messagesData.push({id: this._state.dialogsPage.messagesData.length + 1, isUserMessage: true, text: body});
      this._state.dialogsPage.newMessageBody = '';
      this._callSubscriber(this._state);
    }
  }
}

export default store;

export const addPostActionCreator = () => ({ type: ADD_POST, });

export const updateNewPostTextActionCreator = (text) => 
  ({ type: UPDATE_NEW_POST_TEXT, newText: text, });

export const sendMessageCreator = () => ({ type: SEND_MESSAGE, });

export const updateNewMessageBodyCreator = (body) => 
  ({ type: UPDATE_NEW_MESSAGE_BODY, body: body, });


window.store = store;