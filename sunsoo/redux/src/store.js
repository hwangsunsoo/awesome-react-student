import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk"
import rootReducer from "./reducers"

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default function configureStore(initalState) {
    return createStoreWithMiddleware(rootReducer, initalState);
}

