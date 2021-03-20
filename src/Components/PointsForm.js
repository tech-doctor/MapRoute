import React, { useState } from 'react';
import TotalDisplay from './TotalDisaplay';
import '../Styles/style.scss';



const PointsForm = () => {
	const [input, setInput] =
	useState(
		{ 
		 start: "",
		 drop: ""
		}
	)


	const handleChange = (event) => {
		const {name, value} = event.target
		setInput({
			...input,
			//to get the value from the event target, we get the name of the target as well.(an essential point for handling multiple input field)
			[name]: value
		});
}

const handleSubmit = (event) => {
	event.preventDefault()
	console.log(input)
}

const handleReset = () => {
	setInput({
		start: "",
    drop: ""
})
}

	return (
		<div>
			  <form onSubmit = {handleSubmit}>
					<div>
					  <label htmlFor = "start">Starting point</label><br/>
				    <input required 
						type = "text" 
						name = "start"
						value = {input.start}
						onChange = {handleChange}
						/>	
					</div><br/>
					<div>
			      <label htmlFor = 'drop'>Drop-of-Point</label><br/>
				    <input required 
						type = "text"
						name = "drop"
						value = {input.drop}
						onChange = {handleChange}
						/>
			    </div>
					<div>
					  <TotalDisplay/>
					</div><br/>
					<div className = "formButtons">
						<button className = "submitButton" type = "submit">Submit</button>
						<button className = "resetButton" type = "button" onClick = {handleReset}>Reset</button>
					</div>	
				</form>	
		</div>
	)
}

export default PointsForm;