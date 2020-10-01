import React, { useState, useEffect } from 'react'
import { Timer } from './Timer'
import styled from 'styled-components'

/* 144200000 */
let interval;
let i = 1;

export default function InfiniteTimer ({ time }) {
	const steps = [1000, 2000, 10000, 100]
	const [completed, setCompleted] = useState(Boolean);
	const [timer, setTimer] = useState(time);
	const [step, setStep] = useState(steps[0])
	const hours = Math.floor((timer / (1000 * 60 * 60)) % 24)
	const minutes = Math.floor((timer / (1000 * 60)) % 60)
	const seconds = Math.floor((timer / 1000) % 60)

	const hoursLeftOutput = hours < 10 ? '0' + hours : hours;
	const minutesLeftOutput = minutes < 10 ? '0' + minutes : minutes;
	const secondsLeftOutput = seconds < 10 ? '0' + seconds : seconds;
	
	const [timesLeft, setTimesLeft] = useState({
		hours: hours > 0 ? hoursLeftOutput : '00',
		minutes: minutes > 0 ? minutesLeftOutput : '00',
		seconds: seconds > 0 ? secondsLeftOutput : '00'
	})

	const changeSteps = () => {
		setStep(steps[i])
		if(i === steps.length - 1) {
			i=0
		} else {
			i++
		} 
	}
	
	useEffect (() => {
		if(completed) {
			clearInterval(interval)
		}
	}, [completed]) 
	
	useEffect(() => {
		if(!completed){
			interval = setInterval(() => {
				setTimer(timer-1000) 
				if(timer > 0) {
					setTimesLeft({
						hours: hoursLeftOutput,
						minutes: minutesLeftOutput,
						seconds: secondsLeftOutput
					});
				} else {
					setTimesLeft({
						hours: '00',
						minutes: '00',
						seconds: '00'
					});
					setTimer(time)
				}
			}, step)
		}
		return () => {
			clearInterval(interval);
		}
	}, [completed, step, timer, time, hoursLeftOutput, minutesLeftOutput, secondsLeftOutput, hours, minutes, seconds])

	const onTimeStart = () => {
		setCompleted(true)
		if(completed) {
			console.log("Таймер запущено!")
			clearInterval(interval)
			setCompleted(false)
		}
	} 
	const	onTimePause = () => {
		console.log("Таймер на паузі!")
		clearInterval(interval)
		setCompleted(false)
	}
	const onTick = () => {
		console.log(`Залишилось часу:${hours} : ${minutes} : ${seconds}`)
	}

	return(
		<Container>
		<div className="container mt-5 p-5">
			<form className="mt-5 d-grid">
				<div className="form-column">
					<div className="col-auto">
						<label className="sr-only" htmlFor="inlineFormInput">Name</label>
						<input onChange={event => setTimer(event.target.value)} 
							type="number" className="form-control mb-2" id="inlineFormInput" placeholder="Time in ms" />
					</div>
						<div className="btn-group" role="group" aria-label="Basic example">
							<button type="button" className="btn btn-success" onClick={() => onTimeStart()}>Start</button>
							<button type="button" className="btn btn-danger" onClick={() => onTimePause()}>Pause</button>
							<button type="button" className="btn btn-warning" onClick={() => changeSteps()}>Step</button>
							<button type="button" className="btn btn-primary" onClick={() => onTick()}><i className="fas fa-info-circle"></i></button>
						</div>
						{step !== undefined && <span className="p-3"><strong>{step}ms</strong></span>}
				</div>
			</form>
			<Timer 
				hours={timesLeft.hours} 
				minutes={timesLeft.minutes} 
				seconds={timesLeft.seconds} 
				step={10000} autostart />
		</div>
		</Container>
	)

}

const Container = styled.div`
.form-column {
	display: grid;
	justify-items: center;
}

`