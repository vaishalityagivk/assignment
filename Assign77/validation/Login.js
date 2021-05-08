import axios from 'axios';


const Login =()=>
{
    const doLogin =(e)=>{
        e.preventDefault();
        let userDetails = {
            email:e.target.email.value,
            password:e.target.password.value,
        }
        axios.post('/users/login',userDetails)
        .then((res)=>{
            console.log(res.data)
            localStorage.setItem('token',res.data.token)
        })

    }

    return(<div>
        <form onSubmit = {doLogin}>
        <input type = "email" placeholder ="email" name = "email" />
        <input type = "password" placeholder ="password" name = "password" />
        <button>Login</button> 
        </form>
        
        </div>
            )
}
export default Login;