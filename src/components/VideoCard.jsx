import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const VideoCard = ({ items }) => {
  return (
    <div className="vid">
      {!items ? (
        <div>
          <div className="vid-thm skeleton"></div>
          <div className="vid-desc">
            <div>
              <div className="vid-para1 skeleton"></div>
              <div className="vid-para2 skeleton"></div>
            </div>
          </div>
        </div>
      ) : (
        <Link to={`/videoPlayer/${items?.id?.videoId}`} className="vid-link" >
          <div className="vid1">
            <img
              src={items?.snippet?.thumbnails?.high?.url}
              alt="Video "
              className="vid-thm1"
            />

            <div>
              <div className="vid-para11">
                {items?.snippet?.title.length <= 78
                  ? items?.snippet?.title
                  : `${items?.snippet?.title.slice(0, 75)}...`}
              </div>
              <Link to={`/channels/${items?.snippet?.channelId}`} className='vid-link '>
              <div className="vid-para21">
                {items?.snippet?.channelTitle} <FaCheckCircle className="vid-check"/>
              </div>
              </Link>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default VideoCard;
