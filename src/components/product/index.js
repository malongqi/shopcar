import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './header.scss'
export default class Product extends Component {
	constructor {
		super(props)
	}
	render () {
		return (
			<div className="product-box">
				<div className="product-item">
					<div className="shop-infor">
						<div className="checkbox">
						</div>
						<div className="shop-title">
							<i className="shop-icon"></i>
							<p className="title"></p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}