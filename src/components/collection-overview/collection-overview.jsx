import React from 'react';
import { useEffect } from 'react';

import CollectionItem  from '../collection-item/collection-item.component';
import { getCategoryProducts } from '../../utils/appUtils';
import { connect } from 'react-redux';
import { getCategoryProducts as reduxGetProducts } from '../../redux/products/products.utils';

import { createStructuredSelector } from 'reselect';
import { selectProducts } from '../../redux/products/products.selectors';

import { Spinner } from '@chakra-ui/react';
import './collection-overview.styles.scss';
import { useState } from 'react';
import { getcategoryProducts } from '../../services/addProductstodatabase';

function CollectionOverview({ category, reduxGetProducts, products }) {

  const [loaded, isLoaded] = useState(false);

  useEffect(() => {
    getCategoryProducts(category.id)
    .then(data => {
      if(data.length > 32) data = data.slice(0, 32);
      reduxGetProducts(data);
    }).catch(error => alert(error.message));
    // getcategoryProducts(category.name).then(data => reduxGetProducts(data));
    // addProductstodatabase('categories', category.name, products);
    isLoaded(true);
  }, [category.id, reduxGetProducts])

  return (
    <div className="collection-item">
      {
        loaded ? <section className='products'>
        {
            products.map(product => 
              <CollectionItem 
              key={product.id}
              product = { product }
               />
              )
          }
        </section> :
        <div className="spinner">
          <Spinner
          size={'xl'}
          speed={'.8s'} />
        </div>
      }
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  reduxGetProducts: (products) => dispatch(reduxGetProducts(products))
});

const mapStateToProps = createStructuredSelector({
  products: selectProducts
})


export default connect(mapStateToProps, mapDispatchToProps)(CollectionOverview);