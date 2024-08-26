import obj from './dialogs.module.css';
import avatar from './assets/avatar_icon.svg';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
  return (
    <div className={obj.wrapper}>
      <h2 className={obj.title}>Dialogs</h2>
      <div className={obj.chat}>
        <ul className={obj.list}>

          <li className={`${obj.item} ${obj.choose}`}>
            <NavLink to='/dialogs/1'>Sanya</NavLink>
          </li>

          <li className={obj.item}>
            <NavLink to='/dialogs/2'>Vanya</NavLink>
          </li>

          <li className={obj.item}>
            <NavLink to='/dialogs/3'>Lera</NavLink>
          </li>

          <li className={obj.item}>
            <NavLink to='/dialogs/4'>Olga</NavLink>
          </li>

          <li className={obj.item}>
            <NavLink to='/dialogs/'>Valera</NavLink>
          </li>

          <li className={obj.item}>
            <NavLink to='/dialogs/'>Samuil</NavLink>
          </li>

          <li className={obj.item}>
            <NavLink to='/dialogs/'>Voldemar</NavLink>
          </li>

          <li className={obj.item}>
            <NavLink to='/dialogs/'>Sanya</NavLink>
          </li>

          <li className={obj.item}>
            <NavLink to='/dialogs/'>Vanya</NavLink>
          </li>

          <li className={obj.item}>
            <NavLink to='/dialogs/'>Lera</NavLink>
          </li>

          <li className={obj.item}>
            <NavLink to='/dialogs/'>Olga</NavLink>
          </li>

          <li className={obj.item}>
            <NavLink to='/dialogs/'>Valera</NavLink>
          </li>

          <li className={obj.item}>
            <NavLink to='/dialogs/'>Samuil</NavLink>
          </li>

          <li className={obj.item}>
            <NavLink to='/dialogs/'>Voldemar</NavLink>
          </li>
          
        </ul>
      </div>
      <div className={obj.messages}>
        <div className={obj.blok}>
          <div className={obj.avatar}>
            <img className={obj.picture} src={avatar} alt="icon" />         
          </div>
          <div className={obj.letter}>
            <p className={obj.message}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit sunt fuga, magni nostrum ipsum in ut dignissimos hic nesciunt soluta doloremque amet, iusto culpa ipsam nam ullam accusantium deserunt odit.
            </p>
          </div>
        </div>
        <div className={obj.blok}>
          <div className={obj.avatar}>
            <img className={obj.picture} src={avatar} alt="icon" />         
          </div>
          <div className={obj.letter}>
            <p className={obj.message}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit sunt fuga, magni nostrum ipsum in ut dignissimos hic nesciunt soluta doloremque amet, iusto culpa ipsam nam ullam accusantium deserunt odit.
            </p>
          </div>
        </div>
        <div className={obj.blok}>
          <div className={obj.avatar}>
            <img className={obj.picture} src={avatar} alt="icon" />         
          </div>
          <div className={obj.letter}>
            <p className={obj.message}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit sunt fuga, magni nostrum ipsum in ut dignissimos hic nesciunt soluta doloremque amet, iusto culpa ipsam nam ullam accusantium deserunt odit.
            </p>
          </div>
        </div>
        
        
      </div>
    </div>
  );
}

export default Dialogs;