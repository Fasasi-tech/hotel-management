import React from 'react'
import  {HeadTitle}  from '../components'
import {AllBlog} from '../components'
import './home.css'
function Blog() {
  return (
    <div>
       <HeadTitle />
       <section>
          <AllBlog />
       </section>
     
    </div>
  )
}

export default Blog