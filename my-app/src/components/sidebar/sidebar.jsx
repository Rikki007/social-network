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
        <li className={`${obj.item} ${obj.profile}`}>
          <img src={profile} className={obj.icon} alt='icon'/>
          <p>Profile</p>
        </li>
        <li className={`${obj.item} ${obj.message}`}>
          <img src={message} className={obj.icon} alt='icon'/>
          <p>Message</p>
        </li>
        <li className={`${obj.item} ${obj.news}`}>
          <img src={news} className={obj.icon} alt='icon'/>
          <p>News</p>
        </li>
        <li className={`${obj.item} ${obj.music}`}>
          <img src={music} className={obj.icon} alt='icon'/>
          <p>Music</p>
        </li>
        <li className={`${obj.item} ${obj.settings}`}>
          <img src={settings} className={obj.icon} alt='icon'/>
          <p>Settings</p>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;