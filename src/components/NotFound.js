import React, {Component} from 'react'

class NotFound extends Component {
  render(){
    return (
      <div>
      <h2>Whoops</h2>
    <p>Sorry but {location.pathname} didn’t match any pages</p>
      </div>
    )
  }
}

export default NotFound
