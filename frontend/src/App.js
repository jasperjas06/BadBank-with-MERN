import './App.css';
import { BrowserRouter as HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Create from './Pages/Create'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Deposit from './Pages/Deposit';
import Withdraw from './Pages/Withdraw';
import Footer from './Pages/Footer';
function App() {
  return (
    <div className="App">
      {/* <Create/> */}
      <HashRouter>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Create/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/deposit" element={<Deposit/>} />
        <Route path="/withdraw" element={<Withdraw/>} />
      </Routes>
      {/* </header> */}
      </HashRouter>
      <Footer/>
    </div>
  );
}

export default App;
