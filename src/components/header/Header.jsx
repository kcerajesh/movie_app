import { Link } from "react-router-dom";

import { Images } from '../../constants';

import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/" className="header__item">
          <img className="header__icon" src={Images.Logo} />
        </Link>
        <Link to="/movies/popular" className="header__item"><span>Popular</span></Link>
        <Link to="/movies/top_rated" className="header__item"><span>Top Rated</span></Link>
        <Link to="/movies/upcoming" className="header__item"><span>Upcoming</span></Link>
      </div>
      <div className="header__right">

      </div>
    </div>
  )
}

export default Header;