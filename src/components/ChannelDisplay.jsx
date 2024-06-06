import React from "react";
import VideoCard from "./VideoCard";
import { FaCheckCircle } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import { useStateProvider } from "../utils/StateProvider";
import { convert_form } from "../utils/DataHandler.js";
import { useParams } from "react-router-dom";
import { reducerCases } from "../utils/reducer.js";
import { useEffect } from "react";
import getData from "../utils/apiEndpoint.js";

const ChannelDisplay = () => {
  const [{ channelDetails, channelVideos },dispatch] = useStateProvider();
  const { channelId } = useParams();
  useEffect(() => {
    getData(
      `search?channelId=${channelId}&part=id%2Csnippet&type=video&maxResults=50`
    ).then((result) =>
      dispatch({
        type: reducerCases.SET_CHANNEL_VIDEO,
        channelVideos: result.items,
      })
    );

    getData(`channels?id=${channelId}&part=snippet`).then((result) => {
      dispatch({
        type: reducerCases.SET_CHANNEL_DETAILS,
        channelDetails: result.items,
      });
    });
  }, [channelId]);

  return (
    <>
    {
      channelDetails?
      <div className="chn">
      <img
        className="chn-bnr-img"
        src={channelDetails[0]?.brandingSettings?.image?.bannerExternalUrl}
        alt="Banner"
      />
      <div className="chn-prf">
        <img
          src={channelDetails[0]?.snippet?.thumbnails?.high?.url}
          className="chn-prf-img"
          alt=""
        />
        <div className="chn-prf-data">
          <div className="chn-prf-ttl">
            {channelDetails[0]?.snippet?.title} <FaCheckCircle />
          </div>
          <div className="chn-prf-para">
            {channelDetails[0]?.snippet?.customUrl}
            <LuDot />
            {convert_form(channelDetails[0]?.statistics?.subscriberCount)} subscribers
            <LuDot />
            {channelDetails[0]?.statistics?.videoCount} videos
          </div>
          <div className="chn-prf-desc">
            {channelDetails[0]?.snippet?.description.slice(0, 79)}...
          </div>
        </div>
      </div>
      {/* horizontal line */}
      <div className="chn-hr"></div>
      <div className="chn-videos">
        {!channelVideos
          ? Array(12)
              .fill()
              .map((d, i) => {
                return <VideoCard key={i} />;
              })
          : channelVideos?.map((item, i) => <VideoCard items={item} />)}
      </div>
    </div>
    :
    <div>
      
    </div>
    }
    </>
  );
};

export default ChannelDisplay;
