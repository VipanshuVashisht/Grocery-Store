import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext)

  return (
    <article className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={url + '/images/' + image} alt={name} />
        {!cartItems[id] ? (
          <img
            className='add'
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt='Add to cart'
          />
        ) : (
          <div className='food-item-counter'>
            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt='Remove' />
            <p>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt='Add' />
          </div>
        )}
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <h3>{name}</h3>
          <img src={assets.rating_stars} alt='Rating' />
        </div>
        <p className='food-item-description'>{description}</p>
        <div className='food-item-footer'>
          <p className='food-item-price'>Rs.{price}</p>
        </div>
      </div>
    </article>
  )
}

export default FoodItem
