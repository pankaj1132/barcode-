import React from 'react'
import HomeBanner from '../Components/HomeBanner'
import About from '../Components/About'
import Gallery from '../Components/Gallery'
import WhyWeAreUnique from '../Components/whyWeAreUnique'
import WhatWeDo from '../Components/WhatWeDo'
import GetInTouch from '../Components/GetInTouch'
import Map from '../Components/Map'

const Home = () => {
  return (
    <div>
      <div>
        <HomeBanner />
      </div>
      <div>
        <About />
        <WhyWeAreUnique />
      </div>
      <Gallery />
      <div>
        <WhatWeDo />
      </div>
      <div>
        <GetInTouch />
        <Map />
      </div>
    </div>
  )
}

export default Home
