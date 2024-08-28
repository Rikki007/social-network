import obj from './dialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

  let path = '/dialogs/' + props.id;
  return (

    <li className={obj.item}>
      <NavLink to={path} className={navData => navData.isActive ? obj.choose : obj.link}>
        {props.name}
      </NavLink>
    </li>

  );
}

export default DialogItem;