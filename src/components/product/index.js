import React, { Component } from 'react';
import './product.scss'
export default class Product extends Component {
	constructor (props){
		super(props)
		this.state = {
			ProductData: this.props.data
		}
		
	}
	render () {
		return (
			<div className="product-box">
				<div className="product-item">
					<div className="shop-infor">
						<div className="check-box">
							<input className="checkbox" type="checkbox" id="radio"/>
							<label className="radio" htmlFor="radio"></label>
						</div>
						<div className="shop-title">
							<i className={`shop-icon ${this.state.ProductData.shopInfor.type === 'B'? 'shop_B' : ''} ${this.state.ProductData.shopInfor.type === 'C'? 'shop_C' : ''}`}></i>
							<a href={this.state.ProductData.shopInfor.shopUrl} className="title">
								<p>{this.state.ProductData.shopInfor.name}</p>
								<i className="iconfont icon-more"></i>
							</a>
							
						</div>
						<div className="edit">
							<p>编辑</p>
						</div>
					</div>
					<div className="product-group">
						{
							this.state.ProductData.productList.map(item =>
								(
									<div className="group-list" key={item.id}>
										<div className="check-box">
											<input className="checkbox" type="checkbox" id={`radio+${item.id}`}/>
											<label className="radio" htmlFor={`radio+${item.id}`}></label>
										</div>
										<div className="list-detail">
											<div className="item-img">
												<a href={item.productUrl}><img src={item.img} alt=""/></a>
											</div>
										</div>
										<div className="list-infor">
											<a className="title" href={item.productUrl}>
												<h3>{item.title}</h3>
											</a>
											<div className="select-type">
												<p>{item.color};{item.size}</p>
												<i className="iconfont icon-moreunfold"></i>
											</div>
											<div className="list-bottom">
												<div className="item-price"><span>{item.price}</span></div>
												<div className="inputnum">
													<p className='btn num-minus'></p>
													<p className="btn btn-input"><input type="text" defaultValue={item.quantity}/></p>
													<p className='btn num-add'></p>
												</div>
											</div>
										</div>
									</div>
								)
							)
						}	
					</div>
				</div>
			</div>
		)
	}
}