import React, { Component } from 'react';

class Workout extends Component {
    state = { 
        workout:{
            name: "workout1"
        }
     }
    render() { 
        const {workout} = this.state;
        return ( 
            <React.Fragment>
                <h1>{workout.name}</h1>
            </React.Fragment>
         );
    }
}
 
export default Workout;
