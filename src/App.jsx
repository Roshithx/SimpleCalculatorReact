import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
 
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  

  return (
    <div className="App container">
      <div className="calculator">
        <div className="display p-3 mb-3 bg-light">
          <h2>{input}</h2>
        </div>
        <div className="buttons p-3 ">
          <button className="btn btn-danger w-100 mb-2" onClick={()=>setInput('')} >C</button>
          <div className="row mb-2 d-flex gap-3 mt-2">
            <button className="btn btn-light col" onClick={() => handleButtonClick('7')}>7</button>
            <button className="btn btn-light col" onClick={() => handleButtonClick('8')}>8</button>
            <button className="btn btn-light col" onClick={() => handleButtonClick('9')}>9</button>
            <button className="btn btn-warning col" onClick={() => handleButtonClick('/')}>/</button>
          </div>
          <div className="row mb-2 d-flex gap-3">
            <button className="btn btn-light col" onClick={() => handleButtonClick('4')}>4</button>
            <button className="btn btn-light col" onClick={() => handleButtonClick('5')}>5</button>
            <button className="btn btn-light col" onClick={() => handleButtonClick('6')}>6</button>
            <button className="btn btn-warning col" onClick={() => handleButtonClick('*')}>*</button>
          </div>
          <div className="row mb-2 d-flex gap-3">
            <button className="btn btn-light col" onClick={() => handleButtonClick('1')}>1</button>
            <button className="btn btn-light col" onClick={() => handleButtonClick('2')}>2</button>
            <button className="btn btn-light col" onClick={() => handleButtonClick('3')}>3</button>
            <button className="btn btn-warning col" onClick={() => handleButtonClick('-')}>-</button>
          </div>
          <div className="row mb-2 d-flex gap-3">
            <button className="btn btn-light col" onClick={() => handleButtonClick('0')}>0</button>
            <button className="btn btn-light col" onClick={() => handleButtonClick('.')}>.</button>
            <button className="btn btn-success col" onClick={() => setInput(eval(input))} >=</button>
            <button className="btn btn-warning col" onClick={() => handleButtonClick('+')}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
