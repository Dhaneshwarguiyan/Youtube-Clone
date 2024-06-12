import React, { useState } from 'react';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import { StateProvider } from './utils/StateProvider';
import './components/styles.css'
import Feed from './components/Feed.jsx';
import Navbar from './components/Navbar.jsx';
import SideBar from './components/SideBar.jsx';
import VideoPlayer from './components/VideoPlayer.jsx';
import ChannelDisplay from './components/ChannelDisplay.jsx';

const App = () => {
  const [searchActive,setSearchActive] = useState(false);
  const clickHandler = ()=>{
      setSearchActive(false);
  }
  return (
    <BrowserRouter>

    <StateProvider>
       <div className='app'>
        <Navbar searchActive={searchActive} setSearchActive={setSearchActive}/>
        <div className='app-body'>
        <div className='app-side' onClick={clickHandler}><SideBar /></div>
        <div onClick={clickHandler}>
        <Routes >
        <Route path='/' exact element={<Feed />}/>
        <Route path='/videoPlayer/:videoId' element={<VideoPlayer/>}/>
        <Route path='/channels/:channelId' element={<ChannelDisplay/>}/>
        </Routes>
        </div>
        
        </div>
        <div className="app-down" onClick={clickHandler}>
        <SideBar />
        </div>
        </div>
    </StateProvider>
    </BrowserRouter>
  )
}

export default App;
