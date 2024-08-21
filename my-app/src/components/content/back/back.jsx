import back from './backAssets/back-pic.jpg';
import obj from './back.module.css';

const Back = () => {
  return (
    <div className={obj.back}>
      <img className={obj.pic} src={back} alt="back-picture"/>
    </div>
  );
}

export default Back;