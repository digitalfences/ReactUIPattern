import React, { Component } from 'react';
import './Tab.css';

class Tab extends Component{
    constructor(){
        super();
        this.state = {
            title: this.props.title,
            img: '',
            content: ''
        }
    }
    componentDidMount(){
        let url = "https://pokeapi.co/api/v2/pokemon/" + this.state.title;
        fetch(url).then(res=>res.json()
        .then(res=>{
            this.setState({
                img: "",
                content:"" 
            })
        }))
    }
    render(){
        <div className="tab">
            <img src={this.state.img}></img>
            <div className="content">
                <p>{this.props.content}</p>
            </div>   
        </div>
    }
}