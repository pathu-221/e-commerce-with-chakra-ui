import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { products_reducer } from './products/products.reducer';
import { cart_reducer } from './cart/cart.reducer';
import { user_reducer } from './user/user.reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { persistStore } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
        'product', 'cart'
    ]
}

const middlewares=[];

if(process.env.NODE_ENV ==='development' ) {
    middlewares.push(logger, thunk);
}

const root_reducer = combineReducers({
    product: products_reducer,
    user: user_reducer,
    cart: cart_reducer
});




const persist_reducer = persistReducer(persistConfig, root_reducer);

export const store = createStore(persist_reducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);