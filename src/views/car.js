import React, {Component} from 'react';
import './../style/car.scss'
import MHeader from './../components/header/index.js'
import Product from './../components/product/index.js'
import Footbar from './../components/footer/index.js'
import Tabbar from './../components/tabbar/index.js'

class Car extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalNumber: 0,
      totalPrice: 0,
      list: [
        {
          listId: 11111,
          shopInfor: {
            name: '云上生活云上生活云上生活云上生活云上生活云上生活云上生活云上生活云上生活',
            type: 'B',
            shopUrl: 'http://www.baidu.com'
          },
          productList: [
            {
              id: 10001,
              title: '云上生活 长袖半高领休闲套头毛衣2018新款保暖显瘦打底上衣A9592',
              img: 'https://gw.alicdn.com/bao/uploaded/i1/39501878/O1CN011PkAHMzdeJ1zqd0_!!39501878.jpg_200x200q50s150.jpg_.webp',
              price: 190,
              size: 'XL',
              color: '蓝色',
              quantity: 1,
              productUrl: ''
            },
            {
              id: 10002,
              title: '云上生活 长袖半高领休闲套头毛衣2018新款保暖显瘦打底上衣A9592',
              img: 'https://gw.alicdn.com/bao/uploaded/i1/39501878/O1CN011PkAHMzdeJ1zqd0_!!39501878.jpg_200x200q50s150.jpg_.webp',
              price: 190,
              size: 'XL',
              color: '蓝色',
              quantity: 1,
              productUrl: ''
            }
          ]
        },
        {
          listId: 11112,
          shopInfor: {
            name: '云上生',
            type: 'C',
            shopUrl: 'http://www.baidu.com'
          },
          productList: [
            {
              id: 10003,
              title: '云上生活 长袖半高领休闲套头毛衣2018新款保暖显瘦打底上衣A9592',
              img: 'https://gw.alicdn.com/bao/uploaded/i1/39501878/O1CN011PkAHMzdeJ1zqd0_!!39501878.jpg_200x200q50s150.jpg_.webp',
              price: 190,
              size: 'XL',
              color: '蓝色',
              quantity: 1,
              productUrl: ''
            },
            {
              id: 10004,
              title: '云上生活 长袖半高领休闲套头毛衣2018新款保暖显瘦打底上衣A9592',
              img: 'https://gw.alicdn.com/bao/uploaded/i1/39501878/O1CN011PkAHMzdeJ1zqd0_!!39501878.jpg_200x200q50s150.jpg_.webp',
              price: 190,
              size: 'XL',
              color: '蓝色',
              quantity: 1,
              productUrl: ''
            },
            {
              id: 10006,
              title: '云上生活 长袖半高领休闲套头毛衣2018新款保暖显瘦打底上衣A9592',
              img: 'https://gw.alicdn.com/bao/uploaded/i1/39501878/O1CN011PkAHMzdeJ1zqd0_!!39501878.jpg_200x200q50s150.jpg_.webp',
              price: 190,
              size: 'XL',
              color: '蓝色',
              quantity: 1,
              productUrl: ''
            },
            {
              id: 10008,
              title: '云上生活 长袖半高领休闲套头毛衣2018新款保暖显瘦打底上衣A9592',
              img: 'https://gw.alicdn.com/bao/uploaded/i1/39501878/O1CN011PkAHMzdeJ1zqd0_!!39501878.jpg_200x200q50s150.jpg_.webp',
              price: 190,
              size: 'XL',
              color: '蓝色',
              quantity: 1,
              productUrl: ''
            }
          ]
        }
      ],
      tabbarList: [
        {
          icon: 'icon-home',
          title: '首页'
        },
        {
          icon: 'icon-shop_car',
          title: '购物车'
        },
        {
          icon: 'icon-i-order',
          title: '订单列表'
        },
        {
          icon: 'icon-my',
          title: '我的淘宝'
        }
      ]
    }
  }

  render() {
    return (
      <div className="container">
        <MHeader title="HEADER" icontext="&#xe697;"></MHeader>
        <div className="main">
          {
            this.state.list.map(item => (
                <Product data={item} key={item.listId}></Product>
              )
            )
          }
        </div>
        <Footbar>
          <div className="foot-sum">
            <div className="check-box">
              <input className="checkbox" type="checkbox" id="radio"/>
              <label className="radio" htmlFor="radio"></label>
            </div>
            <div>全选</div>
            <div className="total">
              <p><span>合计：</span> <span className="price">{this.state.totalPrice}</span></p>
            </div>
            <div className="btn"><p><span>结算</span>({this.state.totalNumber})</p></div>
          </div>
          <Tabbar list={this.state.tabbarList}></Tabbar>
        </Footbar>
      </div>
    )
  }
}

export default Car