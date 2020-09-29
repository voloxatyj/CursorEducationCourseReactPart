import React from 'react'
import '../layouts/timer.scss'
import { CountdownBox } from './CountDownBox'


export const Timer = ({ hours, minutes, seconds }) => {

	return (
		<>
			<h1 className="mt-3 p-3"><i className="fas fa-stopwatch-20 mr-1"></i>Your time until...</h1>
			<div className="countdown">
				<CountdownBox
					left={hours}
					divideBy={24}
					label="hours"
				/>
				<CountdownBox
					left={minutes}
					divideBy={60}
					label="minutes"
				/>
				<CountdownBox
					left={seconds}
					divideBy={60}
					label="seconds"
				/>
			</div>
		</>
	)
}