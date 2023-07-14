import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import userReducer from '../reducers/userReducer';
import productReducer from '../reducers/productReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
  },
  devTools: true ,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
});

export default store;