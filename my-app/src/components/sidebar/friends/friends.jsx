import obj from './friends.module.css';
import friends from './assets/group.svg';


const Friends = () => {
  return (
    <div className={obj.wrapper} >

        <div className={obj.title_block} >
          <img src={friends} className={obj.icon} alt="icon" />
          <p className={obj.title} >Friends</p>
        </div>
            
        <ul className={obj.list} >

          <li className={obj.item} >
            <div className={obj.avatar} ></div>
            <p className={obj.name} >Yana</p>
          </li>

          <li className={obj.item} >
            <div className={obj.avatar} ></div>
            <p className={obj.name} >Inessa</p>
          </li>

          <li className={obj.item} >
            <div className={obj.avatar} ></div>
            <p className={obj.name} >Vorona</p>
          </li>

        </ul>

    </div>
  )
}

export default Friends;
