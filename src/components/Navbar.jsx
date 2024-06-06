import React, { useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import logo from "../assets/yt-logo.png";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/reducer";
import { Link } from "react-router-dom";
import getData from "../utils/apiEndpoint";

const Navbar = ({searchActive,setSearchActive}) => {
  const [{ searchData }, dispatch] = useStateProvider();
  const inputRef = useRef();
  const sideBarHandler = () => {
    dispatch({ type: reducerCases.TOGGLE });
  };
  const inputHandler = (e) => {
    if (e.key === "Enter") searchHandler();
  };
  const clickHanlder = () => {
     setSearchActive(true)
  };
  const searchHandler = () => {
    setSearchActive(false)
    dispatch({
      type: reducerCases.SET_SEARCH,
      searchData: inputRef.current.value,
    });
    dispatch({ type: reducerCases.SET_ITEMS, data: null });
    inputRef.current.value = "";
  };
  useEffect(() => {
    const url2 = `search?q=${searchData}&part=snippet&regionCode=IN&maxResults=20&order=date`;
    getData(url2).then((result) =>
      dispatch({ type: reducerCases.SET_ITEMS, data: result })
    );
  }, [searchData]);

  useEffect(() => {
    const handleResize = () => {
      // setWidth(window.innerWidth);
        if (window.innerWidth >= 600 && window.innerWidth >= 700) {
          setSearchActive(false)
        }
      
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
      {!searchActive ? (
        <div className="nav">
          <div className="nav-left">
            <RxHamburgerMenu
              className="nav-menu"
              size={27}
              color="white"
              onClick={sideBarHandler}
            />
            <Link to="/">
              <img src={logo} alt="youtube logo" height={30} />
            </Link>
          </div>
          <div className="search-bar">
            <input
              type="text"
              className="search-area"
              ref={inputRef}
              onKeyDown={inputHandler}
            />
            <CiSearch
              size={35}
              color="white"
              onClick={searchHandler}
              className="nav-search"
            />
          </div>
          <div className="nav-right">
            <CiSearch
              size={30}
              color="white"
              className="nav-search-mob"
              onClick={clickHanlder}
            />
          </div>
        </div>
      ) : (

          <div className="search-bar-mob">
            <input
              type="text"
              className="search-area-mob"
              ref={inputRef}
              onKeyDown={inputHandler}
            />
            <CiSearch
              size={35}
              color="black"
              onClick={searchHandler}
              className="nav-search-mob1"
            />
          </div>
      )}
    </>
  );
};

export default Navbar;
