import React, { useState } from 'react'

function Calculator() {
	const [input, setInput] = useState('')
	const [result, setResult] = useState('')

	const handleInput = value => {
		setInput(input + value)
	}

	const calculateResult = () => {
		try {
			setResult(eval(input))
		} catch (error) {
			setResult('Error')
		}
	}

	const clearInput = () => {
		setInput('')
		setResult('')
	}

	return (
		<div>
			<input
				type='text'
				value={input}
				onChange={e => setInput(e.target.value)}
			/>
			<br />
			<button onClick={() => handleInput('1')}>1</button>
			<button onClick={() => handleInput('2')}>2</button>
			<button onClick={() => handleInput('3')}>3</button>
			<button onClick={() => handleInput('+')}>+</button>
			<br />
			<button onClick={() => handleInput('4')}>4</button>
			<button onClick={() => handleInput('5')}>5</button>
			<button onClick={() => handleInput('6')}>6</button>
			<button onClick={() => handleInput('-')}>-</button>
			<br />
			<button onClick={() => handleInput('7')}>7</button>
			<button onClick={() => handleInput('8')}>8</button>
			<button onClick={() => handleInput('9')}>9</button>
			<button onClick={() => handleInput('*')}>*</button>
			<br />
			<button onClick={() => handleInput('0')}>0</button>
			<button onClick={() => handleInput('.')}>.</button>
			<button onClick={() => calculateResult()}>=</button>
			<button onClick={() => handleInput('/')}>/</button>
			<br />
			<button onClick={() => clearInput()}>Clear</button>
			<br />
			<div>Result: {result}</div>
		</div>
	)
}

export default Calculator
