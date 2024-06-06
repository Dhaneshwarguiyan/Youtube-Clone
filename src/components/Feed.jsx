import React, { useEffect, useState } from "react";
import { useStateProvider } from "../utils/StateProvider";
import VideoCard from "./VideoCard.jsx";
import getData from "../utils/apiEndpoint.js";
import { reducerCases } from "../utils/reducer.js";
import convert_form from "../utils/DataHandler.js";

const Feed = () => {
  const [{ loading, sideBar, activeTab, data }, dispatch] = useStateProvider();

  useEffect(()=>{
        let url2 = `search?q=${activeTab}&part=snippet&regionCode=IN&type=video&maxResults=50&order=date`
         getData(url2).then(result=> {
          dispatch({type:reducerCases.SET_ITEMS,data:result})
  })
  },[activeTab])

  return (
    <div className={sideBar ? "feed-open" : "feed-closed"}>
      <div className="feed-main">
        {!data
          ? Array(12)
              .fill()
              .map((d, i) => {
                return <VideoCard key={i} />;
              })
          : data?.items?.map((item, i) => <VideoCard items={item} key={i}/>)}
      </div>
    </div>
  );
};

export default Feed;
