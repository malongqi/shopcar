import React, {Component} from 'react';
import './tabbar.scss'

export default class Tabbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabbarList: this.props.list
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="tabbar">
          {
            this.state.tabbarList.map((item, index) => (
              <span className="tab-item" key={item.title + index}>
								<i className={`tabbar-icon iconfont ${item.icon ? item.icon : ''}`}></i>
								<p className="text">{item.title}</p>
							</span>
            ))
          }
        </div>
      </div>
    )
  }
}