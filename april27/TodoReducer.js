let initialState = {data:[]};

function TodoReducer(state = initialState,action)
{
	switch(action.type)
	{
		case "add/todo":
		let newState = {...state,data:action.data};
		return newState
		
		default:
		return state;
	
	}
}
export default TodoReducer;

