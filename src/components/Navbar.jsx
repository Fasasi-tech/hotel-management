import React, {useState} from 'react'
import './navbar.css'
import { Link} from 'react-router-dom'

const Navbar = () => {
  const[toggle,setToggle]=useState(false)
  function toggler() {
      setToggle(!toggle)
  }
  return (
    <>
      <nav className='navbar showMenu '>
        <div className='nav_parent_div container container_nav'>
          <div className='nav_sub_parent_div'>
            <h3 className='heading_link'>Fasasi</h3>
          </div>
          <div className={toggle?'nav_child_div showMenu':'nav_child_div'}>
            <ul className='nav_li'>
              <li>
                <Link to='/' className='nav_text' onClick={toggler}>Home</Link>
              </li>
              <li>
                <Link to='/about-us' className='nav_text' onClick={toggler}>About us</Link>
              </li>
              <li>
                <Link to='/gallery' className='nav_text' onClick={toggler}>Gallery</Link>
              </li>
              <li>
                <Link to='/destinations' className='nav_text' onClick={toggler}>Destinations</Link>
              </li>
              <li>
                <Link to='/blog'  className='nav_text' onClick={toggler}>Blog</Link>
              </li>
              <li>
                <Link to='/testimonials'  className='nav_text' onClick={toggler}>Testimonials</Link>
              </li>
            </ul>
            <i className="uil uil-times fonts nav_close" onClick={toggler}></i>
          </div>
          <i class="uil uil-bars fonts nav_bar"  onClick={toggler}></i>
      </div>
      </nav>
        <div className='booking_time container_two'>
          <div className='booking_div'>
            <div className='clock_div'><i className="uil uil-clock time"></i></div>
            <div>
            <h3>Working Hours</h3>
            <p className='work_time'>Monday-Sunday 8:00am to 6:00pm</p>
            </div>
          </div>
          <div className='booking_div'>
            <div><i class="uil uil-calling time"></i></div>
            <div>
              <h3>Call Us</h3>
              <p><Link className='work_time'>+2349158539172</Link></p>
            </div>
          </div>
          <div className='booking_div'>
            <div><i class="uil uil-envelope-check time"></i></div>
            <div>
              <h3>Mail Us</h3>
              <p><Link className='work_time'>Phercerchridwan98@gmail.com</Link></p>
            </div>
          </div>
        </div>
      
    </>
    
  )
}

export default Navbar