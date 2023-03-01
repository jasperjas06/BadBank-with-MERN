import React from 'react';
import { FiInstagram,FiGithub,FiFacebook } from "react-icons/fi";
const Footer = () => {
    return (
        <>
    <footer className='footer'>
        <br/>
    <FiGithub/>
    <FiInstagram/>
    <FiFacebook/>
    <br/>
    <br/>
  <div  >
    © 2022 Copyright:
    <a class="text-white" href="https://github.com/jasperjas06">Jasper</a>
  </div>
  <div className='icon'>
       
    </div>
</footer>
        </>
    );
}

export default Footer;