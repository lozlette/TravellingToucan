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
            <img src="https://scontent.fltn1-1.fna.fbcdn.net/v/t1.0-9/121161208_108918370984982_2866614347516770238_n.jpg?_nc_cat=100&ccb=2&_nc_sid=e3f864&_nc_ohc=ESbLIdlyf-UAX_kDHs6&_nc_ht=scontent.fltn1-1.fna&oh=ff79f26535474b8c8c070380bbcb950c&oe=5FBA39FC" alt="Australia Hawaii and Estonia signpost"/>
          </figure>
        </article>
        <article className="tile is-child notification is-white">
          <p className="title"></p>
          <p className="subtitle"></p>
          <figure className="image is-4by5">
            <img src="./images/ginandpickles.jpg" alt="gin and pickles bar signpost"/>
          </figure>
        </article>
        <article className="tile is-child notification is-white">
          <p className="title"></p>
          <p className="subtitle"></p>
          <figure className="image is-4by5">
            <img src="https://scontent.fltn1-1.fna.fbcdn.net/v/t1.0-9/120894320_108918530984966_4460121614470436507_n.jpg?_nc_cat=108&ccb=2&_nc_sid=e3f864&_nc_ohc=Up9fXb7S7iIAX-hCjXS&_nc_ht=scontent.fltn1-1.fna&oh=66594300a36e15458513097f9f113d3c&oe=5FBB0804" alt="Borneo Glastonbury signpost"/>
          </figure>
        </article>
      </div>
    )
  }
}

export default Gallery
