import Profile from './profile/profile';
import Back from './back/back';
import PostsContainer from './posts/postsContainer';

const Content = (props) => {
  return (
    <main>

      <Back />
      <Profile />
      <PostsContainer store={props.store} />

    </main>
  );
  
}

export default Content;