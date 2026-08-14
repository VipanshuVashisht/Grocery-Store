import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
import useScrollReveal from '../../hooks/useScrollReveal'

const ExploreMenu = ({category,setCategory}) => {
  const revealRef = useScrollReveal()

  return (
    <div className='explore-menu scroll-reveal' id='explore-menu' ref={revealRef}>
      <h1>Explore our items</h1>
      <p className='explore-menu-text'>Choose your favourite item from a diverse menu featuring a delectable array of groceries.</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return(
            <div onClick={()=>setCategory(prev => prev===item.menu_name ? "All" : item.menu_name)} key={index} className="explore-menu-list-item">
              <div className={category===item.menu_name ? "explore-menu-img-wrap active" : "explore-menu-img-wrap"}>
                <img src={item.menu_image} alt="" />
              </div>
              <p className={category===item.menu_name ? "active-text" : ""}>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu
