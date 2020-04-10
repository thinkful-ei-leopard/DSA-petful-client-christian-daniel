import React from 'react';
import Animal from './Animal/Animal'

export default class DogsList extends React.Component {
    render() {
        return (
            <div>
                <h2>Dogs</h2>
            <ul>
                {this.props.dogs.map(dog => <Animal key={dog.name} animal={dog}/>)}
            </ul>
            </div>
        )
    
    }
}