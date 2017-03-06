import React, { Component } from 'react'
export default class Controls extends Component {

  render() {
    return (
      <div className='control-circle'>
        <h1 className='logo'>
          Simon
        </h1>
        <div className='row'>
          <div className='count'>- -</div>
          <div className='start'>Start</div>
        </div>
        <div className='row'>
          <label className='switch'>
            <input type='checkbox' />
            <div className='slider'></div>
          </label>
        </div>
      </div>
    );
  }
}
