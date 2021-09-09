import React from 'react'
import 'bulma'
import Logo2 from '../images/logo2.jpg'


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
    console.log('toggle function working')
  }


  render(){
    return (
      <nav className="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" >
            <img src={ Logo2 } width="30" height="40" />
          </a>

          <a className={`navbar-burger ${this.state.navbarOpen ? 'is-active' :'' }`}
            onClick={this.toggleNavbar} >
            <span className="toggleItem" aria-hidden="true"></span>
            <span className="toggleItem" aria-hidden="true"></span>
            <span className="toggleItem" aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className={`navbar-menu ${this.state.navbarOpen ? 'is-active' :'' }`}>
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
