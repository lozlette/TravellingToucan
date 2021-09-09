import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
import 'normalize-scss'
import 'bootstrap-css-only'
import Img9349 from './images/Img9349.jpg'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Main from './components/Main'
import Gallery from './components/Gallery'
import Footer from './components/Footer'


class App extends React.Component{
  constructor(){
    super()
  }


  render(){
    return(
      <div>
        <Nav />
        <Hero />
        <Gallery />
        <Main />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
