import React from 'react';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import image from '../../assets/hero-image.jpg';

import './hero.styles.scss';

function HeroSection() {
  return (
    <div className='hero-container'  style={{
     // background: `linear-gradient(0deg, #00000088 30%, #ffffff44 100% )`,
      backgroundImage: `linear-gradient(0deg, #00000088 30%, #ffffff44 100% ), url(${image})`,
     // backgroundBlendMode: 'multiply',
      backgroundPosition: 'center',
      objectfit: 'conver'
    }}>
        <div className="hero-contents">
        <div className="line">Your Everything Store</div>
        <div className="button">
              <Link to='/products'>
                  <Button rightIcon={<AiOutlineArrowRight />}
                   colorScheme='white' 
                   variant='outline'
                   _hover={{ bg: '#ebedf0', color: 'gray' }}
                   >
                      Shop Now
                  </Button>
              </Link>
        </div>
        </div>
    </div>
  )
}

export default HeroSection;