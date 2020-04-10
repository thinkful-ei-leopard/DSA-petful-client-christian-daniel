import React from 'react';
import Animal from './Animal/Animal'

export default class CatsList extends React.Component {
    render() {
        return (
            <div>
                <h2>Cats</h2>
            <ul>
                {this.props.cats.map(cat => <Animal key={cat.name} animal={cat} />)}
            </ul>
            </div>
        )
    }
}