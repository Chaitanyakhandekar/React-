import React, {useState} from "react";
import {Input , Button} from './index'
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authService from "../appwrite/authService";
import { login as authLogin } from "../features/authSlice";


function Login(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register , handleSubmit} = useForm()
    const [error ,setError] = useState('')

    const login = async(data)=>{
        setError('');
        
        try {
            const session = await authService.login(data)
            if(session){
                const userData = await authService.getCurrentUser();
                dispatch(authLogin(userData))
                navigate('/')
            }

        } catch (error) {
            setError(error)
        }
    }

    return(
        <div>
            <div>

            </div>

            <h2>Sign in to your account</h2>
            <p> Don&apos;t have any account?&nbsp;
                <Link
                to="/signup">
                    Sign up
                </Link>
            </p>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

            <form onSubmit={handleSubmit(login)}>

                <Input
                label="Email: "
                placeholder="enter your email"
                type="email"
                {...register("email",{
                    required:true
                })}
                />

                <Input
                label="password:"
                type="password"
                placeholder="Enter your password"
                {...register("password",{
                    required:true
                })}
                />

                <Button
                type="submit">
                    Login
                </Button>
            </form>

        </div>
    )
}

export default Login;