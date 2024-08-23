import Profile from './profile/profile';
import Back from './back/back';
import Posts from './posts/posts';

const Content = () => {
  return (
    <main>
      <Back />
      <Profile />
      <Posts />
    </main>
  );
  
}

export default Content;