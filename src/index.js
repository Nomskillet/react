
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import MovieList from './components/MovieList'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import movieReducer from "./reducers/movieReducer";
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

//store things in local storage
//?install redux persist: npm install redux-persist
import { persistReducer, persistStore } from "redux-persist";
import FavoriteMovies from './components/FavoriteMovies';
import SearchBox from './components/SearchBox';
// install storage 

const persistConfig = {
  key: 'root', //the name of the redux store, what will be stored
  storage, // library from redux-persist --- storage from 'redux-persist/lib/storage'
}
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//? create a variable
const persistedReducer = persistReducer(persistConfig,movieReducer)
const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
let persistor = persistStore(store)
//? bring in the component, anytime anything changes in the redux, will be saved underPersistGate

ReactDOM.render(
  
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
  <Router>
    {/* <BaseLayout> */}
      <Routes>
        <Route path="/" element={<App />}/>
        {/* <Route path="/searchMoviesPage" element={<MovieList />}/> */}
        <Route path="/search" element={<SearchBox />}/>
        <Route path="/favoriteMoviesPage" element={<FavoriteMovies />}/>
     
       
      </Routes>
    {/* </BaseLayout> */}
      </Router>
    </PersistGate>
  </Provider>,
document.getElementById('root')
);


