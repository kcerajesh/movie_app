import { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from 'react-icons/fa'

import { Images } from '../../constants';

import './Header.scss';

const Header = () => {
  const [Clicked, setClciked] = useState(false);
  const handleClicked = () => setClciked(!Clicked);

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
        </div>
      </div>
      <div className="header__right">
        <div className="header__menu" onClick={handleClicked}>
          {Clicked ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      {/* <div className="header__left">
        <Link to="/" className="header__item">
          <img className="header__icon" src={Images.Logo} />
        </Link>
        <ul className={Clicked ? "header__item" : "header__item"}>
          {['popular', 'top_rated', 'upcoming'].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <Link to={`/movies/${item}`} className="header__item"><span>{item.toUpperCase()}</span></Link>
            </li>
          ))}
        </ul>
        <div className="header-menu" onClick={handleClicked}>
          {Clicked ? <FaTimes /> : <FaBars />}
        </div>
      </div> */}
    </div>
  )
}

export default Header;