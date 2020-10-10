import React from 'react'
import 'bulma'

class Hero extends React.Component {
  render(){
    return (
      <section className="hero is-medium full-width-img">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Travelling Toucan
            </h1>
            <h2 className="subtitle">
              Primary bold subtitle
            </h2>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero
