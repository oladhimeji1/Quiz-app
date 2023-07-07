import { useState } from "react";
import mike from '../img/Mike.jpg'
import { Link, useNavigate } from 'react-router-dom'
import './css/welcomepage.css'

const WelcomePage = ({onAdd}) => {
    
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [display, setDisplay] = useState(false)
    const navigateTo = useNavigate();

    sessionStorage.clear()
    
    const onsubmit = async () => {
        if(!name){
            alert('Enter your name')
        }else{
            const data = { name };
            // const respones = await fetch('http://localhost:5000/write-questions', {
            // const respones = await fetch('http://localhost:5000/names', {
            //     method: 'POST',
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify(data)
            // })
            // const res = await respones.json() //Waiting for json responds from the server
            
            // const id = res.id //getting the res id
            // const resName = res.name

            // onAdd({id, resName}) //sending the responds to onAdd route

            sessionStorage.setItem('name', name)
            navigateTo(`/quize`);
        }
    }
    
    setInterval(() => setDate(new Date()), 1000)
    const time = date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    });
     
    return (
        <div className="welcome-page">
            <div style={{textAlign: 'center', position: 'relative'}}>
                <img src={mike} alt="" />
                <h2>Oladhimeji Quize App</h2>
                <p>Built with ReactJs & Firebase</p>

                <input type="text"
                value={name}
                onChange={e=>setName(e.target.value)}
                placeholder="Enter your name to take quize" />
                <br />
                <button onClick={onsubmit}>
                <span>Start Quize</span>
                </button>
                <footer>{time} </footer>
            {/* <footer>{time} | Login to <Link to="/admin-login"> Admin Panel</Link></footer> */}
            </div>
        </div>
    )
}

export default WelcomePage;