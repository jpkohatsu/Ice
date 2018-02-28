import React, { Component } from 'react';
import EventDetails from '../eventList/event_details';

    // const eventItems = props.events.map(Event => {
    //     return(
    //         <div>
    //         {!this.state.noEvents &&  <EventListItem/>: "No events currently scheduled"}
    //        </div>
    //     )
    // });

    // const eventItems = props.Events.map(Event => {
    //     return(
    //         <div>
    //         <Events/>
    //        </div>
    //     )
    // });

function EventList() {
    // constructor () {
    //     super()
    //     this.state = {
    //         noEvents: true
    //     }
    // }

    // componentDidMount(){
    //     const eventCheck = Events ? this.setState({noEvents: false}) : this.setState({noEvents:true});
    // }

    return (
        <div>
            <EventDetails />
        </div>
        );
}

export default EventList;
