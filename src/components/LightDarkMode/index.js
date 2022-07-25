import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isClicked: true}

  changeTextAndBgColor = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked} = this.state
    const bgContainerMode = isClicked ? 'dark-mode' : 'light-mode'
    const buttonText = isClicked ? 'Light Mode' : 'Dark Mode'
    const buttonProperties = isClicked ? 'changed-btn' : 'normal-btn'
    return (
      <div className="bg-container">
        <div className={`container ${bgContainerMode}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button
            className={`button ${buttonProperties}`}
            type="button"
            onClick={this.changeTextAndBgColor}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
