import Profile from './profile/profile';
import Back from './back/back';
import Posts from './posts/posts';

const Content = (props) => {
  return (
    <main>

      <Back />
      <Profile />
      <Posts
        postData={props.profilePage.postData}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />

    </main>
  );
  
}

export default Content;