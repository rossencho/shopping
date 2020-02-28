import { createStore, applyMiddleware, compose  } from 'redux';
import trunk from 'redux-thunk';
import rootReducer from './reducers';

const initilState ={};
const middleware = [trunk];

const store = createStore(rootReducer, initilState, compose (
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store; 