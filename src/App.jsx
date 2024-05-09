import { useState } from 'react'
import './App.css'

function Calculator(){
  const [displayValue, setDisplayValue] = useState(''); // Sets display
  const [firstOperand, setFirstOperand] = useState(''); // Sets first operand
  const [operator, setOperator] = useState(''); // Sets operator

  const handleDigitClick = (digit) =>{
    // set display value to the digit, keep the digit there until there is a click on an operator or the equals sign
    setDisplayValue(displayValue + digit)
  }

  const handleOperatorClick = (operator) => {
    if (displayValue !== '') { // Checks if a first digit was selected
      // Set first operand to display value (which is the digit selected)
      setFirstOperand(displayValue);
      // Set the operator
      setOperator(operator);
      // Clear the display value
      setDisplayValue('');
    }
  }

  const handleEqualsClick = () =>{
    // Call the calculate function to perform the computation
    const result = calculate(parseFloat(firstOperand), parseFloat(displayValue), operator);
    // Display the result
    setDisplayValue(result)
    // Reset the other states
  }

  //Function for computations
  const calculate = (num1, num2, operator) =>{
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        return '';
    }
  }

  return(
    <div className='calculator'>
      <div className='display>'>{displayValue}</div>
      <div className="buttons">
        {[...Array(10).keys()].map((num) => (
          <button key={num} onClick={() => handleDigitClick(num)}>
            {num}
          </button>
        ))}
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
        <button onClick={handleEqualsClick}>=</button>
      </div>
    </div>
  )

}

function App() {
  

  return (
    <div className="App">
    <Calculator />
    </div>
  )
}

export default App


// Create a new React application caclulator-project.
// Create a functional component called Calculator.
// Inside the Calculator component, use the useState hook to define a state object with the following properties:
// displayValue initialized to an empty string.
// a <div> element to show the current value of displayValue.
// Create buttons for digits (0-9) and basic arithmetic operations (+, -, *, /).
// Implement functionality so that when a digit button is clicked, the corresponding value is appended to the displayValue.
// Implement functionality so that when an arithmetic operation button (+, -, *, /) is clicked, the current value of displayValue is used as the first operand, and the clicked operator is stored.
// Implement functionality so that when the "=" button is clicked, the expression is evaluated based on the stored first operand, operator, and the current value of displayValue, and the result is displayed in the displayValue.
// 9. try to break it down as much as you can into different components (edited)
// extra:
// don't create number buttons manually one by one