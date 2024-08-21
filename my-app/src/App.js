
import './App.css';
import Header from './components/header/header';
import Content from './components/content/content';
import Sidebar from './components/sidebar/sidebar';


function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Sidebar/>
    </div>
  );
}

export default App;
