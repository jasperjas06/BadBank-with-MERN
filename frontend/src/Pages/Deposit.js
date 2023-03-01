import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
const Deposit = () => {
    const navigate=useNavigate()
    const [token,setToken]=useState('')
    const[balance,setBalance]=useState(0)
    const [amount,setAmount]=useState(null)
    const [data,setData]=useState()
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
            // console.log(res);
            setData(res.data)
            if(data){
                setBalance(parseInt(data.Balance))
            }

        })
         .catch(err=>console.log(err))
     }
    }, [token, data,])
    const Dep=()=>{
        if(amount>0){
            // console.log(typeof balance);
            const am=Number(amount)
            // console.log(typeof balance);
            const result=balance+am
            // console.log(result);
            
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
                alert("Congrats")
                console.log(res.data);
                
            })
            .catch(err=>
                console.log(err)
                
                
                )

        }else{
console.log("error");
        }
        setAmount("")
    }
    const profile=()=>{
        navigate('/profile')
    }
    // console.log(data);
    return (
        <>
        <center><h1>DEPOSIT</h1></center>
        <center>
            <div className="Deposite" >
    <div className="Deposite-container">
        <div className="brand-logoD"></div>
        <center>
        <h2>Balance:</h2>
            <p className='balance'> {balance}</p>
        </center>
        <div className="input-field">
           
          <label><h3>AMOUNT</h3></label>
          <input type="number" placeholder="ENTER YOUR AMOUNT"  value={amount} onChange={(e)=>setAmount(e.target.value)} />
          <br/>
          <br/>
          <button type="submit"  className="glow-on-hover" onClick={Dep}>Deposit</button>
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

export default Deposit;