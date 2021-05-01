import {Component} from 'react';

class TodoWithLoadshForm extends Component
{ constructor(props)
	{
		super(props);
	}

	render()
	{
		return(
			<div>
			<form onSubmit = {this.props.addTodo}>
			Title     <input type ="text" name ="text" placeholder="Enter text"/><br/>
			Desc  <textarea rows ="10" cols ="28" name ="description" placeholder="Enter description">
			</textarea><br/>
			<button>Submit</button>
			</form>
			</div>
			)

	}
}
export default TodoWithLoadshForm