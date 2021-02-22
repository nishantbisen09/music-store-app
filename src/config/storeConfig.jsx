// Import redux and all your reducers as usual
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

// redux storage imports
import * as storage from "redux-storage";
import createEngine from "redux-storage-engine-localstorage";

const reducer = storage.reducer(rootReducer);

const engine = createEngine("my-save-key");
const middleware = storage.createMiddleware(engine);

const createStoreWithMiddleware = applyMiddleware(thunk, middleware, logger)(
	createStore
);
const store = createStoreWithMiddleware(reducer);

export const load = storage.createLoader(engine);

load(store)
	.then(newState => console.log("Loaded state:", newState))
	.catch(() => console.log("Failed to load previous state"));

export default store;
