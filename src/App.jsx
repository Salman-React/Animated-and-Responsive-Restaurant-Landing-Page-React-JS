import React from 'react'
import './App.css'
import Banner from './component/Banner/Banner'
import AOS from 'aos'
import "aos/dist/aos.css";
import Products from './component/Products/Products'
import Working from './component/Working/Working'
import Images from './component/Images/Images'
import Footer from './component/Footer/Footer'
import Header2 from './component/Header2/Header2'
import About from './component/About/About'
import Subscribe from './component/Subscribe/Subscribe'

function App() {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className=''>
      <Header2/>
      <Banner/>
      <Products/>
      <About/>
      <Working/>
      <Subscribe/>
      <Images/>
      <Footer/>
    </div>
  )
}

export default App
