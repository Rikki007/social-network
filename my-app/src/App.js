
import './App.css';
import Header from './components/header/header';
// import Content from './components/content/content';
import Dialogs from './components/dialogs/dialogs';
import Sidebar from './components/sidebar/sidebar';


function App() {
  return (
    <div className="App">
      <Header />
      {/* <Content /> */}
      <div className="app-wrapper">

        <Dialogs />
      </div>

      <Sidebar />
    </div>
  );
}

export default App;
