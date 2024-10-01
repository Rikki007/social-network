const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

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

export default profileReducer;