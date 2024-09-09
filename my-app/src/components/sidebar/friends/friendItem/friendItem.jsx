import obj from './friendItem.module.css';

const FriendItem = (props) => {
  return (
    <li className={obj.item} >
      <div className={obj.avatar} >
        <img className={obj.picture} src={props.avatar} alt="avatar" />
      </div>
      <p className={obj.name} >{props.name}</p>
    </li>
  )
}

export default FriendItem;