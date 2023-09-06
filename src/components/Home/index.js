import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="home-container">
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className="heme-image"
            />
          </div>
          <div className="home-shop-now-text-container">
            <h1 className="home-heading">clothes That Get You Noticed</h1>
            <p className="para">
              Fashion is a part of the daily air and it does not quite help that
              it changes all the time. Clothes have always been a marker of the
              era and we are in a revolution. Your fashion makes you been seen
              and heard that way you are.So, celebrate the session new and
              exciting fashion in your own way.
            </p>
            <div className="shop-now-container">
              <button type="button" className="shop-now-button">
                Shop now
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
