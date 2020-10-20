import React from 'react'
import 'bulma'


class Footer extends React.Component {
  render(){
    return (
      <footer className="footer is-fixed-bottom">
        <div className="content has-text-centered">
          <p>
            This website was created by <a href="http://laurenrachelbell.com">Lauren Bell.</a>
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer
