import React from 'react'
import 'bulma'

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
              ▽
            </h2>
            <hr className="hr"/>
            <h2 className="subtitle arrow-2">
              △
            </h2>
            <h2 className="subtitle left">
              About Us
            </h2>
            <div className="about-p">
              <p>
                Custom made wooden signposts from Travelling Toucan can be tailored to point at up to six of your favourite places, holiday destinations, famous landmarks, countries, capital cities or even just six fictional locations from your favourite film or book?
              </p>
              <br/>
              <p>
                With many of us currently unable to travel to all those places we dream of visiting, this personalised signpost is the perfect gift for a birthday, wedding or anniversary or even to go in a little ones new nursery.
              </p>
              <br/>
              <p>
                A timeless handcrafted piece with stylish design will suit any living space, work space or home office.
              </p>
              <br/>
              <p>
                For the adventures already taken, adventures yet to happen, the adventures of your favourite character, where will your Travelling Toucan signpost take you?
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero
