import React, { Component } from 'react';
import EventDetails from '../eventList/event_details';
import EventsAttending from '../eventList/events_attending';

class EventList extends Component {
    constructor() {
        super();
        this.showEventDetails = this.showEventDetails.bind(this);
        this.showEventsAttending = this.showEventsAttending.bind(this);
        this.state = {
            eventDetailsHidden: true,
            eventsAttendingHidden: true,
        };
    }

    showEventDetails() {
        this.setState({
            eventDetailsHidden: !this.state.eventDetailsHidden,
            eventsAttendingHidden: true,
        });
    }

    showEventsAttending() {
        this.setState({
            eventDetailsHidden: true,
            eventsAttendingHidden: !this.state.eventsAttendingHidden,
        });
    }

    render() {
        return (
            <div>
                <div className="row btn-group d-flex">
                    <button
                        className="btn btn-primary col-md-6"
                        onClick={this.showEventDetails}
                    >
                        Events List
                    </button>
                    <button
                        className="btn btn-primary col-md-6"
                        onClick={this.showEventsAttending}
                    >
                        Events Im Attending
                    </button>
                    <div>
                        {!this.state.eventDetailsHidden && <EventDetails />}
                        {!this.state.eventsAttendingHidden && <EventsAttending />}
                    </div>
                </div>
            </div>
        );
    }
}

export default EventList;
