import React from 'react'
import {Slider,HomeSection,MostPopular,DestinationHome,Work,HomeGallery} from '../components'
import './home.css'

const Home = () => {
  const slides = [
    { url: "Images/slider-1.jpg", title: "beach" },
    { url:  "Images/slider-2.jpg", title: "boat" },
    { url:  "Images/slider-3.jpg", title: "city" },
  ];
  const containerStyles = {
    width: "100%",
    height: "100vh",
    margin: "0 auto",
  };
  return (
    <div>
      <section>
        <div style={containerStyles}>
          <Slider slides={slides} />
        </div>
      </section>
      <section className='home_section'>
        <HomeSection />
      </section>
      <section className='home_section_section'>
        <MostPopular />
      </section>
      <section>
        <DestinationHome />
      </section>
      <section>
        <Work/>
      </section>
      <section>
        <HomeGallery/>
      </section>
    </div>
  )
}

export default Home