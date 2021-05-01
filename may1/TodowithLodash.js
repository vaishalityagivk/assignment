import {Component} from 'react';
import _ from 'loadsh';
import TodoWithLoadshForm from './TodoWithLoadshForm';
import TodoWithLoadshList from './TodoWithLoadshList';
class TodoWithLodash extends Component
{
	constructor(props)
	{
		super(props);
		this.state={
			todo:[]
		} 
	}
	addTodo =(e)=>
	{
		e.preventDefault();
		let ob={}
		_.set(ob,"text",e.target.text.value);
		_.set(ob,"description",e.target.description.value);
		this.setState({todo:this.state.todo.concat(ob)
		})
		localStorage.setItem("newtodo",this.state.todo)
	}


render()
{
	return(
		<div>
		<TodoWithLoadshForm addtodo ={this.addtodo} />
		<TodoWithLoadshList todo = {this.state.todo} />
		</div>
			)
}


}
export default TodoWithLodash;