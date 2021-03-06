import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Testimonial from './components/testmonials/Testimonial'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
        <Header></Header>
        <Nav></Nav>
        <About></About>
         <Experience></Experience>
        <Services></Services>
        <Portfolio></Portfolio>
        <Testimonial></Testimonial>
        <Contact></Contact>
        {/* <Footer></Footer> */}
        <Footer></Footer>

    </>
  )
}

export default App