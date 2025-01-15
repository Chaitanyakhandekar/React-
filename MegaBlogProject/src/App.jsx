import { useState ,useEffect } from 'react'
import './App.css'
import config from './config/config'
import {useDispatch} from "react-redux"
import authService from './appwrite/authService'
import { login,logout } from './features/authSlice'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{                   //! Loader
    authService.getCurrentUser()
    .then((userData)=>{

      if(userData){
        dispatch(login())

      }else{
        dispatch(logout())
      }
    })
    .catch()
    .finally(()=> setLoading(false))
  },[])

  return !loading ? (

    <div className="">
        <Header/>

        {/* <Footer/> */}
    </div>
  
) : null
}

export default App
