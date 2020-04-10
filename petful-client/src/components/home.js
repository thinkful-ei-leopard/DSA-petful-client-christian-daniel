import React from 'react';
import dog_cat from '../images/dog_cat.png'
import './home.css'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state= {

        }
    }
    render() {
        return (
            <heading>
                <h1>Welcome to Petful!</h1>
                <p classname="intro">This is an online animal shelter which allows you to adopt cats and dogs. <br></br>
                    This is strictly based on "First in, First out". You can adopt a cat, a dog <br></br>
                    or both, but you may only adopt the animal that came to the shelter first.<br></br>
                    You will be put into queues so you must wait for your turn.
                </p>
                <img src={dog_cat} />
            </heading>

        )
    }
}
