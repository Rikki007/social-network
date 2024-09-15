import Profile from './profile/profile';
import Back from './back/back';
import Posts from './posts/posts';

const Content = (props) => {
  return (
    <main>

      <Back />
      <Profile />
      <Posts postData={props.profilePage.postData}
        newPostText={props.profilePage.newPostText}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />

    </main>
  );
  
}

export default Content;