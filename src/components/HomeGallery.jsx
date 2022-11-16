import React from "react"
import GalleryData from "./GalleryData"
import "./gallery.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const HomeGallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
  
          },
        },
      ],
  }
  return (
    <div>
      <section className='collection'>
        <div className='container top'>
          <Slider {...settings}>
            {GalleryData.map((value) => {
              return (
                <div className='box'>
                  <img src={value.cover} alt='' />
                </div>
              )
            })}
          </Slider>
        </div>
      </section>
    </div>
  )
}

export default HomeGallery
