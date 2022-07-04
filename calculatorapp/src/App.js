import { useState } from 'react';
import './App.scss';

function App() {

  const [calc, setCalc] = useState("");


  const operators = ["+", "-", "*", "/", "=", ","];

  const updateCalc = value => {
    if (
      operators.includes(value) && calc == '' ||
      operators.includes(value) && operators.includes(calc.slice(-1))
    ) {
      return;
    }

    setCalc(calc + value);
  }

  const deleteLast = () => {

    const value = calc.slice(0, -1);
    setCalc(value);
  }
  const deleteAll = () => {

    const value = calc.slice(0, 0);
    setCalc(value);
  }





  return (
    <div className="App">
      <div className='calculator'>

        <div className='display'>
          <span> {calc} </span>
        </div>
        <div className='calculator1'>
          <button onClick={deleteAll}>AC</button>
          <button onClick={deleteLast}>Del</button>
          <button>%</button>
          <button onClick={() => updateCalc('/')}>/</button>

        </div>
        <div className='calculator2'>
          <button onClick={() => updateCalc('7')}>7</button>
          <button onClick={() => updateCalc('8')}>8</button>
          <button onClick={() => updateCalc('9')}>9</button>
          <button onClick={() => updateCalc('*')}>*</button>
        </div>
        <div className='calculator3'>
          <button onClick={() => updateCalc('4')} >4</button>
          <button onClick={() => updateCalc('5')}>5</button>
          <button onClick={() => updateCalc('6')}>6</button>
          <button onClick={() => updateCalc('-')}>-</button>
        </div>
        <div className='calculator4'>
          <button onClick={() => updateCalc('1')}>1</button>
          <button onClick={() => updateCalc('2')}>2</button>
          <button onClick={() => updateCalc('3')}>3</button>
          <button onClick={() => updateCalc('+')} >+</button>
        </div>
        <div className='calculator5'>

          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc(',')}>,</button>
          <button style={{ width: "102px" }} onClick={e => {
            try {
              setCalc(
                String(eval(calc)).length > 3 &&
                  String(eval(calc)).includes(".")
                  ? String(eval(calc).toFixed(4))
                  : String(eval(calc))
              )
            }
            catch (err) {
              console.log(err);
            }

          }} value="=">
            =
          </button>
        </div>

      </div>

    </div>
  );
}

export default App;
