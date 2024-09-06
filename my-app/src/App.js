
import './App.css';
import Header from './components/header/header';
import Content from './components/content/content';
import Dialogs from './components/dialogs/dialogs';
import News from './components/news/news';
import Music from './components/music/music';
import Settings from './components/settings/settings';
import Sidebar from './components/sidebar/sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        
        <div className="app-wrapper">

          <Routes>
            <Route path='/'
              element={<Content state={props.state.profilePage}/>}/>

            <Route path='/profile'
              element={<Content state={props.state.profilePage}/>}/>

            <Route path='/dialogs/*'
              element={<Dialogs state={props.state.dialogsPage}/>}/>

            <Route path='/news'
            element={<News/>}/>

            <Route path='/music'
            element={<Music/>}/>

            <Route path='/settings'
            element={<Settings/>}/>

          </Routes>

        </div>

        <Sidebar />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
