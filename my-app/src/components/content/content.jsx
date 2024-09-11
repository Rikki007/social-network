import Profile from './profile/profile';
import Back from './back/back';
import Posts from './posts/posts';

const Content = (props) => {
  return (
    <main>
      <Back />
      <Profile />
      <Posts state={props.state.postData} addPost={props.addPost}/>
    </main>
  );
  
}

export default Content;