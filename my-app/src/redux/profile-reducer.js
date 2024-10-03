const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
  postData: [
    {id: 1, message: 'Hi, this is my first post!', likes: 13, dislikes: 4, share: 5},
    {id: 2, message: 'what a wonderful day!', likes: 6, dislikes: 1, share: 8},
    {id: 3, message: 'third post!', likes: 22, dislikes: 2, share: 1},
    {id: 4, message: 'I finck you fricky and i like you a lot!', likes: 28, dislikes: 3, share: 11},
  ],
  newPostText: 'Write something.',
};

const profileReducer = (state = initialState, action) => {

  if(action.type === ADD_POST) {
    const newPost = {
      id: state.postData.length + 1,
      message: state.newPostText,
      likes: 0,
      dislikes: 0,
      share: 0,
    }
  
    if (newPost.message === '' || newPost.message === 'Write something.') {
      console.log('message is empty, write something.');
      return
    }
  
    state.postData.push(newPost);
    state.newPostText = 'Write something.';
    
  }
  
  if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newPostText = action.newText;
  }

  return state;

}

export const addPostActionCreator = () => ({ type: ADD_POST, });

export const updateNewPostTextActionCreator = (text) => 
  ({ type: UPDATE_NEW_POST_TEXT, newText: text, });

export default profileReducer;