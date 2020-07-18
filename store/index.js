import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';

import Reducer from '../reducers/index';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: ['isLoginReducer'],
	blacklist: ['toDoReducer'],
};

const persistedReducer = persistReducer(persistConfig, Reducer);

const store = createStore(persistedReducer, applyMiddleware(createLogger()));

let persistor = persistStore(store);

export { store, persistor };
