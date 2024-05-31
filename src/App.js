import React from 'react';
import './components/styles.css'
import { StateProvider } from './utils/StateProvider';
import Feed from './components/Feed.jsx';
import Navbar from './components/Navbar.jsx';
import SideBar from './components/SideBar.jsx';



const App = () => {
  return (
    <StateProvider>
       <div className='app'>
        <Navbar />
        <div className='app-body'>
        <SideBar />
        <Feed />
        </div>
       </div>
    </StateProvider>
  )
}

export default App;
