import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
const Withdraw = () => {
    const [token,setToken]=useState('')
    const[balance,setBalance]=useState(0)
    const [amount,setAmount]=useState(0)
    const [data,setData]=useState()
    const navigate=useNavigate()
    var url="http://localhost:5000"
    useEffect(()=>{
        setToken( localStorage.getItem('UserToken'))

        if(! localStorage.getItem('UserToken')){
            navigate('/')
        }

        if(token){
         axios({
             method:"get",
             url:url+"/api/user/profile",
             headers:{
                 accept: 'application/json',
                 token:token
             }
         })
         .then(res=>{
            setData(res.data)
            if(data){
                setBalance(parseInt(data.Balance))
            }

        })
         .catch(err=>console.log(err))
     }
    }, [token, data])
    const withdraw=()=>{
        if(amount>0){
            if(amount<=balance){
                const am=Number(amount)
                const result=balance-am
                axios({
                    method:"put",
                    url:url+"/api/user/update",
                    data: {
                       Balance: result
                    },
                    headers:{
                        accept: 'application/json',
                        token:token
                    }
                }).then(res=>{
                    console.log(res.data);
                    alert("ThankYou for using me")
                   
                })
                .catch(err=> console.log("server crashed"))
            }
            else{
                console.log("Account Balance is low")
            }
        }else{
            console.log("enter a valid amount")
        }
    }
    const profile=()=>{
        navigate('/profile')
    }
    return (
        <>
        <center><h1>WITHDRAW</h1></center>
        <center>
            <div className="Deposite" >
    <div className="Deposite-container">
        <div className="brand-logoD"></div>
        <center>

        <h2>Balance:</h2>  <p className='balance'>{balance}</p>
        </center>
        <div className="input-field">
           
          <label><h3>AMOUNT</h3></label>
          <input type="number" placeholder="ENTER YOUR AMOUNT" onChange={(e)=>setAmount(e.target.value)}   />
          <br/>
          <br/>
          <button type="submit"  className="glow-on-hover" onClick={withdraw}>Withdraw</button>
          <br/>
          <br/>
          <button type="submit"  className="glow-on-hover" onClick={profile}>Back</button>
        </div>
   </div>

  </div>
  </center>
        </>
    );
}

export default Withdraw;