import React from 'react'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-content'>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className='hero-btn'>
          <button className='btn'>Shop Now</button>
          <button className='btn secondary'>Category</button>
        </div>
        <div className='brand'>
          <p>Also Available On</p>
          <div className='brand-logo'>
            <img src="public/flipkart.png" alt="flikart_brand_icon" />
            <img src="public/amazon.png" alt="amazon_brand_icon" />
          </div>
        </div>
      </div>
      <div className='hero-image'>
        <img src="/public/shoe_image.png" alt="shoe_image" />
      </div>
    </div>
  )
}

export default Hero