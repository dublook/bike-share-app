import { reducer as formReducer } from 'redux-form';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from '../auth/reducer';
import homeReducer from '../container/HomeContainer/reducer';

const persistConfig = {
  key: 'authReducer',
  storage,
  whitelist: ['authReducer'],
};

export default persistCombineReducers(persistConfig, {
  authReducer,
  homeReducer,
  form: formReducer,
});
