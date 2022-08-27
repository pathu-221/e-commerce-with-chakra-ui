import React from 'react'
import Carousel from '../../components/carousel/carousel.component';
import HeroSection from '../../components/hero-section/hero.component';
import Footer from '../../components/footer/footer.component';

function HomePage() {
  return (
    <div>
        <HeroSection />
        <Carousel />
        <Footer />
    </div>
  )
}

export default HomePage;