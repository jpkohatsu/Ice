import React, { Component } from 'react';
import EventsList from './home/events_list';
import PeopleList from './home/people_list';
import Profile from './home/profile';

class HomePage extends Component {
    constructor() {
        super();
        this.showEventList = this.showEventList.bind(this);
        this.showPeopleList = this.showPeopleList.bind(this);
        this.showProfile = this.showProfile.bind(this);
        this.state = {
            eventListHidden: true,
            peopleListHidden: true,
            profileHidden: true,
        };
    }

    showEventList() {
        this.setState({
            eventListHidden: !this.state.eventListHidden,
            peopelListHidden: true,
            profileHidden: true,
        });
    }

    showPeopleList() {
        this.setState({
            eventListHidden: true,
            peopleListHidden: !this.state.peopelListHidden,
            profileHidden: true,
        });
    }

    showProfile() {
        this.setState({
            eventListHidden: true,
            peopleListHidden: true,
            profileHidden: !this.state.profileHidden,
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1 className="col-md-12 text-center">Home</h1>
                </div>
                <div className="row btn-group d-flex">
                    <button
                        className="btn btn-primary col-md-4"
                        onClick={this.showEventList}
                    >
                        Events
                    </button>
                    <button
                        className="btn btn-primary col-md-4"
                        onClick={this.showPeopleList}
                    >
                        People
                    </button>
                    <button
                        className="btn btn-primary col-md-4"
                        onClick={this.showProfile}
                    >
                        Profile
                    </button>

                </div>
                <div>
                    {!this.state.eventListHidden && <EventsList />}
                    {!this.state.peopleListHidden && <PeopleList />}
                    {!this.state.profileHidden && <Profile />}
                </div>
            </div>
        );
    }
}

export default HomePage;
