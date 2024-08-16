const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-list__item profile">Profile</li>
        <li className="sidebar-list__item message">Message</li>
        <li className="sidebar-list__item news">News</li>
        <li className="sidebar-list__item music">Music</li>
        <li className="sidebar-list__item settings">Settings</li>
      </ul>
    </aside>
  );
}

export default Sidebar;