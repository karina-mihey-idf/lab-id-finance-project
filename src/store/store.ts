import {applyMiddleware, combineReducers, createStore} from 'redux';import thunk from 'redux-thunk';import {signUpReducer} from "./signUp-reducer";import {personalInfoReducer} from "./personalInfo-reducer";const rootReducer = combineReducers({    signUp: signUpReducer,    personalInfo: personalInfoReducer})export const store = createStore(rootReducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());export type AppRootStateType = ReturnType<typeof rootReducer>// @ts-ignorewindow.store = store;