import {createStore} from 'redux';
import CounterReducer from '../reducers/CountReducer';
//create store creates a store available to the  application which stores the count for count reducer.
// we also need to pass the CounterReducer so the store can modify the count
const store = createStore(CounterReducer);
export default store;