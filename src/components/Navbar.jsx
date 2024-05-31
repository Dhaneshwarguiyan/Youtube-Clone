import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import logo from '../assets/yt-logo.png';
import { useStateProvider } from '../utils/StateProvider';
import { reducerCases } from '../utils/reducer';

const Navbar = () => {
  const [{},dispatch ] = useStateProvider();
  const sideBarHandler = ()=>{
    dispatch({type:reducerCases.TOGGLE});
  }
  return (
    <div className='nav'>
        <div className='nav-left'>
            <RxHamburgerMenu size={27} color='white' onClick={sideBarHandler}/>
            <img src={logo} alt="youtube logo" height={30}/>
        </div>
        <div className='search-bar'>
            <input type="text" className='search-area'/>
            <CiSearch size={35} color='white'/>
        </div>
        <div className='nav-right'>
        <IoMdNotificationsOutline size={30} className='nav-not' color='white'/>
        <CiSearch size={30} color='white' className='nav-search-mob'/>
        <div className='nav-profile'>D</div>
        <div>

        </div>
        </div>
    </div>
  )
}

export default Navbar
