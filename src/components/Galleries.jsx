import React from "react"
import Cards from "./Cards"
import "./galleries.css"
import GalleriesData from "./GalleriesData"
import HeadTitle from "./HeadTitle"

const Galleries = () => {
  return (
    <>
      <HeadTitle />

      <section className='gallery top'>
        <div className='container grid'>
          {GalleriesData.map((value, index) => {
            return <Cards imgaes={value.img} title={value.title} key={index} />
          })}
        </div>
      </section>
    </>
  )
}

export default Galleries
