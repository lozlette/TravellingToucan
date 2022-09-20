import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
import './../images/tt3.png'
import './../images/tt6.png'
import './../images/ginandpickles.jpg'



import 'normalize-scss'
import 'bootstrap-css-only'
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
