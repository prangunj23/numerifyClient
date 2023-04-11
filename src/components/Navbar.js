import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Navbar= (props) =>{
  const [navSelection, setNavSelection] = useState(-1);
  const [navAnimation, setNavAnimation] = useState(["enter-from-right 1.75s cubic-bezier(0.77, 0, 0.175, 1) forwards", "0.8"]);

  const { text, setResult } = props;
  useEffect(() => {
    setTimeout(() => {
      setNavAnimation(["none", "0"]);
    }, 2000);
  }, []);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Result', {state: { query: text}});
  };


  return (
  <nav>
    <Link className="home-clickables" style={{ textDecoration: 'none' }} onClick={() => setNavSelection(-1)} to="/Home">
      <img className="nav-logo" src={require("../images/icyblue_logo_temp.png")} alt="logo" />
      <h1 className="nav-title">Numerify</h1>
    </Link>
    <form className="search-bar">
      <input className="search-box" type="text" placeholder="Search for a math concept..." onChange={(e) => {
        setResult(e.target.value);
      }}/>
      <button className="search-button" type="submit" onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}><img id="search-icon" src={require("../images/search_icon.jpeg")} alt="search-icon"/></button>
    </form>
    <div className="nav-buttons">
      <Link className="nav-button" style={{"animation": navAnimation[0], "animationDelay": navAnimation[1], "color": navSelection === 0 ? "#d6ecef" : "white"}} onClick={() => setNavSelection(0)} to="/Roadmap">Roadmap</Link>
      <Link className="nav-button" style={{"animation": navAnimation[0], "animationDelay": navAnimation[1], "color": navSelection === 1 ? "#d6ecef" : "white"}} onClick={() => setNavSelection(1)} to="/About">About</Link>
      <Link className="nav-button" style={{"animation": navAnimation[0], "animationDelay": navAnimation[1], "color": navSelection === 2 ? "#d6ecef" : "white"}} onClick={() => setNavSelection(2)} to="/Calculator">Calculator</Link>
      <div className="nav-slider" style={{"marginLeft": navSelection*35 + "%", "opacity": navSelection < 0 ? "0" : "1"}}> </div>
    </div>
  </nav>
  );
}
export default Navbar;