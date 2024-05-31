import React from 'react'
import { IoMdHome } from "react-icons/io";
import { FaFire } from "react-icons/fa6";
import { IoIosMusicalNotes } from "react-icons/io";
import { SiYoutubegaming } from "react-icons/si";
import { useStateProvider } from '../utils/StateProvider';
import { reducerCases } from '../utils/reducer';


const SideBar = () => {
  const [{sideBar,activeTab},dispatch] = useStateProvider();

  const activeHandler = (current)=>{
        dispatch({type:reducerCases.ACTIVE_TAB,active:current})
    }
    console.log(activeTab)
  return (
      <>
          {sideBar?<div className={'side-open'}>
        <div className={activeTab === 'new'?'side-tiles-open active':'side-tiles-open'} onClick={()=>activeHandler('new')} >
        <IoMdHome className={activeTab === 'new'?'side-icons-open active-icons':'side-icons-open'}/>
        Home
        </div>
        <div className={activeTab === 'trending'?'side-tiles-open active':'side-tiles-open'} onClick={()=>activeHandler('trending')}>
        <FaFire className={activeTab === 'trending'?'side-icons-open active-icons':'side-icons-open'}/>
            Trending
        </div>
        <div className={activeTab === 'music'?'side-tiles-open active':'side-tiles-open'} onClick={()=>activeHandler('music')}>
        <IoIosMusicalNotes className={activeTab === 'music'?'side-icons-open active-icons':'side-icons-open'}/>
        Music
        </div>
        <div className={activeTab === 'game'?'side-tiles-open active':'side-tiles-open'}  onClick={()=>activeHandler('game')}>
        <SiYoutubegaming className={activeTab === 'game'?'side-icons-open active-icons':'side-icons-open'}/>
        Gaming
        </div>
    </div>:
        <div className={'side-closed' }>
        <div className={activeTab === 'new'?'side-tiles-closed ':'side-tiles-closed'} onClick={()=>activeHandler('new')}>
        <IoMdHome className={activeTab === 'new' ?'side-icons-closed active-closed':'side-icons-closed'}/>
        Home
        </div>
        <div className={activeTab === 'trending' ?'side-tiles-closed ':'side-tiles-closed' } onClick={()=>activeHandler('trending')}>
        <FaFire className={activeTab === 'trending' ?'side-icons-closed active-closed':'side-icons-closed'}/>
            Trending
        </div>
        <div className={activeTab === 'music' ?'side-tiles-closed ':'side-tiles-closed' } onClick={()=>activeHandler('music')}>
        <IoIosMusicalNotes className={activeTab === 'music' ?'side-icons-closed active-closed':'side-icons-closed'}/>
        Music
        </div>
        <div className={activeTab === 'game' ?'side-tiles-closed':'side-tiles-closed' } onClick={()=>activeHandler('game')}>
        <SiYoutubegaming className={activeTab === 'game' ?'side-icons-closed active-closed':'side-icons-closed'}/>
        Gaming
        </div>
    </div>
    }
      </>
  )
}

export default SideBar
