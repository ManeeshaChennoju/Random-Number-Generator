import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  clickGenerate = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    console.log(randomNumber)
    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state

    return (
      <div className="home_con">
        <div className="container">
          <h1 className="heading"> Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button onClick={this.clickGenerate} type="button" className="button">
            Generate
          </button>
          <p className="number"> {count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
