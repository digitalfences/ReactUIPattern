import React, {Component} from 'react';

import Tab from './Tab';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      buttons: ["bulbasaur","charmander","squirtle","pikachu", "eevee"],
      display: [],
      tabs: ["bulbasaur","charmander",'squirtle','pikachu','eevee']
    }
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(event){
    let button = event.target;
    let target = this.state.tabs.filter(tab => {
      return (button.innerText===tab.props.title) 
    })
    this.setState({
      display: target[0]
    })

  }
  componentDidMount(){
    this.setState({
      tabs: this.state.tabs.map((tab,i) => {
        return(
          <Tab key={i} title={tab}></Tab>
        )
      }),
      buttons: this.state.buttons.map((button,i)=> {
        return(
          <button key={i} onClick={this.clickHandler} name={button}>{button}</button>
        )
      })
    })
  }
  render(){
    return (
      <div className="App">
        <header className="App-header"><h1>Pokemon!</h1>
          <div className="buttonBox">
            {this.state.buttons}
          </div>
        </header>
        <div className="tab-box">{this.state.display}</div>
      </div>
    );
  }
}

export default App;
