import React from "react"
import "./MostPopular.css"
import "./Work.css"
import Wcard from "./Wcard"
import Wdata from "./Wdata"

const Work = () => {
  return (
    <>
      <section className='popular works'>
        <div className='container'>
          <div className='heading'>
            <h1>How it Works </h1>
            <div className='line'></div>
          </div>

          <div className='content grid'>
            {Wdata.map((value, index) => {
              return <Wcard key={index} cover={value.cover} title={value.title} desc={value.desc} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Work
