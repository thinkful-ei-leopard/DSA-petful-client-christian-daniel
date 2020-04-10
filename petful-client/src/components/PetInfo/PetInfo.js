import React from 'react';
import { Link } from 'react-router-dom';
import config from '../../config';
import DogsList from './AnimalLists/DogsList'
import CatsList from './AnimalLists/CatsList'

export default class PetInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dogs: [],
            cats: []
        }

        this.componentDidMount = () => {
            this.fetchPETS()
                .then(pets => {
                    this.setState({
                        dogs: pets.dogs,
                        cats: pets.cats
                    })
                })
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

    onAdoptLine = () => {
        const { history } = this.props;
        history.push("/PetsInLine");
      };
    render() {
        return(
            <div className='petInfoDiv'>
            <header>
                <h1>Pets to Adopt</h1>
            </header>
            <main>
                <DogsList dogs={this.state.dogs}/>
                <CatsList cats={this.state.cats}/>
                <button type="click" className="adoption-button" onClick={this.onAdoptLine}>Start Adopting</button>
            </main>
            </div>
        )
    }
}