// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component{
    handleChange = () => { 
        console.log('Entering password...');
    }
    render() {
        return ( 
            <div>
                <h1>Enter Password</h1>
                <input type="password" onChange={this.handleChange} />
            </div>
        );
    }
}

export default Keypad;



