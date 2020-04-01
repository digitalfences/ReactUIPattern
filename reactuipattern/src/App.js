import React, {Component} from 'react';

import Tab from './Tab';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tabs: ["bulbasaur","charmander",'squirtle','pikachu','eevee']
    }
  }
  componentDidMount(){
    this.setState({
      tabs: this.state.tabs.map((tab,i) => {
        return(
          <Tab key={i} title={tab}></Tab>
        )
      })
    })
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          
        </header>
        <div className="tab-box">{this.state.tabs}</div>
      </div>
    );
  }
}

export default App;
