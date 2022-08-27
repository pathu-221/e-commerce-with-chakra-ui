import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

import CollectionOverview from '../../components/collection-overview/collection-overview';
import './product.styles.scss';
import { selectCategories } from '../../redux/products/products.selectors';
import { createStructuredSelector } from 'reselect';
import { clearProductsData } from '../../redux/products/products.utils';


function ProductsPage({ categories, clearProductsData }) {

  return (
  
    <div>
        <Tabs 
        onChange={clearProductsData}
        isLazy
        colorScheme='teal'
        isFitted 
       >
            <TabList>
                {
                    categories.map(category => <Tab key={category.id}>{category.name}</Tab>)
                }
            </TabList>

            <TabPanels>
                {
                    categories.map(category => 
                    <TabPanel key={category.id}>
                        <CollectionOverview category={category}/>
                    </TabPanel>)
                }
            </TabPanels>
        </Tabs>
    </div>
  )
}


const mapStateToProps = createStructuredSelector({
    categories: selectCategories
});

const mapDispatchToProps = dispatch => ({
    clearProductsData: () => dispatch(clearProductsData()) 
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);