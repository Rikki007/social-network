import obj from './header.module.css';
import logo from '../assets/social.svg';

const Header = () => {
  return (
    <header className={obj.header}>
      <img src={logo} className={obj.logo} alt="logo" />
      <h1>SocPuls</h1>
    </header>
  );
}

export default Header;