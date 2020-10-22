import React from 'react'
import 'bulma'

class Nav extends React.Component {
  render(){
    return (
      <nav className="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="http://www.travellingtoucan.co.uk">
            <img src="../images/logo2.jpg" width="40" height="40" />
          </a>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="#about">
              About Us
            </a>

            <a className="navbar-item" href="https://www.etsy.com/uk/shop/TravellingToucan">
              Place an Order
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                Contact
              </a>

              <div className="navbar-dropdown">
                <a className="navbar-item colour" href="https://www.etsy.com/uk/shop/TravellingToucan">
                  Etsy
                </a>
                <a className="navbar-item colour" href="https://www.facebook.com/travellingtoucanltd">
                  Facebook
                </a>
                <a className="navbar-item colour" href="https://www.instagram.com/travellingtoucanltd/?hl=en">
                  Instagram
                </a>
                <a className="navbar-item colour" href="mailto:sales@travellingtoucan.co.uk">
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

    )
  }
}

export default Nav
