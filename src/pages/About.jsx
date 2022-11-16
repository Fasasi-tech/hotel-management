import React from 'react'
import { AboutCard, HeadTitle ,Features } from '../components'
import './about.css'
const About = () => {
  return (
    <>
      <HeadTitle />
      <section className='container_about'>
        <AboutCard />
      </section>
      <section className='container_features'>
        <Features />
      </section>
    </>
  )
}

export default About