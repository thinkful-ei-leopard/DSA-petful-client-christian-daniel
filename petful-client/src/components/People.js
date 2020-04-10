import React from 'react'

export default class People extends React.Component {
    render() {
        return (
            <li>
                <h4> {this.props.name} </h4>
            </li>
        )
    }
}