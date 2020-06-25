// Basic Imports
import React, { Component } from "react";
// -------------------------------------------------------------------------

//Imports needed for redux
import * as actions from '../store/actions/actions';
import { connect } from 'react-redux';
// -------------------------------------------------------------------------

import "./CSS/InputForm.css"
import Calendar from "./Calendar"
import { Spinner } from 'react-bootstrap';
import Autocomplete from './Autocomplete'

/**
 * Component, renders input form for user to input City and dates of trip.
 * @memberof Component
 * @param {user} Redux-state: Contains information about user if logged in. (e.g. token, username)
 * @param {ReduxAction} newTrip: Updates redux state with new trip information.
 */
class InputForm extends Component {

	state = {
		newTripCreated: false,
		goToShoppingPage: false,
	}

	/** 
	* Called from component Calendar, in which upon input of dates, local state dates would be updated
	* @param {String} startDate: start date of trip.
	* @param {String} endDate: start date of trip.
	*/
	updateDates = (startDate, endDate) => {
		this.setState({startDate, endDate});
	}

	/** 
	* Called from component Autocomplete, in which upon input of country, local state country would be updated
	* @param {String} countryName: name of country.
	* @param {Object} latLng: coordinates of country.
	*/
	updateCountry = (countryName, latLng) => {
		this.setState({countryName, latLng});
	}

	/** Called upon pressing the submit button, creates a new trip, 
	* and checks for basic input validation before submitting, 
	* and calling the redux-action (newTrip) to update redux-state with trip information.
	* @param {ReduxAction} newTrip: Updates redux state with new trip information.
	*/
	newTrip = (event) => {
		if (this.state.startDate == null || this.state.endDate == null) {
			alert("Please choose dates first!");
		} else if (this.state.countryName == null || this.state.latLng == null) {
			alert("Please select a country from the list!");
		} else {
			event.preventDefault();
			this.props.newTrip(this.state.countryName, this.state.latLng["lat"], this.state.latLng["lng"], this.state.startDate, this.state.endDate);
			this.setState({newTripCreated: true});
		}
	}

	//If new trip created is true, and loading is complete, then go to shopping page.
	// static getDerivedStateFromProps(nextProps, prevState){
	//   if (nextProps.loading===false && prevState.newTripCreated===true){
	//      return { goToShoppingPage: true };
	//   }
	//   else return null;
	// }

	//Happens upon receiving updated information.
    componentDidUpdate(prevProps, prevState, snapshot) {
    	if (this.props.loading===false && this.state.newTripCreated===true) {
    		this.props.history.push("/shopping");
    	}
    }

	render() {
		return (
	      <div className = "container-fluid align-items-center inputForm">
	      	{
	    		 (this.props.isAuthenticated) ?
	    			 <h1>Hello, {this.props.user.username}!</h1> : (<h1>Hello stranger:)</h1>)
	    	}
	          <div className = "jumbotron">
	              <form onSubmit = {this.newTrip}> 
	                <div>
	                	<h3> Enter Country: </h3>
	                	<Autocomplete updateCountry={this.updateCountry} name = "country"/>
	                </div>

	                <div className ="inputForm">
	                	<h3> Enter dates: </h3>
	                	<Calendar updateDates={this.updateDates}/>
	                </div>
	                
	                <div className = "inputForm">
	                	{ !this.props.loading ? 
	                		<button> Submit </button> 
	                		:
							<Spinner animation="border" role="status">
							  <span className="sr-only">Loading...</span>
							</Spinner>

	                	}
	                </div>
	              </form>

	              
	          </div>
	      </div>);

	}

}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.user !== null,
        user: state.user,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        newTrip: (tripCountry, tripLat, tripLng, startDate, endDate) => dispatch(actions.newTrip(tripCountry, tripLat, tripLng, startDate, endDate)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
