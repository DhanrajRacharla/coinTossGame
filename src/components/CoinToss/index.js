// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    totalCount: 0,
    headCount: 0,
    tailCount: 0,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  tossingCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 1) {
      this.setState(prevState => ({
        totalCount: prevState.totalCount + 1,
        tailCount: prevState.tailCount + 1,
        imgUrl: "https://assets.ccbp.in/frontend/react-js/tails-img.png"
      }))
    } else {
      this.setState(prevState => ({
        totalCount: prevState.totalCount + 1,
        headCount: prevState.headCount + 1,
        imgUrl: "https://assets.ccbp.in/frontend/react-js/heads-img.png"
      }))
    }
  }
  render() {
    const {totalCount, headCount, tailCount, imgUrl} = this.state
    return (
      <div className="background-container">
        <div className="white-container">
          <h1 className="game-heading">Coin Toss Game</h1>
          <p className="game-condition">Heads (or) Tails</p>
          <img src={imgUrl} alt="toss result" className="image" />
          <button
            onClick={this.tossingCoin}
            type="button"
            className="coin-button"
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="counts">Total: {totalCount}</p>
            <p className="counts">Heads: {headCount}</p>
            <p className="counts">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
