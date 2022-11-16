import React from "react"
//import Dcards from "../../Destinations/Dcards"
import AllItems from "./AllItems"
import './destinations.css'

const DestinationHome = () => {
  return (
    <>
      <section className="pop_sec">
        <h1 className='pop'>Most Popular Destination</h1>
        <AllItems />
      </section>
    </>
  )
}

export default DestinationHome
