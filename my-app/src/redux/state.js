import yana from './assets/female_black.png';
import innesa from './assets/female_blond.png';
import akito from './assets/female_red.png';
import voldemar from './assets/male_blond.png';
import ibragim from './assets/male_dag.png';
import vorona from './assets/male_afro.png';
import { rerenderEntireTree } from '../render';

const state = {
  profilePage: {
    postData: [
      {id: 1, message: 'Hi, this is my first post!', likes: 13, dislikes: 4, share: 5},
      {id: 2, message: 'what a wonderful day!', likes: 6, dislikes: 1, share: 8},
      {id: 3, message: 'third post!', likes: 22, dislikes: 2, share: 1},
      {id: 4, message: 'I finck you fricky and i like you a lot!', likes: 28, dislikes: 3, share: 11},
    ],
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

}

export const addPost = (postMessage) => {
  const newPost = {
    id: state.profilePage.postData.length + 1,
    message: postMessage,
    likes: 0,
    dislikes: 0,
    share: 0,
  }
  state.profilePage.postData.push(newPost);
  rerenderEntireTree(state);
};

export default state;