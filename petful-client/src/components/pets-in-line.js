import React from 'react';
import { Link } from 'react-router-dom';
import config from '../config'
import Animal from './PetInfo/AnimalLists/Animal/Animal'
import PeopleList from './PeopleList'

export default class Pets_In_Line extends React.Component {

    state = {
        currentDog: {},
        currentCat: {},
        currQueue: [],
        currUser: '',
        interval: '',
        enqueueInterval: '',
        peopleAfter: [
            'Jim Reynor',
            'Sarah Kerrigan',
            'Tychus Findlay',
            'Valerian Mengsk',
            'Alexei Stukov'
        ],
        hidden: true,
    }


    componentDidMount = () => {
        this.fetchNextPets()
        .then(pets => {
            this.setState({
                currentDog: pets[1],
                currentCat: pets[0]
             })
        })
        this.fetchPeopleInQueue()
        .then(peoples => {
            this.setState({
                currQueue: peoples
             })
    })
    
}

    fetchPeopleInQueue = () => {
        return (
            fetch(`${config.API_ENDPOINT}/people`)
            .then(res => {
                return res.json()
            })
        )
    }

    fetchNextPets = () => {
        return (
            fetch(`${config.API_ENDPOINT}/pets/next`)
            .then(res => {
                return res.json()
            })
        )
    }

    addUserToQueue = (e) => {
        let name = e.target.name.value
        let person = JSON.stringify({
            name: name
        })
        return (
            fetch(`${config.API_ENDPOINT}/people`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: person
            })
            .then(res => {
                return res.json()
            })
            .then(person => {
                this.setState({currQueue: [...this.state.currQueue, person],
                currUser: person})
            })
            .then(this.fetchPeopleInQueue)
        )
    }

    enqueuePerson = (personName) => {
        let name = personName;
        let person = JSON.stringify({
            name: name
        })
        return (
            fetch(`${config.API_ENDPOINT}/people`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: person
            })
            .then(res => {
                return res.json()
            })
            .then(person => {
                this.setState({currQueue: [...this.state.currQueue, person],
                currUser: person})
            })
            .then(this.fetchPeopleInQueue)
        )
    }

    dequeuePerson = () => {
        return (
            fetch(`${config.API_ENDPOINT}/people`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                this.fetchPeopleInQueue()
                .then(people => {
                    this.setState({
                        currQueue: people
                     })
                })
            })
        )
    }

    deleteCat = () => {
        return (
            fetch(`${config.API_ENDPOINT}/pets/cats`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                this.fetchNextPets()
                .then(pets => {
                    this.setState({
                        currentDog: pets[1],
                        currentCat: pets[0]
                     })
                    
                })
            })
        )
    }

    deleteDog = () => {
        return (
            fetch(`${config.API_ENDPOINT}/pets/dogs`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                this.fetchNextPets()
                .then(pets => {
                    this.setState({
                        currentDog: pets[1],
                        currentCat: pets[0]
                     })
                })
            })
        )
    }

    enqueuePeopleAfter = () => {
        if (this.state.peopleAfter.length <= 1) {
            clearInterval(this.state.enqueueInterval)
        }
        this.enqueuePerson(this.state.peopleAfter[0]);
            let arr = this.state.peopleAfter;
            arr.shift();
            this.setState({
                peopleAfter: arr,
            })
    }

    dequeuePersonAndPet = () => {
        if(this.state.currQueue[1] == this.state.currUser) {
            clearInterval(this.state.interval)
            let enqueueInterval = setInterval(this.enqueuePeopleAfter, 2000);
            this.setState({
                enqueueInterval: enqueueInterval,
                hidden: false,
                });
        }
        let num = Math.random() * 100;
        if (num < 50) {
            this.deleteDog()
            this.dequeuePerson()
        }
        else {
            this.deleteCat()
            this.dequeuePerson()
        }

    }

    dequeueTimer = () => {
        let interval = setInterval(this.dequeuePersonAndPet, 2000);
        this.setState({interval: interval})
    }


    render() {
        if (this.state.hidden) {
            return(
                <div className='petNext'>
                    <h2> 
                        <Link to="/"> Home </Link>
                    </h2>
                    <header>
                        <h1> Adopt a Pet </h1>
                        <Link to="/PetsAdopted"> Pets Adopted </Link>
                    </header>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        this.addUserToQueue(e)
                        this.dequeueTimer()}}>
                        <label htmlFor='name'> Add yourself to queue: </label>
                            <input type="text" name="name" />
                            <input type="submit" />
                    </form>
                    <main>
                        <PeopleList key={this.state.currQueue} people={this.state.currQueue} />
                        <ul>
                        <Animal key={this.state.currentDog.name} animal={this.state.currentDog}/>
                        <button type ='delete' onClick={this.deleteDog} className='hidden'> Adopt this Dog! </button>
                        <Animal key={this.state.currentCat.name} animal={this.state.currentCat}/>
                        <button type ='delete' onClick={this.deleteCat} className='hidden'> Adopt this Cat! </button>
                        </ul>
                    </main>
                </div>
        )}
        return(
            <div className='petNext'>
                <h2> 
                    <Link to="/"> Home </Link>
                </h2>
                <header>
                    <h1> Adopt a Pet </h1>
                    <Link to="/PetsAdopted"> Pets Adopted </Link>
                </header>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    this.addUserToQueue(e)
                    this.dequeueTimer()}}>
                    <label htmlFor='name'> Add yourself to queue: </label>
                        <input type="text" name="name" />
                        <input type="submit" />
                </form>
                <main>
                    <PeopleList key={this.state.currQueue} people={this.state.currQueue} />
                    <ul>
                    <Animal key={this.state.currentDog.name} animal={this.state.currentDog}/>
                    <button type ='submit' onClick={(e) => {
                        e.preventDefault()
                        this.deleteDog()
                        this.dequeuePerson()
                    }} className='notHidden'> Adopt this Dog! </button>
                    <Animal key={this.state.currentCat.name} animal={this.state.currentCat}/>
                    <button type ='submit' onClick={(e) => {
                        e.preventDefault()
                        this.deleteCat()
                        this.dequeuePerson()
                    }} className='notHidden'> Adopt this Cat! </button>
                    </ul>
                </main>
            </div>
        )
    }
} 