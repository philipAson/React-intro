import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// const Name = (props) => {

//   return (

//     <h2> Jag heter {props.name}</h2>
//   )

// }

const Counter = ({message}) => {
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}



function App() {

  const [message, setMessage] = useState("");
  const [inputvalue, setInputValue] = useState("");

  const handleMessageChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleSetMessage = () => {
    setMessage(inputvalue);
  }

  




  

  return (
    <div>
      <input type="text" placeholder='type message' value={inputvalue} onChange={handleMessageChange} />
      <button onClick={handleSetMessage}> Add to list </button>
      <Counter message={message} />
    </div>
  );
  
}

export default App
