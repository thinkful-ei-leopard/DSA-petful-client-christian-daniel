import React from 'react'

class Animal extends React.Component {
    render () {
        return (
            <li>
                <h3>Name: {this.props.animal.name}</h3>
                <ul className='animal-info-ul'>
                    <li>Age: {this.props.animal.age}</li>
                    <li>Breed: {this.props.animal.breed}</li>
                    <li>Gender: {this.props.animal.gender}</li>
                    <li>Description: {this.props.animal.description}</li>
                </ul>
                <img src={this.props.animal.imageURL} alt={this.props.animal.name}></img>
                <p>My Story: {this.props.animal.story}</p>
            </li>
        )
    }
}

export default Animal;