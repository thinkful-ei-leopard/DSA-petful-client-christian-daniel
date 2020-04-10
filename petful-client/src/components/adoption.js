import React from 'react';
import { Link } from 'react-router-dom';
import config from '../config';

export default class Adoption extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dog: {},
            cat: {},
            adoptedDogs: [],
            adoptedCats: []
        }

    }
    fetchPETS = () => {
        return(
        fetch(`${config.API_ENDPOINT}/pets`)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
        })
        )
    }
    render() {
        return(
            <heading>
                <h1>Pets to Adopt</h1>
            </heading>
        )
    }
}