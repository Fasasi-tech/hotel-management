import React from 'react'
import "./homeSection.css"

const HomeSection = () => {
  return (
    <div className="about_card">
            <div className='about_text'>
                <h2>We provide solution to grow your business</h2>
                <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
                <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
                <button className='button_div'>Explore More</button>
            </div> 
            <div >
                <img src="/Images/about-img-1.jpg" alt="about" className='about_img'   />
                
            </div>
        </div>
  )
}

export default HomeSection
