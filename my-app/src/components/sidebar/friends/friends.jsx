import obj from './friends.module.css';
import FriendItem from './friendItem/friendItem';
import friends from './assets/group.svg';


const Friends = (props) => {

  let friendElements = props.state.friendsData
  .map((friend) => {
    return (<FriendItem key={friend.id} id={friend.id}
    name={friend.userName} avatar={friend.userAvatar} />)
  })

  return (
    <div className={obj.wrapper} >

        <div className={obj.title_block} >
          <img src={friends} className={obj.icon} alt="icon" />
          <p className={obj.title} >Friends</p>
        </div>
            
        <ul className={obj.list} >

          { friendElements }

        </ul>

    </div>
  )
}

export default Friends;
