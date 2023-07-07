import { useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import "./css/question.css"
import { Link, useNavigate } from 'react-router-dom'

const Question = ({ questions, seQuestions, id }) => {

    const [currentIndex, setIndex] = useState(0)
    const [num, setNum] = useState(1)
    const [toggle, setToggle] = useState(true)
    const [toggleButton, setToggleButton] = useState(true)
    // const [result, setResult] = useState(true)
    const [res, setRes] = useState(0)
    const [backHere, setBackHere] = useState(false)
    const [score, setScore] = useState(Array(questions.length).fill(0));
    const navigateTo = useNavigate();

    var questionNumbers = []
    for(var i=1; i<=questions.length; i++){
        questionNumbers.push(i)
    }

    var addArr = (e) =>{
      
        if(e.target.innerText === questions[currentIndex].answer){

            // Updating the score in the array
            const totalScore = [...score]; //all the data in the array
            totalScore[currentIndex] = 1 //update the index of the question in the array by 1
            setScore(totalScore)
            
        }
        else{
        // Updating the score in the array
            const totalScore = [...score]; //all the data in the array
            totalScore[currentIndex] = 0
            setScore(totalScore)
        }
    }

    const handleoptionclick = (queId, OpId) => {
        const updatedquestions = [...questions];
        updatedquestions[queId].selectedOption = OpId;
        seQuestions(updatedquestions)
    }

    var goForward = () =>{
        
        // Incrementing/Moving to the next question
        if(currentIndex === questions.length - 1){
            setIndex(currentIndex)
            setToggleButton(false)
        }else{
            setIndex(currentIndex + 1)
            setNum(num + 1)
            setToggle(false)
            // selecteOptions.map(op => console.log(op))
        }
    }
    const goBack = () => {
        if(currentIndex === 0){
            setIndex(currentIndex)
            setToggle(true)
        }else{
            setIndex(currentIndex - 1)
            setNum(num - 1)
            setToggleButton(true)
        }
    }

    const currentQuestion = questions[currentIndex]

    var b = 0;
    const onSubmit = () => {
        for(var i=0; i<questions.length; i++){
            b += score[i];
        }
        setRes(b)
        navigateTo(`/result/${b}`);
        // console.log(b);
    }
    var goHome = () =>{
        navigateTo(`/`);
        sessionStorage.clear()
    }
    var clearDialogue = () =>{
        setBackHere(false)
    }
    var showDialogue = () =>{
        setBackHere(true)
    }
    
    return(
        <>
            <Header num = {num} />

            <hr style={
                {width:'500px',
                margin: '0 auto'}}
            /> 
            
            {backHere && <div className="dialogue-box">
                <div>
                <i onClick={clearDialogue} className="fa fa-times"></i>
                <p>Are you sure you want to end quize?</p>
                <small>Your score(s) won't be recorded!</small>
                <button onClick={goHome}>Ok</button>
                </div>
            </div>}

            <div className='question quest-container'>

                
                <h3 className=''>
                    { currentQuestion.title } 
                </h3>

                <div>
                    {currentQuestion.options.map((option, index) => (
                        <div key={index} onClick={e => {
                            addArr(e);
                            handleoptionclick(currentIndex, index)
                        }} className={`option ${currentQuestion.selectedOption === index ? 'active' : ''}`}>
                            {option}
                        </div>
                    ))}
                </div>
            
            {/* </div> */}
           
            { toggleButton && <div className="next-prev">
            { !toggle ? <div className='button' onClick={goBack}><i className="fa icon fa-arrow-left"></i> Prev </div> : '' }
                <div className='button' onClick={goForward}> Next <i className="fa icon fa-arrow-right"></i></div>
            </div> }

            { !toggleButton && <div className='button' onClick={onSubmit}> Submit </div>}
            
            <p className="question-numbers">{ questionNumbers.join(" ") }</p>
            <Footer showDialogue={showDialogue}/>
            
            </div>
        </>
    )
}

export default Question