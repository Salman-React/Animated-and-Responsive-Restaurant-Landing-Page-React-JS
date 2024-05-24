import React from "react";
import "../styles/Main.css";
import logo from '../../assets/img/logo3.png'
const Header = () => {
  return (
    <div>
      <header class="header-area transparent-header">
        {/* <!--=== Header Navigation ===--> */}
        <div class="header-navigation navigation-one">
          <div class="nav-overlay"></div>
          {/* <!--=== Primary Menu ===--> */}
          <div class="primary-menu">
            {/* <!--=== Site Branding ===--> */}
            <div class="site-branding">
              <a
                href="#"
                class="brand-logo"
              >
                <img
                  src={logo}
                  alt="Site Logo"
                />
              </a>
            </div>
            {/* <!--=== Nav Inner Menu ===--> */}
            <div class="nav-inner-menu">
              <div class="nav-menu">
                {/* <!--=== Mobile Logo ===--> */}
                <div class="mobile-logo mb-30 d-block d-xl-none text-center">
                  <a
                    href="#"
                    class="brand-logo"
                  >
                    <img
                      src={logo}
                      alt="Site Logo"
                    />
                  </a>
                </div>
                {/* <!--=== Main Menu ===--> */}
                <nav class="main-menu">
                  <ul>
                    <li class="menu-item">
                      <a href="#">
                        Home
                      </a>
                    </li>
                    <li class="menu-item has-children">
                      <a href="#">
                        About
                      </a>
                    </li>

                    <li class="menu-item">
                      <a href="#">
                        Contact
                      </a>
                    </li>
                    
                  </ul>
                </nav>
                {/* <!--=== Nav Button ===--> */}
                <div class="menu-button mt-40 d-xl-none">
                  <a
                    href="#"
                    class="main-btn btn-red"
                  >
                    LOGIN<i class="fas fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
              {/* <!--=== Nav right Item ===--> */}
              <div class="nav-right-item d-flex align-items-center">
                <div class="search-button">
                  {/* <div class="search-btn">
                    <a href="#">
                      <i class="fas fa-shopping-basket"></i>
                      <span id="item-count">0</span>
                    </a>
                  </div> */}
                </div>
                {/* <div class="nav-call-button">
                  <span>
                    <img
                      src="#"
                      alt="icon"
                    />
                    <a href="tel:0191 908 3097">0191 908 3097</a>
                  </span>
                </div> */}
                <div
                class="menu-button d-xl-block d-none">
                  <a
                    href="#"
                    class="main-btn btn-red"
                  >
                    LOGIN<i class="fas fa-long-arrow-right"></i>
                  </a>
                </div>
                <div class="navbar-toggler">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
