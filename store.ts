import { configureStore } from '@reduxjs/toolkit';

import userAuthSlice from './redux/userAuthSlice';
import ArticleSlice from './redux/newsSlicer' 
const store = configureStore({

reducer: {

user: userAuthSlice,
article:ArticleSlice,


},

});

export default store;