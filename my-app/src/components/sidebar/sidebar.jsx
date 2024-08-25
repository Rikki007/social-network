import obj from './sidebar.module.css';
import profile from './sidebarAssets/user.svg';
import message from './sidebarAssets/message.svg';
import news from './sidebarAssets/news.svg';
import music from './sidebarAssets/music.svg';
import settings from './sidebarAssets/setting.svg';

const Sidebar = () => {
  return (
    <aside className={obj.sidebar}>
      <ul className={obj.list}>
        <li className={obj.item}>
          <a className={obj.link} href='/profile'>
            <img src={profile} className={obj.icon} alt='icon'/>
            <p>Profile</p>
          </a>
        </li>
        <li className={obj.item}>
          <a className={obj.link} href='/dialogs'>
            <img src={message} className={obj.icon} alt='icon'/>
            <p>Message</p>
          </a>
        </li>
        <li className={obj.item}>
          <a className={obj.link} href='/news'>
            <img src={news} className={obj.icon} alt='icon'/>
            <p>News</p>   
          </a>
        </li>
        <li className={obj.item}>
          <a className={obj.link} href='/music'>
            <img src={music} className={obj.icon} alt='icon'/>
            <p>Music</p>
        </a>
        </li>
        <li className={obj.item}>
          <a className={obj.link} href='/settings'>
            <img src={settings} className={obj.icon} alt='icon'/>
            <p>Settings</p>            
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;