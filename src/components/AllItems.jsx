import React, { useState } from "react"
import Dcards from "./Dcards"
import "./galleries.css"
import "./destinations.css"
import Sdata from "./Sdata"

const AllItems = () => {
  const [items, setIems] = useState(Sdata)
  return (
    <>
      <section className='gallery  desi mtop '>
        <div>
          <div className='content grid'>
            {items.map((item) => {
              return <Dcards key={item.id} item={item} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default AllItems

