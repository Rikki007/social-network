import obj from './sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={obj.sidebar}>
      <ul className={obj.list}>
        <li className={obj.item}>Profile</li>
        <li className={obj.item}>Message</li>
        <li className={obj.item}>News</li>
        <li className={obj.item}>Music</li>
        <li className={obj.item}>Settings</li>
      </ul>
    </aside>
  );
}

export default Sidebar;