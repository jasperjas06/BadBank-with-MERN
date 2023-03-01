import React,{ useState} from 'react';
import "./Pagestyles.css"
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
const Create = () => {
    const[name,setName]=useState();
    const [dob,setDob]=useState();
    const[email,setEmail]=useState();
    const [phoneNumber,setPhoneNumber]=useState();
    const [gender,setGender]=useState();
    const[address,setAddress]=useState();
    const[password,setPassword]=useState();
    const navigate=useNavigate()
    var url="http://localhost:5000"
    const hom=()=>{
        navigate('/')
    }
    const Reg=()=>{
        if(!name || !dob || !email || !phoneNumber ||!gender   ||!address  ||!password ){
          alert("Fill the required fields")
        }else{
          
              axios.post(url+'/api/user/createAccount',{
                  Name:name,
                  Dob:dob,
                  Email:email,
                  PhoneNumber:phoneNumber,
                  Gender:gender,
                  Password:password,
                  Address:address,
                  
               }).then(res=>{
                   alert("ThankYou for registering")
                //   console.log(res.data);
                  if(res){
                    navigate("/login")
                  }
               }).catch(err=>{
                  console.log(err.message);
                  alert(err.message)
                  
               })
          
          
        }
      };
    return (
        <>
        <form action="#">
            <center><h1>REGISTER</h1></center>
            <center>
        <div className="form_first">


                <div className="fields">
                    <div className="input-field">
                        <label>Full Name </label>
                        <input type="text" placeholder="Enter your name" onChange={e=>setName(e.target.value)}  required />
                    </div>

                    <div className="input-field">
                        <label>Date of Birth</label>
                        <input type="date" placeholder="Enter birth date" required onChange={e=>setDob(e.target.value)} />
                    </div>

                     <div className="input-field">
                        <label>Email </label>
                        <input type="email" placeholder="Enter your email" required onChange={e=>setEmail(e.target.value)}  />
                    </div>

                    <div className="input-field">
                        <label>PhoneNo</label>
                        <input type="number" placeholder="Enter mobile number" onChange={e=>setPhoneNumber(e.target.value)}  required />
                    </div>

                    <div className="input-field">
                        <label>Gender</label>
                        <select onChange={e=>setGender(e.target.value)}  required>
                            <option >Select gender</option>
                            <option value="Male" >Male</option>
                            <option value="Female" >Female</option>
                            {/* <option value="Other" >Others</option> */}
                        </select>
                    </div>


                <div className="input-field">
                    <label>Address </label>
                    <input type="text" placeholder="Enter your Address" onChange={e=>setAddress(e.target.value)}  required />
                </div>
                <div className="input-field">
                    <label>Password </label>
                    <input type="Password" placeholder="Enter your Password" onChange={e=>setPassword(e.target.value)}  required />
                </div>



                <button className='glow-on-hover'
                disabled={!name && !email && !password}
                onClick={Reg} >
                    register

                </button>
                <button className='glow-on-hover' onClick={hom} >
                    Back 

                </button>
                </div>
            </div>
            </center>

    </form>
        </>
    );
}

export default Create;