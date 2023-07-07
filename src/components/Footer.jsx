import './css/footer.css'
const Footer = ({showDialogue}) => {
  const goHome = () =>{
    
  }
    return (
        <div className='footer'>
          <p onClick={showDialogue}>End Quize</p>
        </div>
    )
}

export default Footer