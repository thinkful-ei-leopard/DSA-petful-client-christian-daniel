import React from 'react'

class Animal extends React.Component {
    render () {
        return (
            <li>
                <h3>{this.props.animal.name}</h3>
                <ul className='animal-info-ul'>
                    <li>{this.props.animal.breed}</li>
                    <li>{this.props.animal.gender}</li>
                    <li>{this.props.animal.description}</li>
                    <li>{this.props.animal.breed}</li>
                </ul>
                <img src={this.props.animal.imageURL} alt={this.props.animal.name}></img>
                <p>{this.props.animal.story}</p>
            </li>
        )
    }
}

export default Animal;