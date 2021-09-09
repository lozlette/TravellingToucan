import React from 'react'
import 'bulma'


class Gallery extends React.Component {
  render(){
    return (
      <div className="tile is-parent" id="gallery">
        <article className="tile is-child notification is-white">
          <p className="title"></p>
          <p className="subtitle"></p>
          <figure className="image is-4by5">
            <img src="./images/IMG_9356.jpg" />
          </figure>
        </article>
        <article className="tile is-child notification is-white">
          <p className="title"></p>
          <p className="subtitle"></p>
          <figure className="image is-4by5">
            <img src="./images/ginandpickles.jpg" />
          </figure>
        </article>
        <article className="tile is-child notification is-white">
          <p className="title"></p>
          <p className="subtitle"></p>
          <figure className="image is-4by5">
            <img src="./images/IMG_9349.jpg" />
          </figure>
        </article>
      </div>
    )
  }
}

export default Gallery
