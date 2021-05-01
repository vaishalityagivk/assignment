import {Component} from 'react';
import _ from 'loadsh';
import {Map} from "react-lodash";
class TodoWithLoadshList extends Component
{ constructor(props)
	{
		super(props);
		this.state={
			todo:[]
		}
		console.log(this.props);
	}

	render(arr)
	{
		let mappedarray=_.map(this.props.todo)
		return(
			<div>
			<div>
			<h1>list of Added Todos</h1>
			</div>
			<div>
			<Map collection ={mappedarray} iteratee ={val =><li key ={val}>{val.text}{val.description}</li>}/>
		
			</div>
			</div>
			)

	}
}
export default TodoWithLoadshList;