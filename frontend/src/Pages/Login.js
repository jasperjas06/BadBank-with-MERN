import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {  toast } from 'react-toastify';
const Login = () => {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const navigate=useNavigate()
    // var url="http://localhost:5000"
    React.useEffect(()=>{
        if(localStorage.getItem('UserToken')){
            navigate('/profile')
        }
    })
    const reg=()=>{
        navigate('/register');
    }
    const hom=()=>{
        navigate('/')
    }
    // const profile=()=>{
    //     navigate('/profile')
    // }

    const userLog = () => {
        console.log(email,password);
        axios.post('http://localhost:5000/api/user/login',{
            Email:email,
            Password:password
        },[])
        .then(res=>{
            console.log(res);
            alert("Welcome to bad bank")
           if (res.data) {
            localStorage.setItem('UserToken',res.data)
            setTimeout(function(){
        navigate('/profile')
                    }, 2000);
                    
           }
        })
        .catch(err => {
            console.log(err.message);
            alert("email & password not maching")
        })
    }
    return (
        <>
        <form className="login100-form validate-form">
                <span className="login100-form-title">
                <center> <h1>Member Login</h1>  </center> 
                </span>
                <center>
                <div className="form_first2">

                <div className="input-field" data-validate = "Valid email is required: ex@abc.xyz">
                <label>Email </label><br/>
                    <input className="input100" type="text" name="email" placeholder="Email" onChange={e=>setEmail(e.target.value)} required/>
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                        
                    </span>
                </div>

                <div className="input-field" data-validate = "Password is required">
                <label>Password </label><br/>
                    <input className="input100" type="password" name="pass" placeholder="Password"  onChange={e=>setPassword(e.target.value)} required />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                        
                    </span>
                </div>
                <br/>
                
                <div className="container-login100-form-btn">
                    <button type="button" className='glow-on-hover' onClick={userLog} >
                        Login
                    </button>
                </div>
          <br/>
                <div className="container-login100-form-btn">
                    <button  className='glow-on-hover' onClick={reg}>
                        Create-Account
                    </button>
                </div>
                <br/>
                <div className="container-login100-form-btn">
                    <button  className='glow-on-hover' onClick={hom}>
                        Back to Home
                    </button>
                </div>

                </div>
                </center>
            </form>
            </>
    );
}

export default Login;