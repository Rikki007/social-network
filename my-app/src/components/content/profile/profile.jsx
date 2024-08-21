import ava from './profileAssets/avatar.png';
import obj from './profile.module.css'

const Profile = () => {
  return (
    <div className={obj.info}>
      <img className={obj.avatar} src={ava} alt="avatar"/>
      <h2 className={obj.name}>Jon Doe</h2>
      <div className={obj.infolist}>
        <p className={obj.birth}>22.04.1994</p>
        <p className={obj.city}>Minsk</p>
        <p className={obj.education}>BNTU</p>
        <p className={obj.more}>
          <a className={obj.link} href="https://github.com/">github</a>
        </p>
      </div>
    </div>
  );
}

export default Profile;