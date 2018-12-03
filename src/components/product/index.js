import React, {Component} from 'react';
import './product.scss'

export default class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shopInfor: this.props.data.shopInfor,
      productList: this.props.data.productList,
      checkAll: false,
    }

  }
  handleEdit = (index, num) => {
    let newProductList = JSON.parse(JSON.stringify(this.state.productList))
    newProductList[index].quantity += num
    console.log(newProductList, this.state.productList)
    this.setState((prevState, props) => ({
      productList: newProductList
    }))
    
  }
  handleChange = (event) => {
    const target = event.target
  
  }
  render() {
    return (
      <div className="product-box">
        <div className="product-item">
          <div className="shop-infor">
            <div className="check-box">
              <input className="checkbox" type="checkbox" checked={this.state.shopInfor.checkAll} onChange={this.handleChange.bind(this)} id="radio"/>
              <label className="radio" htmlFor="radio"></label>
            </div>
            <div className="shop-title">
              <i className={`shop-icon ${this.state.shopInfor.type === 'B' ? 'shop_B' : ''} ${this.state.shopInfor.type === 'C' ? 'shop_C' : ''}`}></i>
              <a href={this.state.shopInfor.shopUrl} className="title">
                <p>{this.state.shopInfor.name}</p>
                <i className="iconfont icon-more"></i>
              </a>

            </div>
            <div className="edit">
              <p>编辑</p>
            </div>
          </div>
          <div className="product-group">
            {
              this.state.productList.map((item,index) =>
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
                          <p className='btn num-minus' onClick={this.handleEdit.bind(this, index, -1)}></p>
                          <p className="btn btn-input"><input type="text" defaultValue={item.quantity}/></p>
                          <p className='btn num-add' onClick={this.handleEdit.bind(this, index, 1)}></p>
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