import React, { Component } from 'react'

export default class Data extends Component {



    constructor(props){
        super(props)
        this.state={
           name:"niha"
        }
    }
    render() {
        setTimeout(() => {
            this.setState({name:"niharika"})
        }, 5000);
        return (
            <div>
              <h1>{this.state.name}</h1>  
            </div>
        )
    }
}
