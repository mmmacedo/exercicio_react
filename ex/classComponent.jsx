import React, { Component } from 'react'

export default class ClassComponent extends Component {
    render() { //método obrigatorio
        return (
            <h1>{ this.props.value }</h1>
        )
    }
}