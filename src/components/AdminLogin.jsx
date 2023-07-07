import { useState } from "react";
import mike from '../img/Mike.jpg'
import { useNavigate } from 'react-router-dom';
import './css/adminLogin.css';

const AdminLogin = () => {
    const [name, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [date, setDate] = useState('');
    const history = useNavigate();
    
    setInterval(() => setDate(new Date()), 1000)
    const time = date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    });

    const onsubmit = () => {
        if(!name && !password){
            alert('No way!!')
        }else{
            history('/admin-page')
        }
    }
    const goHome = () =>{
        history('/')
    }
      
    return (
        <div className="login-page">
            <i className="fa fa-arrow-left"
            onClick={goHome}></i>
            <img src={mike} alt="" />
            <h2>Admin Login Panel</h2>
            
            <input type="text"
            value={name}
            onChange={e=>{setUserName(e.target.value)}}
            placeholder="Enter username" />

            <input type="password"
            value={password}
            onChange={e=>{setPassword(e.target.value)}}
            placeholder="Enter password" />

            <button onClick={onsubmit}>
                <span>Login</span>
            </button>

            <footer>{time} | Forgot password?</footer>
        </div>
    )
}

export default AdminLogin;