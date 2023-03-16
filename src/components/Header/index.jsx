import React from "react";
import Logo from "../../Assets/Logo.jpeg";
import { useSelector, useDispatch } from 'react-redux';
import {setFilter} from '../../redux/Slices/filterSlice';
import { Link } from 'react-router-dom';

function Header() {
  const filter= useSelector(
    (state) => state.productFilter.filter
  );

const dispatch = useDispatch();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="Main-logo">
          <Link to='/shoppingApp'className="navbar-brand">        
            <img src={Logo} alt="ShopMe" width="100" height="100" />
          </Link>
          </div>
          <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <div className="">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to='/shoppingApp' className="nav-link active">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Profile{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to='#' className="dropdown-item" >
                        Login
                      </Link>
                    </li>
                    <li>
                    <Link to='#' className="dropdown-item" >
                    Registration
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                    <Link to='#' className="dropdown-item" >
                    Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-lg-8">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  onChange = {(e)=> 
                     dispatch(setFilter(e.target.value))
                  }
                  value= {filter}
                />
              </form>
            </div>
            <div className="">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to='/cart'className="nav-link"> Cart</Link>              
                </li> 
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
