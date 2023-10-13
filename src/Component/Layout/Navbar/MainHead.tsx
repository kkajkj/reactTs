import React from "react";
import { Outlet, Link } from "react-router-dom";

const MainHead: React.FC = () => {
  return (
    <section className="top-area">
      <div className="header-area">
        {/* Start Navigation */}
        <nav
          className="navbar navbar-default bootsnav navbar-sticky navbar-scrollspy"
          data-minus-value-desktop="70"
          data-minus-value-mobile="55"
          data-speed="1000"
        >
          <div className="container">
            {/* Start Header Navigation */}
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
              >
                <i className="fa fa-bars"></i>
              </button>
              <a className="navbar-brand" href="index.html">
                list<span>race</span>
              </a>
            </div>
            {/*/.navbar-header*/}
            {/* End Header Navigation */}

            {/* Collect the nav links, forms, and other content for toggling */}
            {/* Collect the nav links, forms, and other content for toggling */}
            <div
              className="collapse navbar-collapse menu-ui-design"
              id="navbar-menu"
            >
              <ul
                className="nav navbar-nav navbar-right"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                <li className=" scroll active">
                  <Link to="/">home</Link>
                </li>
                <li className="scroll">
                  <Link to="/works">how it works</Link>
                </li>
                <li className="scroll">
                  <Link to="/explore">explore</Link>
                </li>
                <li className="scroll">
                  <Link to="/review">review</Link>
                </li>
                <li className="scroll">
                  <Link to="/blog">blog</Link>
                </li>
                <li className="scroll">
                  <Link to="/contact">contact</Link>
                </li>
              </ul>
              {/*/.nav */}
            </div>
            {/* /.navbar-collapse */}
          </div>
          {/*/.container*/}
        </nav>
        {/*/nav*/}
        {/* End Navigation */}
      </div>
      <Outlet />
    </section>
  );
};

export default MainHead;
