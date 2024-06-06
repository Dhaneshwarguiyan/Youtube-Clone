import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { convert_date } from '../utils/DataHandler';
import { Link } from 'react-router-dom';

const VideoCard2 = ({item}) => {
  return (
    <Link to={`/videoPlayer/${item?.id?.videoId}`} className='vid-link'>
    <div className='vid-card-2'>
        <img className='vid-card-left' src={item?.snippet?.thumbnails?.high?.url} alt="" />
      <div className="vid-card-right">
        <div className="vid-card-name">
        {item?.snippet?.title.length <= 50
                  ? item?.snippet?.title
                  : `${item?.snippet?.title.slice(0, 49)}...`}
        </div>
        <Link to={`/channels/${item?.snippet?.channelId}`} className='vid-link'>
        <div className="vid-card-chn">{item?.snippet?.channelTitle}  <FaCheckCircle /></div>
        </Link>

        <div className="vid-card-time">{
          convert_date(item?.snippet?.publishedAt) !== null?convert_date(item?.snippet?.publishedAt):""
}
        </div>
      </div>
    </div>
    </Link>
  )
}

export default VideoCard2
