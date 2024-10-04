
import './App.css';
import Header from './components/header/header';
import Content from './components/content/content';
import DialogsContainer from './components/dialogs/dialogsContainer';
import News from './components/news/news';
import Music from './components/music/music';
import Settings from './components/settings/settings';
import Sidebar from './components/sidebar/sidebar';
import { Routes, Route } from 'react-router-dom';


function App(props) {

  return (
    
      <div className="App">
        <Header />
        
        <div className="app-wrapper">

          <Routes>
            <Route path='/'
              element={<Content store={props.store} />}
            />

            <Route path='/profile'
              element={<Content store={props.store} />}
            />

            <Route path='/dialogs/*'
              element={<DialogsContainer store={props.store}/>}/>

            <Route path='/news'
            element={<News/>}/>

            <Route path='/music'
            element={<Music/>}/>

            <Route path='/settings'
            element={<Settings/>}/>

          </Routes>

        </div>

        <Sidebar state={props.state.friends}/>
      </div>
    
  );
}

export default App;
