import React from 'react';
import { FlatList } from 'react-native';

import { useSelector } from 'react-redux';

import ProductItem from '../../Components/shop/ProductItem';

const ProductOverview = props => {
    const products = useSelector( state => state.products.availableProducts )
    return (
    <FlatList 
        data = {products} 
        renderItem = {itemData => <ProductItem image={itemData.item.imageURL} 
                                               title={itemData.item.title}
                                               price={itemData.item.price}
                                               onViewDetails={() => {}}
                                               onAddToCart={() => {}} />}
    />
    )
}

ProductOverview.navigationOptions = {
    headerTitle: 'All Products'
}

export default ProductOverview;