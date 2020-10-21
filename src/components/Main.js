import React from 'react'
import 'bulma'
// import { Link } from 'react-router-dom'

class Main extends React.Component {
  render(){
    return (
      <section className="hero is-medium full-width-img2" id="about">
        <div className="hero-body">
          <div className="container">
            <h2 className="subtitle left">
              About Us
            </h2>
            <div className="about-p">
              <p>
                Custom made wooden signposts from Travelling Toucan can be tailored to point at up to six of your favourite places, holiday destinations, famous landmarks, countries, capital cities or even just six fictional locations from your favourite film or book.
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
              <div id="bottom-1">
              </div>
            </div>
            <a href="https://www.etsy.com/uk/shop/TravellingToucan">
              <h2 className="subtitle left bottom">
                Order Now
              </h2>
            </a>
            <h2 className="subtitle arrow-2">
              <a href="#top">
              △
              </a>
            </h2>
          </div>
        </div>
      </section>
    )
  }
}

export default Main
