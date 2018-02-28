import React, { Component } from 'react';
import Attendees from '../eventList/attendees';
import Hiring from '../eventList/hiring_companies';


// const eventItem = ({event, onEventSelect})=>{
//           <ul onClick={()=> onEventSelect(event)} className
// }
class EventDetails extends Component {
    constructor() {
        super();
        this.rsvp = this.rsvp.bind(this);
        this.state = {
            going: false,
        };
    }
    rsvp() {
        console.log('going!');
        this.setState({
             going: true,
        });
    }
    render() {
        return (
                <ul>
                    <div>An event</div>
                    <button onClick={this.rsvp}>RSVP</button>
                    <div className="signIn-signUp">
                        {this.state.going && <Attendees />}
                        {this.state.going && <Hiring />}
                    </div>
                </ul>
        );
    }
}

export default EventDetails;
