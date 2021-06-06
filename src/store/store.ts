import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {appReducer} from "./app-reducer/app-reducer";
import {tenderReducer} from "./tender/tender-reducer";
import { composeWithDevTools } from 'redux-devtools-extension';



const rootReducer = combineReducers({
    app:appReducer,
    tender:tenderReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export type AppRootStateType = ReturnType<typeof rootReducer>
