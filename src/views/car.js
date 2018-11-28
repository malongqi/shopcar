import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './../style/car.scss'
import MHeader from './../components/header/index.js'

class Car extends Component {
	render () {
		return (
			<div className="container">
				<MHeader title="HEADER" icontext="&#xe697;"></MHeader>
			</div>
		)
	}
}

export default Car