import {Component} from 'react'

import './index.css'

class WelcomeApp extends Component {
  state = {isClicked: false}

  isSubscribe = () => {
    this.setState(prevValue => ({isClicked: !prevValue.isClicked}))
  }

  getbuttonText = () => {
    const {isClicked} = this.state

    return isClicked ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonTxt = this.getbuttonText()
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button type="button" className="button" onClick={this.isSubscribe}>
          {buttonTxt}
        </button>
      </div>
    )
  }
}
export default WelcomeApp
// Write your code here
