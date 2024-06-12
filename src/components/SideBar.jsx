import React from "react";
import { IoMdHome } from "react-icons/io";
import { FaFire } from "react-icons/fa6";
import { IoIosMusicalNotes } from "react-icons/io";
import { SiYoutubegaming } from "react-icons/si";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/reducer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const SideBar = () => {
  const [{ sideBar, activeTab }, dispatch] = useStateProvider();
  const activeHandler = (current) => {
    dispatch({ type: reducerCases.ACTIVE_TAB, active: current });
    dispatch({ type: reducerCases.SET_ITEMS, data: null });
  };
  useEffect(() => {
    const handleResize = () => {
      if (sideBar) {
        if (window.innerWidth <= 600 && window.innerWidth >= 500) {
          dispatch({ type: reducerCases.SET_MOBILE_VIEW });
        }
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Link to="/" className="side-link">
        {sideBar ? (
          <div className={"side-open"}>
            <div
              className={
                activeTab === "new"
                  ? "side-tiles-open active"
                  : "side-tiles-open"
              }
              onClick={() => activeHandler("new")}
            >
              <IoMdHome
                className={
                  activeTab === "new"
                    ? "side-icons-open active-icons"
                    : "side-icons-open"
                }
              />
              Home
            </div>
            <div
              className={
                activeTab === "trending"
                  ? "side-tiles-open active"
                  : "side-tiles-open"
              }
              onClick={() => activeHandler("trending")}
            >
              <FaFire
                className={
                  activeTab === "trending"
                    ? "side-icons-open active-icons"
                    : "side-icons-open"
                }
              />
              Trending
            </div>
            <div
              className={
                activeTab === "music"
                  ? "side-tiles-open active"
                  : "side-tiles-open"
              }
              onClick={() => activeHandler("music")}
            >
              <IoIosMusicalNotes
                className={
                  activeTab === "music"
                    ? "side-icons-open active-icons"
                    : "side-icons-open"
                }
              />
              Music
            </div>
            <div
              className={
                activeTab === "game"
                  ? "side-tiles-open active"
                  : "side-tiles-open"
              }
              onClick={() => activeHandler("game")}
            >
              <SiYoutubegaming
                className={
                  activeTab === "game"
                    ? "side-icons-open active-icons"
                    : "side-icons-open"
                }
              />
              Gaming
            </div>
          </div>
        ) : (
          <div className={"side-closed"}>
            <div
              className="side-tiles-closed"
              onClick={() => activeHandler("new")}
            >
              <IoMdHome
                className={
                  activeTab === "new"
                    ? "side-icons-closed active-closed"
                    : "side-icons-closed"
                }
              />
              Home
            </div>
            <div
              className="side-tiles-closed"
              onClick={() => activeHandler("trending")}
            >
              <FaFire
                className={
                  activeTab === "trending"
                    ? "side-icons-closed active-closed"
                    : "side-icons-closed"
                }
              />
              Trend
            </div>
            <div
              className={
                activeTab === "music"
                  ? "side-tiles-closed "
                  : "side-tiles-closed"
              }
              onClick={() => activeHandler("music")}
            >
              <IoIosMusicalNotes
                className={
                  activeTab === "music"
                    ? "side-icons-closed active-closed"
                    : "side-icons-closed"
                }
              />
              Music
            </div>
            <div
              className={
                activeTab === "game" ? "side-tiles-closed" : "side-tiles-closed"
              }
              onClick={() => activeHandler("game")}
            >
              <SiYoutubegaming
                className={
                  activeTab === "game"
                    ? "side-icons-closed active-closed"
                    : "side-icons-closed"
                }
              />
              Game
            </div>
          </div>
        )}
      </Link>
    </>
  );
};

export default SideBar;
