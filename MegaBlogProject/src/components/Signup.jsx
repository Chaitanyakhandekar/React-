import React,{useState} from "react";
import authService from "../appwrite/authService";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {Input, Button} from './index'
import { login } from "../features/authSlice";
import { useNavigate,Link } from "react-router-dom";


function Signup(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register , handleSubmit} = useForm()
    const [error ,setError] = useState('')

    const createAccount = async(data)=>{
        setError('')

        try {
            
            const session = await authService.createAccount(data)
            if(session){
                const userData = await authService.getCurrentUser()
                dispatch(login(userData))
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

            <h2>Sign up to create account</h2>
            <p>Already have an account?&nbsp;

                <Link
                to="/login">
                    Login
                </Link>
            </p>

            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

            <form onSubmit={handleSubmit(createAccount)}>

                <Input
                label="Email:"
                placeholder="Enter your email"
                type="email"
                {...register("email",{
                    required:true
                })}
                />

                <Input
                label="password:"
                placeholder="Enter password"
                type="password"
                {...register("password",{
                    required:true
                })}
                />

                <Input
                label="Username:"
                placeholder="Enter your username"
                {...register("name",{
                    required:true
                })}
                />

                <Button
                type="submit">
                    Create Account
                </Button>
            </form>
        </div>
    )

}

export default Signup;