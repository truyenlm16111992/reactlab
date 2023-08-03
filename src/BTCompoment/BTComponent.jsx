import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Content from './Content'
import Footer from './Footer'

const BTComponent = () => {
  return (
    <div>
        <Header/>
        <div className='row'>
            <div className='col-4'>
                <Navigation/>
            </div>
            <div className='col-8'>
                <Content/>
            </div>
        </div>
        <Footer/>
    </div>
    
  )
}

export default BTComponent