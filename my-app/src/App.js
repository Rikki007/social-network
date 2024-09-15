
import './App.css';
import Header from './components/header/header';
import Content from './components/content/content';
import Dialogs from './components/dialogs/dialogs';
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
              element={<Content profilePage={props.state.profilePage}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
              />}
            />

            <Route path='/profile'
              element={<Content
                profilePage={props.state.profilePage}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
              />}
            />

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

        <Sidebar state={props.state.friends}/>
      </div>
    
  );
}

export default App;
