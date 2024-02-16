import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">
            Description
        </div>
        <div className="descriptionbox-nav-box fade">
            Reviews (122)
        </div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is a virtual storefront that allows customers to buy and sell products, services, and digital goods online. It acts as the online business's sales staff, product shelves, and cash register. It can be designed to sell digital products, physical products, or services.</p>
        <p>An ecommerce website is a virtual storefront that allows businesses to sell products or services to customers over the internet.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
