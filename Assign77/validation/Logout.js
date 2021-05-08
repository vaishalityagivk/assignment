import {useHistory} from 'react-router-dom';
export default function Logout()
{
	let history = useHistory();

	const onlogout=()=>{
		localStorage.removeItem('token')
			history.push('/login');
			alert('logout successfully');
	}

	return(
			<div>

				<button onClick={onlogout}>logout</button>

			</div>
		)
}