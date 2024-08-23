import obj from './dialogs.module.css';
import avatar from './assets/avatar_icon.svg';

const Dialogs = (props) => {
  return (
    <div className={obj.wrapper}>
      <h2 className={obj.title}>Dialogs</h2>
      <div className={obj.chat}>
        <ul className={obj.list}>
          <li className={`${obj.item} ${obj.choose}`}>Sanya</li>
          <li className={obj.item}>Vanya</li>
          <li className={obj.item}>Lera</li>
          <li className={obj.item}>Olga</li>
          <li className={obj.item}>Valera</li>
          <li className={obj.item}>Samuil</li>
          <li className={obj.item}>Voldemar</li>
          <li className={obj.item}>Sanya</li>
          <li className={obj.item}>Vanya</li>
          <li className={obj.item}>Lera</li>
          <li className={obj.item}>Olga</li>
          <li className={obj.item}>Valera</li>
          <li className={obj.item}>Samuil</li>
          <li className={obj.item}>Voldemar</li>
        </ul>
      </div>
      <div className={obj.messages}>
        <div className={obj.avatar}>
          <img className={obj.picture} src={avatar} alt="icon" />         
        </div>
        <div className={obj.letter}>
          <div className={obj.lines}>
            <span className={obj.line__1}></span>
            <span className={obj.line__2}></span>
          </div>
          <p className={obj.message}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit sunt fuga, magni nostrum ipsum in ut dignissimos hic nesciunt soluta doloremque amet, iusto culpa ipsam nam ullam accusantium deserunt odit.</p>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;