import React from 'react'

import { IoBagOutline } from 'react-icons/io5';

import { connect } from 'react-redux';
import { selectTotalQuantity } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import {
  Menu,
  MenuGroup,
  MenuDivider,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Divider
} from '@chakra-ui/react';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import './cart-icon.styles.scss';
import { Link } from 'react-router-dom';

function CartIcon({ total_quantity, cartItems }) {
  return (
    <div className='cart-dropdown'>
      <Menu
      padding={3}
      gutter={8}>
        <MenuButton >
          <p className='text'>{total_quantity}</p>
          <IoBagOutline size={30} />
        </MenuButton>
        <MenuList className='cart-items' position={'relative'}>
          <MenuGroup overflowY={'scroll'} maxH={5}>
          {
            cartItems.length ? cartItems.map(cartItem =>
              <MenuItem key={cartItem.id}>
                <CartDropDown cartItem={cartItem} ></CartDropDown>
              </MenuItem>) : <MenuItem> <h2> You cart is empty</h2></MenuItem>
          }
          </MenuGroup>
          <MenuDivider />
            <MenuGroup >
            <Link to={'/checkout'}>
              <div className='button-div'>
              <Button
                colorScheme='teal'
                alignSelf={'center'}
                w={'100%'}>
                  Checkout
              </Button>
              </div>
            </Link>
            </MenuGroup>
        </MenuList>

      </Menu>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  total_quantity: selectTotalQuantity,
  cartItems: selectCartItems
})



export default connect(mapStateToProps)(CartIcon);