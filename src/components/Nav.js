import React from 'react'
import 'bulma'

class Nav extends React.Component {
  render(){
    return (
      <nav className="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="http://www.travellingtoucan.co.uk">
            <img src="https://scontent.fltn1-2.fna.fbcdn.net/v/t1.0-0/s526x395/121009987_108918067651679_8401112923733463285_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=bxEtTLA7-o4AX8wH5Qw&_nc_ht=scontent.fltn1-2.fna&tp=7&oh=8723f5e6c71a9afed9a73c028309e7bb&oe=5FA8DBB9" width="35" height="35"/>
          </a>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              About Us
            </a>

            <a className="navbar-item">
              Place an Order
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                Contact
              </a>

              <div className="navbar-dropdown">
                <a className="navbar-item">
                  Facebook
                </a>
                <a className="navbar-item">
                  Instagram
                </a>
                <a className="navbar-item">
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
