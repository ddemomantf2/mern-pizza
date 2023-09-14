import React, { useEffect, useState } from 'react' 
import { useDispatch , useSelector } from 'react-redux'
import {loginUser} from "../actions/userActions";


export default function Loginscreen() {
  const [email , setemail] = useState("");
  const [password , setpassword] = useState("");
  const dispatch = useDispatch()

  useEffect(() => {
    if(localStorage.getItem('currentUser'))
    {
      window.location.href='/'
    }
  },[])

  function login(){
    const user = {email , password}
    dispatch(loginUser(user))
  }
  
  return (
    <div>
        <h1>Login screen</h1>
    </div>
  )
}
