import logo from '../assets/social.svg';

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>SocPuls</h1>
    </header>
  );
}

export default Header;