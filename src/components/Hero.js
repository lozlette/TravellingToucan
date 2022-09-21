import React from 'react'
import 'bulma'
import logocircle from '../../images/logocircle.png'
import tt6 from '../../images/tt6.png'

const sectionStyle = {
  width: '100%',
  height: '1180px',
  backgroundImage: `url(${tt6})`,
  objectFit: 'cover'
}
// import { Link } from 'react-router-dom'


class Hero extends React.Component {
  render(){
    return (
      <section className="hero is-medium full-width-img" style={ sectionStyle }>
        <div className="hero-body">
          <div className="container">
            <h1 className="title-1" id="top">
              TRAVELLING
            </h1>
            <h1 className="title-2" id="home">
              TOUCAN
            </h1>
            <img src={ logocircle } width="200" height="200"  alt="Travelling Toucan Logo"/>
            <a href="https://www.etsy.com/uk/shop/TravellingToucan">
              <h2 className="subtitle left bottom">
                Order Now
              </h2>
            </a>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero
