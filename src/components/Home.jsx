import Question from "./Question";
import useFetch from "./useFetch";
import './css/home.css'
import { useEffect, useState } from "react";

const Home = ({ resid }) =>{
    const [ispending, setIspending] = useState(false)
    // const [questions, setQuestions] = useState([])
//    const { data: questions, isLoading, error } = useFetch('https://paper-grizzly-millennium.glitch.me/db.json');
//    const { data: questions, isLoading, error } = useFetch('http://localhost:8000/questions');

    const [questions, seQuestions] = useState([
        {
            id: 1,
            title: 'What is the CSS used for?',
            options: ['Web markup', 'Web styling', 'Web scripting', 'Backend', ],
            answer: 'Web styling'
        },
        {
            id: 2,
            title: 'What is the HTML used for?',
            options: ['Web markup', 'Web styling', 'Web scripting', 'Backend', ],
            answer: 'Web markup'
        },
        {
            id: 3,
            title: 'What is the Javascript used for?',
            options: [ 'Web markup', 'Web styling', 'Web scripting', 'Backend', ],
            answer: 'Web scripting'
        },
        {
            id: 4,
            title: 'What is my name',
            options: [ 'Ayo', 'Dele', 'Ola', 'Seun', ],
            answer: 'Ola'
        }
    ])
    const timex = ()=>{
        setIspending(true)
    }
    if(questions){
        var sessionStore = sessionStorage.getItem('name');
        sessionStorage.setItem('lenght', questions.length);
        if(!sessionStore){
            // document.write('You must enter your details first')
            alert('You must enter your details first')
        }else{
            setTimeout(timex, 2000);
            // sessionStorage.removeItem('name')
        }
    }
  
    return(
        <div className="home">

            { !ispending && <div className="loading"></div> }
            <p>{ resid }</p>
            {ispending && <Question
            questions={questions} seQuestions={seQuestions}  /> }

            {/* { questions && <Question id={id}
            questions={questions}  /> } */}
        </div>
    );
}

export default Home;