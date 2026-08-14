import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className="header" style={{ backgroundImage: `url(${assets.header_img})` }}>
        <div className="header-contents">
          <h2>Order Your Favourite Items</h2>
          <p>Get the best deals on fresh groceries delivered to your door. Start shopping now!</p>
          <button>Veiw Items</button>
        </div>
    </div>
  )
} 

export default Header
