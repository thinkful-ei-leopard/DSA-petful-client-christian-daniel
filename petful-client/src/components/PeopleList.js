import React from 'react';
import People from './People'

export default class PeopleList extends React.Component {
    render() {
        return (
            <div className='people-ul'>
            <h3> People in Line </h3>
            <ul>
                {this.props.people.map(person => <People key={person} name={person} />)}
            </ul>
            </div>

        )
    }
}