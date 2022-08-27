import { Heading } from '@chakra-ui/react'
import { Tooltip } from '@chakra-ui/react';

import { connect } from 'react-redux';

import { FiShoppingCart } from 'react-icons/fi';

import './collection-item.styles.scss';
import { addItem } from '../../redux/cart/cart.actions';

function CollectionItem({ product, addItem }) {

    const { title, price } = product
    const imageUrl = product.images[0]


    return (
        <div className="card-container">
            <img src={imageUrl} alt="product" className='product-image' />
            <div className="card-contents">
                <div className="bottom-contents">
                    <div className="heading-price">
                        <Heading as={'h5'} size={'md'} >{title}</Heading>
                        <h2>${price}</h2>
                    </div>
                    <Tooltip
                        label="Add to cart"
                        bg="white"
                        placement={'top'}
                        color={'gray.800'}
                        fontSize={'1.2em'}>
                        <span className='cart-icon'>
                            <FiShoppingCart size={30} onClick={() => addItem(product)} />
                        </span>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: product => dispatch(addItem(product))
})

export default connect(null, mapDispatchToProps)(CollectionItem);