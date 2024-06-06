import React from 'react';
import { BiLike } from "react-icons/bi";
import { convert_date } from '../utils/DataHandler';

const CommentCard = ({item}) => {
  const time = convert_date(item?.snippet?.topLevelComment?.snippet?.publishedAt)
  return (
    <div className="cmt-card">
        <img className='cmt-img' src={item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} alt="" />
        <div className="cmt-right">
            <div className="cmt-name">
                {item?.snippet?.topLevelComment?.snippet?.authorDisplayName.length>10?item?.snippet?.topLevelComment?.snippet?.authorDisplayName.slice(0,10):item?.snippet?.topLevelComment?.snippet?.authorDisplayName}
                <div className='cmt-date'>{time}</div>
            </div>
            <div className="cmt-text">{item?.snippet?.topLevelComment?.snippet?.textDisplay}</div>
            <div className="cmt-likes">
            <BiLike />
            {item?.snippet?.topLevelComment?.snippet?.likeCount}
            </div>
        </div>
    </div>
  )
}

export default CommentCard
