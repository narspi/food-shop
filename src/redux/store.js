import { createStore, compose, applyMiddleware } from 'redux';
import persistStore from 'redux-persist/es/persistStore';
import rootReducers from '../redux/reducers/index.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducers,composeEnhancers(
    applyMiddleware()
));

const persistor = persistStore(store);

export {store, persistor};