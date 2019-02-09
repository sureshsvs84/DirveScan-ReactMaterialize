import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import {appConstants as constants} from 'appConstants';
import AppLayout from './appLayout';
import store from './store';
import 'materialize-css';
import 'jquery';
//import '../public/assets/theme/js/paper-dashboard';
//import 'babel-polyfill';


const BootstrapedElement = document.getElementById(constants.ELEMENT_TO_BOOTSTRAP);
//const middleware = [ thunk ];

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Need to get the combined reducer
 * our entire applications state (store) is just whatever gets returned from all your reducers
 * */
// const rootReducer = combineReducers({
//     function()
//     {
//         return {}
//     }
    
// });

// const store = createStore(
//     rootReducer,
//     applyMiddleware(...middleware)
//   );
  
  

// store.subscribe(() => {
//   console.log(store.getState()); 
// });
ReactDom.render(<BrowserRouter>
      <Provider store={store}>
          <AppLayout />
      </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
