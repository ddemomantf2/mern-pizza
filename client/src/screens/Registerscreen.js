import React, { useState, useEffect } from 'react';
import {useDispatch , useSelector } from 'react-redux';
import { registerUser } from '../actions/userActions';
import Success from '../components/Success';
import Loading from '../components/Loading';
import Error from '../components/Error';

export default function Registerscreen() {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [cpassword, setcpassword] = useState('');
 //uncomment below 2 if workaround is found from vid3 1"07

      
    const registerstate = useSelector(state=>state.registerUserReducer)
    const {error , loading , success} = registerstate

    const dispatch = useDispatch()
    function register(){
        if(password!=cpassword)
        {
            alert("Passwords dont match!!!")
        }    
        else{
            const user={
                name, 
                email,
                password
            }
            console.log(user);
            dispatch(registerUser(user))
        }
    }

    return (
        <div>
            <div className='row justify-content-center mt-5'>
                <div className='col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded'>
                {loading && (<Loading/>)}
                {success && (<Success success='User Registered Successfully'/>)}
                {error && (<Error error='Email already registered'/>)}
                    

                    <h2 className='text-center m-2' style={{ fontSize: '35px' }}>Register</h2>
                    <div>
                        <input required type='text' placeholder='name' className='form-control' value = {name} onChange = {(e)=>{setname(e.target.value)}}/>
                        <input required type='text' placeholder='email' className='form-control'value = {email} onChange = {(e)=>{setemail(e.target.value)}}/>
                        <input required type='text' placeholder='password' className='form-control' value = {password} onChange = {(e)=>{setpassword(e.target.value)}}/>
                        <input required type='text' placeholder='confirm password' className='form-control' value= {cpassword} onChange = {(e)=>{setcpassword(e.target.value)}} />
                        
                        
                        <button onClick={register} className='btn mt-3 mb-3'>Register</button>
                        <br/>
                        <a style={{color:'black'}} href="/login" className='m-2'>Click here to login</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

/*
put the code below in line 38

*/