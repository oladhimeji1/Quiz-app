import { Link } from "react-router-dom";
import mike from '../img/Mike.jpg'
import './css/result.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

const Result = ({ name }) =>{
    const { result } = useParams();
    var [username, setUsername] = useState('')
    var [lenght, setLenght] = useState('')

    useEffect(()=>{
        const getName = () => {
           const username = sessionStorage.getItem('name')
           const lenght = sessionStorage.getItem('lenght')
           setUsername(username)
           setLenght(lenght)
        }
        getName()
    }, [])
    return (
        <div className="result">
            <div style={{textAlign: 'center'}}>
                <img src={mike} alt="Emoji" />
                <div className='congrats'>Weldone { username }!</div>
                <p>You scored </p>
                <h1> { result }/{ lenght } </h1>
                <small> <Link to='/'> Go back home</Link></small>
            </div>
           
        </div>
    )
}

export default Result;