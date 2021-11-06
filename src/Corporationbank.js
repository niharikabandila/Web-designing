import React, { Component } from 'react'

export default class  extends Component {
    render(props) {
        return (
            <div>
                <h1>Corporationbank is located at {this.props.location}  {this.props.data.name}</h1>
            </div>
        )
    }
}
