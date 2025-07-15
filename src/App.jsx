
import Navbar from './Components/Navbar';
import Map from './Components/Map';
import Footer from './Components/Footer';
import GetInTouch from './Components/GetInTouch';
import About from './Components/About';
import HomeBanner from './Components/HomeBanner';
import WhatWeDo from './Components/WhatWeDo';
import Gallery from './Components/Gallery';
import TopHeader from './Components/TopHeader';
import WhyWeAreUnique from './Components/whyWeAreUnique';



const App = () => {
  return (
   <>
   <TopHeader />
    <Navbar />
    <HomeBanner />
    <About />
    <Gallery />
    <WhyWeAreUnique />
    <WhatWeDo />
    <GetInTouch />
    <Map />
    <Footer/>
    
  
   </>
  )
}

export default App