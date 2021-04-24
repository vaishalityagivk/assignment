import{useStore,useDispatch,useSelector} from 'react-redux';
function ReduxCounter(){
	const dispatch=useDispatch();
	
const store=useStore();
const count=useSelector(state=>state.count);
const increase=()=>
{
	dispatch({type:'counter/increase'})
}
const decrese=()=>
{
	dispatch({type:'counter/decrease'})
}
const reset =()=>
{
	dispatch({type:'counter/reset'})
}
const square =()=>
{
	dispatch({type:'counter/square'})
}
const root =()=>
{
	dispatch({type:'counter/root'})
}
return(
	<div>
	count={count}<br/>
	<button onClick={increase}> Increase</button>
	<button onClick={decrese}> Decrese</button>
	<button onClick={reset}> Reset</button>
	<button onClick={square}> Square</button>
	<button onClick={root}> Root</button>
	</div>
	)
}

export default ReduxCounter;