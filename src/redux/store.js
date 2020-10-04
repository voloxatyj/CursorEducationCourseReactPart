import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'
import uiReducer from './reducers/uiReducer'

const initialState = {}

const middleware = [thunk] || [window.thunk.default]

const reducers = combineReducers({
	data: userReducer,
	ui: uiReducer
})

const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null

const store = createStore(
	reducers,
	initialState,
	compose( applyMiddleware(...middleware), devTools )
)

export default store