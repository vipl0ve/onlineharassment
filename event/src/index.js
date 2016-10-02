import {createStore} from 'redux';
import RootReducer from './reducers/root_reducer';

import {wrapStore} from 'react-chrome-redux';

//const defaultState = {
  //filter_on: 'on' or off
  //filter_types: { #filters and on or off?}
  //word settings...
  //words to filter: {}
//}

const store = createStore(
  RootReducer,
  {} //preloaded state
);

wrapStore(store, {
  portName: 'STOP_HARASSMENT'
});
