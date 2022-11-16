import './App.css';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {Navbar} from './components'
import {About,Blog,Destinations,Gallery,Home,Testimonial,SinglePages,BlogSingles,Footers} from './pages'
function App() {
  return (
   <>
    <BrowserRouter>
      <Navbar />
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/about-us' element={<About/>} />
       <Route path='/gallery' element={<Gallery/>} />
       <Route path='/destinations' element={<Destinations/>} />
       <Route path='/blog' element={<Blog/>} />
       <Route path='/testimonials' element={<Testimonial/>} />
       <Route path='/singlepage/:id' element={<SinglePages/>} />
       <Route path='/blogsingle/:id' element={<BlogSingles/>} />
      </Routes>
      <Footers/>
    </BrowserRouter>
   </>
  );
}

export default App;
