import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './../style/car.scss'
import MHeader from './../components/header/index.js'
import Product from './../components/product/index.js'

class Car extends Component {
	 constructor(props){
        super(props)
		this.state = {
			list: [
				{
					shopInfor:{
						name: '云上生活云上生活云上生活云上生活云上生活云上生活云上生活云上生活云上生活',
						type: 'B'
					},
					productList: [
						{
							title: '云上生活 长袖半高领休闲套头毛衣2018新款保暖显瘦打底上衣A9592',
							img: 'https://gw.alicdn.com/bao/uploaded/i1/39501878/O1CN011PkAHMzdeJ1zqd0_!!39501878.jpg_200x200q50s150.jpg_.webp',
							price: 190,
							size:'XL',
							color: '蓝色',
							quantity: 1
						},
						{
							title: '云上生活 长袖半高领休闲套头毛衣2018新款保暖显瘦打底上衣A9592',
							img: 'https://gw.alicdn.com/bao/uploaded/i1/39501878/O1CN011PkAHMzdeJ1zqd0_!!39501878.jpg_200x200q50s150.jpg_.webp',
							price: 190,
							size:'XL',
							color: '蓝色',
							quantity: 1
						}
					]
				},
				{
					shopInfor:{
						name: '云上生',
						type: 'C'
					},
					productList: [
						{
							title: '云上生活 长袖半高领休闲套头毛衣2018新款保暖显瘦打底上衣A9592',
							img: 'https://gw.alicdn.com/bao/uploaded/i1/39501878/O1CN011PkAHMzdeJ1zqd0_!!39501878.jpg_200x200q50s150.jpg_.webp',
							price: 190,
							size:'XL',
							color: '蓝色',
							quantity: 1
						},
						{
							title: '云上生活 长袖半高领休闲套头毛衣2018新款保暖显瘦打底上衣A9592',
							img: 'https://gw.alicdn.com/bao/uploaded/i1/39501878/O1CN011PkAHMzdeJ1zqd0_!!39501878.jpg_200x200q50s150.jpg_.webp',
							price: 190,
							size:'XL',
							color: '蓝色',
							quantity: 1
						}
					]
				}
			]
		}
	}
	
	render () {
		return (
			<div className="container">
				<MHeader title="HEADER" icontext="&#xe697;"></MHeader>
				<div className="mian">
				{this.state.list.map(item => (
						<Product data={item}></Product>
						)
					)
				}
				
				</div>
			</div>
		)
	}
}

export default Car