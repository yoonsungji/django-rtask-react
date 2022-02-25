import React, {useState} from "react"
import logo from './logo.svg';
import './App.css';

function App() {
  const [highlightedText, setHighlightedText] = useState(null)
  console.log(highlightedText)
  
  function handleMouseUp() {
    setHighlightedText(window.getSelection().toString())
    
  }
  return (
    <div className="App">
      <p onMouseUp={handleMouseUp}>Hello World</p>
    </div>
  );
}

export default App;
