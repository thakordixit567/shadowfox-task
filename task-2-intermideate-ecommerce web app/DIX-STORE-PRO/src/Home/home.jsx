import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
import RegisterSec from './RegisterSec'
import LocationFind from './LocationFind'
import About from './About'
import AppSection from './AppSection'
import Sponsor from './Sponsor'

const home = () => {
  return (
    <>
    <div>
      <Banner/>
      <HomeCategory/>
      <CategoryShowCase/>
      <RegisterSec/>
      <LocationFind/>
      <About/>
      <AppSection/>
      <Sponsor/>
      
    </div></>
  )
}

export default home
