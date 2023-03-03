import React from "react";

function Header() {
  return (
    <div>
      <header className="header">
        <div className="branding">
          <div className="container-fluid position-relative py-3">
            <div className="logo-wrapper">
              <div className="site-logo">
                <a className="navbar-brand" href="index.html">
                  {/* <img
                    className="logo-icon me-2"
                    src="assets/images/site-logo.svg"
                    alt="logo"
                  /> */}
                  <span className="logo-text">MPESA API INTEGRATION</span>
                </a>
              </div>
            </div>
            {/*//docs-logo-wrapper*/}
          </div>
          {/*//container*/}
        </div>
        {/*//branding*/}
      </header>
      {/*//header*/}
    </div>
  );
}

export default Header;
