import React from 'react'
import SliderContainer from '../Components/Core/Home/SliderContainer'
import { SliderProductData } from '../assets/dummyData'
import Slider_Card from '../Components/Core/Home/Slider_Card'
import ShopByCategory from '../Components/Core/Home/ShopByCategory'
const Home = () => {
  return (
    <div className='min-h-screen py-15 flex flex-col text-2xl w-full justify-center items-center'>
      <span className=' w-full text-center leading-[24px] text-3xl md:text-4xl font-bold text-white mb-3'>Shop deals</span>
      <SliderContainer
        SliderData={SliderProductData}
        Card={Slider_Card}
      />
      <ShopByCategory/>
    </div>
  )
}

export default Home