import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Header.scss";
import apna_bazar_1  from '../../assets/apna_bazar_1.png'

export default function Header(props) {

  const headerStyle = {
    backgroundColor: '#26a541',
    maxHeight: '56px'
  }

  return (
    <nav className="navbar navbar-expand-lg" style={headerStyle}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{fontSize: '22px'}}>
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 nav-ul">

            <li className="nav-item home">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item about">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item grocery">
              <Link className="nav-link" to="/grocery">
                Grocery
              </Link>
            </li>

            <li className="nav-item search-group mx-3">
              <div className="input-group">
                <input type="text" className="form-control" 
                placeholder="Search grocery products"
                aria-label="Recipient's username" aria-describedby="basic-addon2" 
                style={{ width: '40rem' }}/>
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </li>

            <li className="nav-item login">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>

            <li className="nav-item cart-item">
              <Link className="nav-link" to="/grocery">
                <div>
                  <span className="cart-icon">
                    <i className="fa fa-shopping-cart"></i>
                  </span>
                  { props.count > 0 ? 
                    <span className="cart-count">
                      { props.count }
                    </span> : ''
                  }
                  <span className="cart">Cart</span>
                </div>
              </Link>
            </li>

          </ul>
            { props.searchbar ? (
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            ) : ('')
          }
        </div>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  title: "Your Title",
  searchbar: true,
};

Header.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number.isRequired,
  searchbar: PropTypes.bool,
};
