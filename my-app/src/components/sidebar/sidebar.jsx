import obj from './sidebar.module.css';
import profile from './sidebarAssets/user.svg';
import message from './sidebarAssets/message.svg';
import news from './sidebarAssets/news.svg';
import music from './sidebarAssets/music.svg';
import settings from './sidebarAssets/setting.svg';
import Friends from './friends/friends'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className={obj.sidebar}>
      <ul className={obj.list}>
        <li className={obj.item}>
          <NavLink className={navData => navData.isActive ? obj.active :
            obj.link} to='/profile'>
            <img src={profile} className={obj.icon} alt='icon'/>
            <p>Profile</p>
          </NavLink>
        </li>
        <li className={obj.item}>
          <NavLink className={navData => navData.isActive ? obj.active :
            obj.link} to='/dialogs'>
            <img src={message} className={obj.icon} alt='icon'/>
            <p>Message</p>
          </NavLink>
        </li>
        <li className={obj.item}>
          <NavLink className={navData => navData.isActive ? obj.active :
            obj.link} to='/news'>
            <img src={news} className={obj.icon} alt='icon'/>
            <p>News</p>   
          </NavLink>
        </li>
        <li className={obj.item}>
          <NavLink className={navData => navData.isActive ? obj.active :
            obj.link} to='/music'>
            <img src={music} className={obj.icon} alt='icon'/>
            <p>Music</p>
        </NavLink>
        </li>
        <li className={obj.item}>
          <NavLink className={navData => navData.isActive ? obj.active :
            obj.link} to='/settings'>
            <img src={settings} className={obj.icon} alt='icon'/>
            <p>Settings</p>            
          </NavLink>
        </li>
      </ul>

      <Friends />

    </aside>
  );
}

export default Sidebar;