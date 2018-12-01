import React, {Component} from 'react';
import './header.scss'

export default class MHeader extends Component {
  render() {
    return (
      <header className="header-container">
        <div className="header-left">
          <i className="iconfont icon-back"></i>
        </div>
        <div className="header-title">{this.props.title}</div>
        <div className="header-right"></div>
      </header>
    )
  }
}