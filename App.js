import React from 'react';

import ShopNavigator from './Navigation/ShopNavigtor';

//================== Redux =============//
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import productReducer from './Store/reducers/product';

const rootReducer = combineReducers({
  products: productReducer
});

const store = createStore(rootReducer);
//===========================================//

export default function App(){
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  )
}


