import React, { Component } from 'react';
import PeopleDetails from '../peopleList/people_details';

class EventList extends Component {
    constructor() {
        super();
        this.showHideen = this.showHidden.bind(this);
        this.state = {
            peopleDetails: true
        };
    }

    showHidden(e) {
        const toBeVisible = e.target.id;
        const tabs = ["peopleDetails"];
        tabs.forEach(x => ((x===toBeVisible)?
        this.setState({ [x]: false }) : this.setState({ [x]: true })));
    }

    render() {
        return (
            <div>
                <div className="row btn-group d-flex">
                    <button
                        id="peopleDetails"
                        className="btn btn-primary col-md-6"
                        onClick={this.showHidden}
                    >
                        People Details
                    </button>
                    <div>
                        {!this.state.peopleDetails && <PeopleDetails />}
                    </div>
                </div>
            </div>
        );
    }
}

export default PeopleList;