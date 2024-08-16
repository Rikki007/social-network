import back from './back-pic.jpg';
import ava from './avatar.png';

const Main = () => {
  return (
    <main>
      <div className="back">
        <img className="back__pic" src={back} alt="back-picture"/>
      </div>
      <div className="user-info">
        <img className="user-info__avatar" src={ava} alt="avatar"/>
        <h2 className="user-info__name">Jon Doe</h2>
        <div className="user-infolist">
          <p className="user-infolist__birth">22.04.1994</p>
          <p className="user-infolist__city">Minsk</p>
          <p className="user-infolist__education">BNTU</p>
          <p className="user-infolist__more">
            <a href="https://github.com/">github</a>
          </p>
        </div>
      </div>
      <div className="post-interface">
        <h2 className="post-interface__Title">My posts</h2>
        <textarea className="post-interface__text" placeholder="your news" rows="3" cols="55"></textarea>
      </div>
      <div></div>
    </main>
  );
  
}

export default Main;