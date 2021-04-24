let initialState = {count:0}
function CounterReducer(state = initialState,action)
{
	console.log(action);
	console.log(state);
	switch(action.type)
	{
		case 'counter/increase':
		console.log('came in action counter/increase');
		return{...state, count:state.count+1}
		case 'counter/decrease':
		console.log('came in action counter/decrease');
		return{...state, count:state.count-1}
		case 'counter/reset':
		console.log('came in action counter/reset');
		return{...state,count:0}
		case 'counter/square':
		return{...state,count:state.count*state.count}
		case 'counter/root':
		return{...state,count:Math.sqrt(state.count)}
		default:
		return state;
	}
}
export default CounterReducer;