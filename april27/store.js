import {createStore} from 'redux';
// import CounterReducer from '../reducers/CountReducer';
// import CounterReducer from '../reducers/TodoReducer';
import FormReducer from '../reducers/FormReducer';


//create store creates a store available to the  application which stores the count for count reducer.
// we also need to pass the CounterReducer so the store can modify the count
const store = createStore( FormReducer ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;