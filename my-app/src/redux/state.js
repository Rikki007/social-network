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

}

export default state;