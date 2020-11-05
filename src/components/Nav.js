import React from 'react'
import 'bulma'

class Nav extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      navbarOpen: false
    }

    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar() {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  render(){
    return (
      <nav className="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" >
            <img src="https://scontent.fltn1-2.fna.fbcdn.net/v/t1.0-9/121009987_108918067651679_8401112923733463285_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=atOEm_R8_RYAX-ytG8e&_nc_ht=scontent.fltn1-2.fna&oh=15165f7e3fd83cf52e402c8bdfc24464&oe=5FB93F66" width="30" height="40" />
          </a>

          <a className={`navbar-burger ${this.state.navbarOpen ? 'is-active' :'' }`}
            onClick={this.toggleNavbar}>
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
