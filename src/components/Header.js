import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import '../header.css';

const Header = () => {
  return (
    <header>
      <nav className="nav">
        {/* left */}
        <nav className="nav-left">
          <div className="logo">
            <span className="logo-text">Explore</span>
          </div>
          <div className="location">
            <FaMapMarkerAlt className="location-icon" /> Ilorin, Kwara State
          </div>
        </nav>
        {/* right */}
        <div className="form-field">
          <div className="search-box">
            <div className="search-field">
              <AiOutlineSearch className="search-icon" />
              <input
                type=""
                placeholder="Search for a place"
                className="input"
              />
            </div>
          </div>
          <div className="dropdown">
            <select name="" id="">
              <option value="celcius">Celcius</option>
              <option value="fareheit">Fareheit</option>
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
