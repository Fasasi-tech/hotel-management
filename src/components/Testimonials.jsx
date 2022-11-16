import React from 'react'
import Tdata from "./Tdata"
import "./testimonial.css"
import Tcard from "./Tcard"

const Testimonials = () => {
  return (
    <>
      <section className='Testimonial mtop'>
        <div className='container grid1'>
          {Tdata.map((value, index) => {
            return <Tcard key={index} {...value} />
          })}
        </div>
      </section>
    </>
  )
}

export default Testimonials