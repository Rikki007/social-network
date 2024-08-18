import obj from './content.module.css';
import back from '../assets/back-pic.jpg';
import ava from '../assets/avatar.png';

const Content = () => {
  return (
    <main className={obj.main}>
      <div className={obj.back}>
        <img className={obj.pic} src={back} alt="back-picture"/>
      </div>
      <div className={obj.info}>
        <img className={obj.avatar} src={ava} alt="avatar"/>
        <h2 className={obj.name}>Jon Doe</h2>
        <div className={obj.infolist}>
          <p className={obj.birth}>22.04.1994</p>
          <p className={obj.city}>Minsk</p>
          <p className={obj.education}>BNTU</p>
          <p className={obj.more}>
            <a className={obj.link} href="https://github.com/">github</a>
          </p>
        </div>
      </div>
      <div className={obj.interface}>
        <h2 className={obj.Title}>My posts</h2>
        <textarea className={obj.text} placeholder="your news" rows="4" cols="55"></textarea>
        <button className={obj.share} type="button">Send</button>
      </div>
      <div></div>
    </main>
  );
  
}

export default Content;