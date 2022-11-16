import React from 'react'
import './aboutCard.css'

const Features = () => {
  return (
    <>
    <div className="about_card">
        <div className="img_div">
            <img src="/Images/feature-img-1.jpg" alt="fut" className='about_imgs'  />
        </div>
        <div className='about_text'>
            <h1>
                Our <span>Features</span>
            </h1>
            <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
            <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
            <button className='button_div'>Explore More</button>
        </div>
    </div>

    </>
  )
}

export default Features