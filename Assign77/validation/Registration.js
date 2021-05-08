import { useForm } from "react-hook-form";
import React from "react";
import ReactDOM from "react-dom";
import className from 'classnames';
import axios from 'axios';
import  {useRef} from 'react';

export default function Registration()
{
	const {register,handleSubmit,watch,formState: { errors }} = useForm(//mode:onChange
		);
	const refPassword = useRef({});
    refPassword.current = watch("password","")
	console.log(errors);
	const onSubmit =(data)=>
	{
		
		console.log(data)
	
	axios.post('/users/register',data)
	.then((res)=>{
		console.log(res.data);
	})
	}
		return(
	
			<div>
				<center>
				<form onSubmit ={handleSubmit(onSubmit)}>
				<lable>UserName</lable><br/>
				<input type="text" placeholder="Enter the username" name="username"
				 {...register("username",{ required:true,minLength:4})}
				/><br/>
				{errors.username?.type ==="required" && <>{"username is required"}</>}
				{errors.username?.type ==="minLength" && <>{"username should be minimum 4 charecter"}</>}
				<br/>


				<lable>Email</lable><br/>
				<input type ="email" name ="email" placeholder="Enter the email"  name ="email"
				{...register("email",{ required:"This field is required",pattern:{
					value:/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,message:"enter valid email"}
				 })} /><br/>
				{errors.email && <div className={"invalid-feedback"}>{errors.email.message}</div>}<br/>

				<lable>Password</lable><br/>
				<input type="password"  classNames ={className("bg",{"is-invalid":errors.password })} placeholder="Enter the password" name ="password"
				{...register("password",{ required:"this field is required",minLength:
					{
						value:4,message:"please enter valid password,minimum 4 charecter"},
					})} /><br/>
				{errors.password && <div className={"invalid-feedback"}>{errors.password.message}</div>}<br/>

				<lable>Re-Password</lable><br/>
				<input type="password" placeholder="Enter the re-password" name ="repassword"
				{...register("repassword",{ required: "Re-enter Password!!", minLength:4,validate:value=> value ===refPassword.current|| "The password do not Match"})} /><br/>	
				{errors.repassword && <div className={"invalid-feedback"}>{errors.repassword.message}</div>}<br/>

				<button>Submit</button>

				</form>
				</center>


				


		</div>

		)
}





 

  