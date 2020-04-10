import React, {Component} from 'react';

import Tab from './Tab';
import './App.css';

class App extends Component {
  constructor(){
    super();
    let basePokemon=["bulbasaur","charmander",'squirtle','pikachu','eevee']
    this.state = {
      buttons: basePokemon.slice(),
      display: basePokemon.slice(),
      tabs: basePokemon.slice()
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
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
  searchHandler(event){
    let query = event.target.value.toLowerCase();
    let target;
    let options = this.state.tabs.slice()
    let filterTabs = options.filter(f =>{
      target = f.props.title.substring(0,query.length).toLowerCase()
      query = query.substring(0,target.length);
      return query === target
    })
    this.setState({
      buttons: filterTabs.map((button,i)=> {
        return(
          <button key={i} onClick={this.clickHandler} name={button.props.title}>{button}</button>
        )
      }),
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
      }),
      display: <Tab title = "bulbasaur"></Tab>
    })
    
  }
  render(){
    return (
      <div className="App">
        <header className="App-header"><h1>Pokemon!</h1>
          <form className="pokeForm" onChange={this.searchHandler}>
            <input type="text"></input>
            <input type="submit"></input>
            </form>
          
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
