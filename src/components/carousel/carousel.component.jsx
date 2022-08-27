import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

import { selectCategories } from '../../redux/products/products.selectors';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Button, Heading } from '@chakra-ui/react'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./carousel.styles.scss";

// import required modules
import { Pagination, Navigation } from "swiper";


function Carousel({ categories }) {
    return (
        <div className='carousel-container'>

            <Heading className='shop-heading'>Shop</Heading>

            <Swiper
            navigation={true}
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            >
                {
                    categories.map(category =>
                        <SwiperSlide className='swiper-slide' key={category.id}>
                            <div className="slide">
                                <img src={category.image} alt="category" className='category-image' />
                                <div className="image-hover">
                                    <div className="image-hover-content">
                                        <Heading m={5}>{category.name}</Heading>
                                        <Link to='/products'>
                                            <Button colorScheme='teal'>Browse More</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    categories: selectCategories
})

export default connect(mapStateToProps)(Carousel);