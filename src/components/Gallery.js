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
            <img src=".../images/img_9356.jpg" alt="Australia Hawaii and Estonia signpost"/>
          </figure>
        </article>
        <article className="tile is-child notification is-white">
          <p className="title"></p>
          <p className="subtitle"></p>
          <figure className="image is-4by5">
            <img src=".../images/ginandpickles.jpg" alt="gin and pickles bar signpost"/>
          </figure>
        </article>
        <article className="tile is-child notification is-white">
          <p className="title"></p>
          <p className="subtitle"></p>
          <figure className="image is-4by5">
            <img src=".../images/img_9349.jpg" alt="Borneo Glastonbury signpost"/>
          </figure>
        </article>
      </div>
    )
  }
}

export default Gallery
