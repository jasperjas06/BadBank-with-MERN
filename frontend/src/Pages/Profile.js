import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const Profile = () => {
  const [data,setData] = useState([])
  const [Usertoken,setToken]= useState();
  const navigate=useNavigate();
  var url="http://localhost:5000"
  useEffect(()=>{
    if(!localStorage.getItem('UserToken')){
        navigate('/login')
    }else{
        setToken(localStorage.getItem('UserToken'))
    axios({
      method:"get",
      url:url+"/api/user/profile",
      headers:{
          accept: 'application/json',
          token:Usertoken,
      }
      
  })
  .then(res=> {
      setData(res.data)
      // console.warn(res);
  } )
  .catch(err=>console.log(err))

    }
},[Usertoken, data, navigate])
    const depo=()=>{
        navigate('/deposit')
    }
    const withdraw=()=>{
      navigate('/withdraw')
  }
  const logOut= () => {
    localStorage.clear();
    navigate('/')
  }
    return (
        <>
        <center><h1 className="h" ><b>PROFILE</b></h1></center>	
        <center>
        <div className="product-details">
          <div className='profile'>
  <h5 className='pro-file'> <span className="color">Name</span>:{data.Name}</h5>
  <h5 className='pro-file'>   <span className="color">DOB</span>:{data.Dob}</h5>
  <h5 className='pro-file'>   <span className="color">Email</span>:{data.Email}</h5>
  <h5 className='pro-file'>   <span className="color">PhoneNumber</span>:{data.PhoneNumber}</h5>
  <h5 className='pro-file'>   <span className="color">Address</span>:{data.Address}</h5>
  <h5 className='pro-file'>   <span className="color">Balance</span>:{data.Balance}</h5>
  </div>
    {/* <h1>State:{data.State}</h1><br /><br />
    <h1>State:{data.State}</h1><br /><br /> */}
  <center>

	<button className="glow-on-hover " onClick={withdraw}>
   <span className="buy" >Withdraw</span>
 </button>

  <button className="glow-on-hover " onClick={depo} >
   <span className="buy">Deposit</span>
 </button>
 <button className="glow-on-hover " onClick={logOut} >
   <span className="buy">LogOut</span>
 </button>
 
{/* </div> */}
  </center>
  <br/>
</div>
  </center>		
        </>
    );
}

export default Profile;