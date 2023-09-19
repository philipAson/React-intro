import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// const Name = (props) => {

//   return (

//     <h2> Jag heter {props.name}</h2>
//   )

// }
const ShoppingList = ({ listItem }) => {
  return (
    <div>
      {listItem.map((item, index) => (
        <div key={index}>
          <li>{item}</li>
        </div>
      ))}
    </div>
  );
}



function App() {
  const [inputValue, setInputValue] = useState("");
  const [itemList, setItemList] = useState([]);

  const handleItemChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleSetItem = () => {
    setItemList([...itemList, inputValue]);
    setInputValue(""); // Clear the input field after adding an item
  }

  return (
    <div>
      <input type="text" placeholder='type message' value={inputValue} onChange={handleItemChange} />
      <button onClick={handleSetItem}>Add to list</button>
      <ShoppingList listItem={itemList}/>
    </div>
  );
}

export default App;
