import React from 'react'
import Navbar from './Navbar'
import BannerBackground from '../assets/home-banner-background.png'
import BannerImage from '../assets/home-banner-image.png'
import { FiArrowRight } from 'react-icons/fi'

const Home = () => {
  return (
    <div className='home-container'>
        
        <Navbar/>
        <div className='home-banner-container'>
          <div className='home-bannerImage-container'>
            <img src={BannerBackground} alt='' />
           </div>
            <div className='home-text-section'>
              <h1 className='primary-heading'>
                Your Favorite Food Delivered Hot & Fresh
              </h1>
              <p className='primary-text'> 
                Enjoy your favorite food delivered to your doorstep, with a smile on your face. We're here to help you find the perfect meal that suits your taste.
              </p>
              <button className='secondary-button'>
                Order Now <FiArrowRight/>
                </button>
            </div>
            <div className='home-image-container'>
            <img src={BannerImage} alt='' />
            </div>
        </div>
  </div>
  )
}

export default Home