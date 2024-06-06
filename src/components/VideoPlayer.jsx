import React, { useState } from "react";
import ReactPlayer from "react-player";
import { FaCheckCircle } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { useStateProvider } from "../utils/StateProvider";
import { Link, useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import VideoCard2 from "./VideoCard2";
import { convert_date, convert_form } from "../utils/DataHandler";
import { useEffect } from "react";
import getData from "../utils/apiEndpoint";
import { reducerCases } from "../utils/reducer";
import placeholder from '../assets/images.png';

const VideoPlayer = () => {
  const [desc,setDesc] = useState(false);
  const [{ channelDetails, videoDetails, comments, relatedVideo }, dispatch] = useStateProvider();
  const { videoId } = useParams();
  const clickHandler = ()=>{
    setDesc(!desc)
  }


  useEffect(() => {
    try {
      getData(`videos?id=${videoId}&part=snippet`).then((result) => {
        dispatch({
          type: reducerCases.SET_VIDEO_DETAIL,
          videoDetails: result.items,
        });
        getData(
          `channels?id=${result?.items[0]?.snippet?.channelId}&part=snippet`
        ).then((result) => {
          dispatch({
            type: reducerCases.SET_CHANNEL_DETAILS,
            channelDetails: result.items,
          });
        });
      });
  
      getData(
        `search?relatedToVideoId=${videoId}&part=id%2Csnippet&type=video&maxResults=50`
      ).then((result) =>
        dispatch({
          type: reducerCases.SET_RELATED_VIDEOS,
          relatedVideo: result.items,
        })
      );
  
      getData(
        `commentThreads?videoId=${videoId}&part=snippet&&maxResults=50`
      ).then((result) =>
        dispatch({ type: reducerCases.SET_COMMENTS, comments: result.items })
      );
    } catch (error) {

    }
  }, [videoId]);
  return (
    <div className="vid-plr">
      {
        channelDetails ?  
        <div className="vid-plr-left">
        <div className="vid-plr-dis">
          <ReactPlayer
            width="100%"
            height="100%"
            url={`https://www.youtube.com/watch?v=${videoId}&t=5688s`}
            controls={true}
          />
        </div>
        <div className="vid-plr-ttl">{videoDetails[0]?.snippet?.title}</div>
        <div className="vid-plr-dtl">
          <div className="vid-plr-dtl-left">
            <Link
              className="vid-link"
              to={`/channels/${channelDetails[0]?.id}`}
            >
              <img
                src={channelDetails[0]?.snippet?.thumbnails?.high?.url}
                alt="channel logo"
              />
            </Link>
            <div className="vid-plr-chn">
              <div className="vid-plr-chn-name">
                <Link
                  className="vid-link"
                  to={`/channels/${channelDetails[0]?.id}`}
                >
                  {channelDetails[0]?.snippet?.title}
                </Link>
                <FaCheckCircle />
              </div>
              <div className="vid-plr-chn-subs">
                {convert_form(
                  `${channelDetails[0]?.statistics?.subscriberCount}`
                )}{" "}
                subscriber
              </div>
            </div>
          </div>
          {
            videoDetails?
            <div className="vid-plr-like">
            <BiLike className="vid-plr-icon" />
            {convert_form(`${videoDetails[0]?.statistics?.likeCount}`)}
          </div>
          :
          <div>
            loading
          </div>
          }
        </div>
        {
          videoDetails?
          <div className="vid-plr-desc">
          <div className="vid-plr-1">
            <div>{videoDetails[0]?.statistics?.viewCount} views</div>
           <div> {convert_date(videoDetails[0]?.snippet?.publishedAt)}</div>
          </div>
          <div className="vid-plr-2">{desc?
       <div className="vid-plr-2" onClick={clickHandler}>{`${videoDetails[0]?.snippet?.description} `}<b className="vid-plr-2 hov">show less</b></div>
        :
        <div className="vid-plr-2" onClick={clickHandler}>{`${videoDetails[0]?.snippet?.description.slice(0,100)}... `}<b className="vid-plr-2 hov">show more</b></div>
        }</div>
        </div>
        :
        <div>

        </div>
        }
        {
          relatedVideo?
          <div className="vid-plr-bottom">
          {relatedVideo?.map((item, i) => {
            return <VideoCard2 key={i} item={item} />;
          })}
        </div>
        :
        <div>

        </div>
        }
        {/* horizontal rule */}
        <div className="vid-plr-hr"></div>
        {
          videoDetails?
          <div className="vid-plr-cmt-head">
          {videoDetails[0]?.statistics?.commentCount} Comments
        </div>
        :
        <div>

        </div>
        }
        {
          comments?
          <div className="vid-plr-cmt">
          {comments?.map((item, i) => {
            return <CommentCard item={item} key={i} />;
          })}
        </div>
        :
        <div>

        </div>
        }
      </div>
      :
      <div className="vid-plr-left">
        Loading
      </div>
      }
      {
        relatedVideo?
        <div className="vid-plr-right">
        {relatedVideo.map((item, i) => {
          return <VideoCard2 key={i} item={item} />;
        })}
      </div>
      :
      <div>
        
      </div>
      }
    </div>
  );
};

export default VideoPlayer;
