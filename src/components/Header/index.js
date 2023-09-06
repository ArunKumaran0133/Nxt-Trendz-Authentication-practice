import {Component} from 'react'
import './index.css'

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logo-image"
          />
          <ul className="nav-list-container">
            <li className="nav-item-text">Home</li>
            <li to="/products" className="nav-item-text">
              Products
            </li>
            <li className="nav-item-text">Cart</li>
            <li>
              <button type="button" className="log-out-button">
                LogOut
              </button>
            </li>
          </ul>
        </div>
        <div className="small-nav-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="small-size-website-logo"
          />
          <button type="button" className="nav-logout-button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-logOut-logo"
            />
          </button>
        </div>
        <div className="small-nav-logos">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="small-logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="small-logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="small-logo"
          />
        </div>
      </nav>
    )
  }
}

export default Header
