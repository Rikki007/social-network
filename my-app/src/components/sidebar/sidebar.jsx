import obj from './sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={obj.sidebar}>
      <ul className={obj.list}>
        <li className={`${obj.item} ${obj.profile}`}>Profile</li>
        <li className={`${obj.item} ${obj.message}`}>Message</li>
        <li className={`${obj.item} ${obj.news}`}>News</li>
        <li className={`${obj.item} ${obj.music}`}>Music</li>
        <li className={`${obj.item} ${obj.settings}`}>Settings</li>
      </ul>
    </aside>
  );
}

export default Sidebar;