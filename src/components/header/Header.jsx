import { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";

import { BiSearch } from 'react-icons/bi';
import { FaBars, FaTimes } from 'react-icons/fa';

import { Images } from '../../constants';

import './Header.scss';

const Header = () => {
  const [Clicked, setClciked] = useState(false);
  const handleClicked = () => setClciked(!Clicked);
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate()

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      navigate("/" + searchText);
    }
  }

  return (
    <div className="header">
      <div className="header__left">
        <Link to="/" className="header__item">
          <img className="header__icon" src={Images.Logo} />
        </Link>
        <div className={Clicked ? "header__links active" : "header__links"}>
          {['popular', 'top_rated', 'upcoming'].map((item) => (
            <>
              <Link to={`/movies/${item}`} className="header__item" onClick={handleClicked}><span>{item.toUpperCase()}</span></Link>
            </>
          ))}
          <div className="search">
            <input
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              onKeyDown={(event) => handleKeyDown(event)}
              placeholder="Search for movies"
            />
            <BiSearch className="search__icon" onClick={() => navigate("/" + searchText)} />
          </div>
        </div>
      </div>
      <div className="header__right">
        <div className="header__menu" onClick={handleClicked}>
          {Clicked ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </div>
  )
}

export default Header;