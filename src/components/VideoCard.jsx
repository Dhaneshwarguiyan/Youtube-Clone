import React from 'react'
import { useStateProvider } from '../utils/StateProvider.jsx';
import { FaCheckCircle } from "react-icons/fa";

const VideoCard = ({items}) => {
  const [{loading}] = useStateProvider();
  console.log(loading)
  return (
    <div className='vid'>
      {
        !items ?
        <div><div className="vid-thm skeleton"></div>
        <div className='vid-desc'>
        <div>
        <div className="vid-para1 skeleton"></div>
        <div className="vid-para2 skeleton"></div>
        </div>
        </div></div>
        :
        <div className='vid1'>
          <img src={items?.snippet?.thumbnails?.high?.url} alt="Video " className='vid-thm1'/>
        
      <div>
      <div className="vid-para11">


        {items?.snippet?.title.length <= 78 ? items?.snippet?.title:`${items?.snippet?.title.slice(0,75)}...`}
      
      
      </div>
      <div className="vid-para21">{items?.snippet?.channelTitle} <FaCheckCircle /></div>
     
      </div>
        </div>
      }
    </div>
  )
}

export default VideoCard
