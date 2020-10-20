import React from 'react'
import 'bulma'
// import { Link } from 'react-router-dom'


class Hero extends React.Component {
  render(){
    return (
      <section className="hero is-medium full-width-img">
        <div className="hero-body">
          <div className="container">
            <h1 className="title-1">
              Travelling
            </h1>
            <h1 className="title-2">
              Toucan
            </h1>
            <h2 className="subtitle">
              Custom hand made signposts, perfect for that wedding, birthday or anniversary gift.
            </h2>
            <h2 className="subtitle arrow-1">
              <a href ="#gallery">
                ▽
              </a>
            </h2>
            <h2 className="subtitle arrow-1">
                ▽
            </h2>
            <h2 className="subtitle arrow-1">
                ▽
            </h2>
            <h2 className="subtitle arrow-1">
                ▽
            </h2>
            <h2 className="subtitle arrow-1">
                ▽
            </h2>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero
