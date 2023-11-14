import React from 'react'
import Header from '../Header'
import ListBlog from './ListBlog';
import Footer from '../Footer';


const MainListBlog = () => {
  return (
    <div className='mainlistblog'>
      <Header/>
     <ListBlog/>
     <Footer/>
    </div>
  )
}

export default MainListBlog;
