import React, { Component } from 'react';
import './footer.scss'
export default class Footbar extends Component{
    render(){
        return (
            <div className='fixed-footer'>
                {this.props.children}
            </div>
        );
    }
}