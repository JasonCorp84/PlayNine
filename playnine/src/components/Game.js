import React, { Component } from 'react';
import Answer from './Answer';
import Button from './Button';
import Stars from './Stars';
import Numbers from './Numbers';

class Game extends Component {
    render() { 
        return ( 
        <div className="container">
            <h3>Play Nine</h3>
            <hr/>
            <div className="row">
                <Stars />
                <Button />
                <Answer />
            </div>
            <br />
            <Numbers />
        </div> 
        );
    }
}
 


export default Game;