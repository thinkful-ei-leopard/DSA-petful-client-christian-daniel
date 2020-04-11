import React from 'react';
import { Link } from 'react-router-dom';

export default class PetsAdopted extends React.Component {
    render() {
        return (
            <div><Link to="/"> Home </Link>
            <header>
                <h1>Pets Adopted</h1>
            </header>
            </div>
        )
    }
}