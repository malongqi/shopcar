import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.less'
export default class MHeader extends Component {
	render () {
		return (
			<header className="header-container">
				<div className="header-left">

				</div>
				<div className="header-title">{this.props.title}</div>
				<div className="header-right"></div>
			</header>
		)
	}
}