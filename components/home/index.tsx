import React from 'react'
import Navbar from '../Navbar'
import HeroBanner from './HeroBanner'
import Paragraph from './Paragraph'
import About from './About'
import Integrations from './Integrations'
import Team from './Team'
import FaqContent from '../faqs/FaqContent'
import LatestBlog from './LatestBlog'
import Footer from '../footer'



const Homepage = () => {
  return (
    <div>

        <Navbar />

        <HeroBanner />

        <Paragraph />

        <About />

        <Integrations />

        <Team />

        <FaqContent />

        <LatestBlog />
        
        <Footer />
    </div>
  )
}

export default Homepage