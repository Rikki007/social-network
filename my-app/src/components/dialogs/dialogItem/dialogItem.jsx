import obj from './dialogItem.module.css';
import icon from './assets/avatar_icon.svg';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

  let path = '/dialogs/' + props.id;
  return (

    <li className={obj.item}>
      <NavLink to={path} className={navData => navData.isActive ? obj.choose : obj.link}>
        <img src={icon} className={obj.icon} alt="icon" />
        {props.name}
      </NavLink>
    </li>

  );
}

export default DialogItem;