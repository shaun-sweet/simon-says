import React, { Component } from 'react'
import './styles/css/stylesheet.css'
import Green from './Green'
import Red from './Red'
import Yellow from './Yellow'
import Blue from './Blue'
import Controls from './Controls'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className='game-container'>
          <div className='inner-wrap'>
            <div className='top'>
              <Green />
              <Red />
            </div>
            <div className='bottom'>
              <Yellow />
              <Blue />
            </div>
            <Controls />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
