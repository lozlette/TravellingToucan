import React from 'react'
import 'bulma'
import Img9349 from '../images/Img9349.jpg'
import Img9356 from '../images/Img9356.jpg'
import GinAndPickles from '../images/GinAndPickles.jpg'


class Gallery extends React.Component {
  render(){
    return (
      <div className="tile is-parent" id="gallery">
        <article className="tile is-child notification is-white">
          <p className="title"></p>
          <p className="subtitle"></p>
          <figure className="image is-4by5">
            <img src={Img9356} alt="Australia Hawaii and Estonia signpost"/>
          </figure>
        </article>
        <article className="tile is-child notification is-white">
          <p className="title"></p>
          <p className="subtitle"></p>
          <figure className="image is-4by5">
            <img src={GinAndPickles} alt="gin and pickles bar signpost"/>
          </figure>
        </article>
        <article className="tile is-child notification is-white">
          <p className="title"></p>
          <p className="subtitle"></p>
          <figure className="image is-4by5">
            <img src={Img9349} alt="Borneo Glastonbury Signpost"/>
          </figure>
        </article>
      </div>
    )
  }
}

export default Gallery
