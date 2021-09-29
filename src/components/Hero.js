import React from 'react'
import 'bulma'
import logocircle from '../../public/assets/images/logocircle.png'
// import { Link } from 'react-router-dom'


class Hero extends React.Component {
  render(){
    return (
      <section className="hero is-medium full-width-img">
        <div className="hero-body">
          <div className="container">
            <h1 className="title-1" id="top">
              TRAVELLING
            </h1>
            <h1 className="title-2" id="home">
              TOUCAN
            </h1>
            <img src={ logocircle } width="200" height="200"  alt="Travelling Toucan Logo"/>
            <h2 className="subtitle left bottom">
              Order Now
            </h2>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero
