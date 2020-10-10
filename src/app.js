import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
import 'normalize-scss'
import 'bootstrap-css-only'

import Hero from './components/Hero'
import Nav from './components/Nav'

class App extends React.Component{
  constructor(){
    super()
  }


  render(){
    return(
      <div>
        <Nav />
        <Hero />  
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
