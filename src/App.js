import './App.css'
import React, { useState } from 'react'
import './Calculator.js'
import Currency from './currency.jsx'

//
function App() {
	const [inputValue, setInputValue] = useState('')
	const [inputValue2, setInputValue2] = useState('')
	const [inputValue3, setInputValue3] = useState('')
	const [result, setResult] = useState('')
	const [result2, setResult2] = useState('')

	const handleChange3 = event => {
		const inputValueAsNumber = parseFloat(inputValue)
		const inputValueAsNumber2 = parseFloat(inputValue2)
		const inputValueAsNumber3 = parseFloat(event.target.value)
		const a = 100
		const resultValue =
			((inputValueAsNumber3 / a) * inputValueAsNumber) / inputValueAsNumber2
		const resultValue2 = inputValueAsNumber / inputValueAsNumber2 + resultValue
		console.log(inputValue, inputValue2, resultValue)

		setInputValue3(event.target.value)
		setResult(resultValue.toFixed(2))
		setResult2(resultValue2.toFixed(2))
	}
	const handleChange2 = event => {
		setInputValue2(event.target.value)
	}

	const handleChange = event => {
		setInputValue(event.target.value)
	}

	const operations = {
		five: (bill, numberOfPeople) => (bill * 0.05) / numberOfPeople,
		ten: (bill, numberOfPeople) => (bill * 0.1) / numberOfPeople,
		fifteen: (bill, numberOfPeople) => (bill * 0.15) / numberOfPeople,
		twentyfive: (bill, numberOfPeople) => (bill * 0.25) / numberOfPeople,
		fifty: (bill, numberOfPeople) => (bill * 0.5) / numberOfPeople,
	}
	const handleSubmit = operation => {
		const inputValueAsNumber = parseFloat(inputValue)
		const inputValueAsNumber2 = parseFloat(inputValue2)
		const operationFunction = operations[operation]

		const resultValue = isNaN(inputValue)
			? 0
			: operationFunction(inputValue, isNaN(inputValue2) ? 0 : inputValue2)
		const resultValue2 = inputValueAsNumber / inputValueAsNumber2 + resultValue
		setResult2(resultValue2.toFixed(2))
		setResult(resultValue.toFixed(2))
	}
	const resetSubmit = event => {
		event.preventDefault()
		setResult2('')
		setResult('')
		setInputValue('')
		setInputValue2('')
		setInputValue3('')
	}
	return (
		<div className='App w-full flex m-0 p-0 justify-center items-center h-screen bg-cyan-100 '>
			<form className='bg-white h-auto rounded-2xl items-center justify-between  flex w-auto p-7'>
				<div className=' w-96 mr-7'>
					<p className='text-left font-play text-sm text-teal-800 font-semibold'>
						Bill
					</p>
					<div className=' relative '>
						<div className='absolute inset-y-0 start-0 flex items-center ps-2 pt-2'>
							<Currency />
						</div>

						<input
							type='text'
							name='price'
							id='price'
							value={inputValue}
							onChange={handleChange}
							className=' rounded-md  py-1.5 w-full pr-10 mt-2  text-cyan-700  placeholder:text-gray-400  text-right bg-gray-200 font-bold font-play '
							placeholder='0.00'
						/>
					</div>
					<p className='text-left mt-8 font-play text-sm text-teal-800 font-semibold'>
						Select tip %
					</p>
					<div className='grid grid-cols-3 gap-3 text-left mt-3 '>
						<div
							onClick={() => handleSubmit('five')}
							className='bg-teal-800 rounded-md text-center text-white p-2 text-xl hover:bg-teal-600 font-play hover:text-black '
						>
							5%
						</div>
						<div
							onClick={() => handleSubmit('ten')}
							className='bg-teal-800 rounded-md text-center text-white p-2 text-xl hover:bg-teal-600 font-play hover:text-black '
						>
							10%
						</div>
						<div
							onClick={() => handleSubmit('fifteen')}
							className='bg-teal-800 rounded-md text-center text-white p-2 text-xl hover:bg-teal-600 font-play hover:text-black '
						>
							15%
						</div>
						<div
							onClick={() => handleSubmit('twentyfive')}
							className='bg-teal-800 rounded-md text-center text-white p-2 text-xl hover:bg-teal-600 font-play hover:text-black '
						>
							25%
						</div>
						<div
							onClick={() => handleSubmit('fifty')}
							className='bg-teal-800 rounded-md text-center text-white p-2 text-xl hover:bg-teal-600 font-play hover:text-black '
						>
							50%
						</div>

						<input
							placeholder='Custom'
							value={inputValue3}
							onChange={handleChange3}
							className='bg-gray-200 text-cyan-700 font-semibold rounded-md text-center p-2 text-xl   font-play hover:text-black '
						/>
					</div>
					<p className='text-left mt-8 font-play text-sm text-teal-800 font-semibold '>
						Number of People
					</p>
					<div className='relative'>
						<div className='absolute inset-y-0 start-0 flex items-center ps-2 pt-2'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='transparent'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='gray'
								class='w-6 h-6'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
								/>
							</svg>
						</div>
						<input
							type='text'
							name='price'
							id='price'
							value={inputValue2}
							onChange={handleChange2}
							className=' rounded-md  py-1.5 w-full pr-10 mt-2 text-cyan-700  placeholder:text-gray-400  text-right bg-gray-200 font-bold font-play '
							placeholder='0'
						/>
					</div>
				</div>

				<div className='bg-teal-900 w-96 p-6 h-full rounded-xl '>
					<div className='text-white justify-between flex mb-6 mt-5'>
						<div>
							<p className='font-play '>Tip Amount</p>
							<p className='font-play text-left text-gray-400 text-sm'>
								/ person
							</p>
						</div>

						<p className='text-4xl text-teal-500 font-play font-bold '>
							${result}
						</p>
					</div>
					<div className='text-white justify-between flex  mb-36'>
						<div>
							<p className='font-play '>Total</p>
							<p className='font-play text-left text-gray-400 text-sm'>
								/ person
							</p>
						</div>

						<p className='text-4xl text-teal-500 font-play font-bold '>
							${result2}
						</p>
					</div>
					<div className='mx-1 p-2 bg-teal-500 rounded-lg  '>
						<button
							onClick={resetSubmit}
							className='text-slate-700 font-play font-bold '
						>
							RESET
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default App
