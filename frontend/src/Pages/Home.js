import React from 'react';
import {useNavigate} from 'react-router-dom'
import "./Pagestyles.css"
const Home = () => {
    const navigate=useNavigate()

    const reg=()=>{
        navigate('/register');
    }
    const log=()=>{
        navigate('/login')
    }
    return (
        <>
        <center><h1>Welcome to the bad Banking</h1></center>
        <div className='hom_btn'>
           <center> <button className='glow-on-hover' onClick={log}>LOGIN</button>
            <button className='glow-on-hover' onClick={reg}>REGISTER</button></center>
            {/* <center><img className='hom_image' src='https://images-cdn.newscred.com/Zz04NjA3ZjljMjQ0ODkxMWViOWRjYzU1OGJkNjI1ZjVkZA==' alt='img'/></center> */}

        </div>

        </>
    );
}

export default Home;