import React, { Component } from 'react';
import './Tab.css';

class Tab extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title,
            img: '',
            content: ''
        }
    }
    componentDidMount(){
        let url = "https://pokeapi.co/api/v2/pokemon/" + this.state.title;
        fetch(url).then(res=>res.json())
        .then(res=>{
            this.setState({
                img: res.sprites.front_default, 
            });
            fetch(res.species.url).then(flavor => flavor.json())
                .then(flavor => {
                    console.log(flavor);
                    this.setState({
                        content: (flavor.flavor_text_entries[1].flavor_text
                                +" " +flavor.flavor_text_entries[9].flavor_text
                                +" " +flavor.flavor_text_entries[17].flavor_text
                                +" " +flavor.flavor_text_entries[25].flavor_text
                                +" " +flavor.flavor_text_entries[33].flavor_text
                                +" " +flavor.flavor_text_entries[41].flavor_text)
                    })
                }) 
        })
    }
    render(){
        return(
        <div className="tab">
            <img src={this.state.img} alt=""></img>
            <div className="content">
                <p>{this.state.content}</p>
            </div>   
        </div>)
    }
}

export default Tab