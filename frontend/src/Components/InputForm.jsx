// Basic Imports
import React, { Component } from "react";
// -------------------------------------------------------------------------

//Imports needed for redux
import * as actions from '../store/actions/actions';
import { connect } from 'react-redux';
// -------------------------------------------------------------------------

import "./CSS/InputForm.css"
import Calendar from "./Calendar"
import { Spinner, Button } from 'react-bootstrap';
import Autocomplete from './Autocomplete'
import Logo from '../assets/logo.PNG'
import LazyLoad from 'react-lazy-load';


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
		latLng: [],
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
	updateCountry = (countryName, geometry, latLng) => {
		this.setState({
			"countryName" : countryName, 
			"geometry" : geometry,
			"latLng" : latLng, 
		})
	}

	scrollToTheTop = () => window.scrollTo(0,0);

	
	

	/** Called upon pressing the submit button, creates a new trip, 
	* and checks for basic input validation before submitting, 
	* and calling the redux-action (newTrip) to update redux-state with trip information.
	* @param {ReduxAction} newTrip: Updates redux state with new trip information.
	*/
	newTrip = (event) => {
		if (this.state.startDate == null || this.state.endDate == null) {
			alert("Please choose dates first!");
		} else if (this.state.countryName == null || this.state.geometry == null || this.state.latLng == null) {
			alert("Please select a country from the list!");
		} else {
			event.preventDefault();
			this.scrollToTheTop(); //Scroll back to the top
			this.props.newTrip(this.state.countryName, this.state.geometry, this.state.latLng, this.state.startDate, this.state.endDate);
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
    	if (this.props.newTripLoading === false && this.state.newTripCreated===true) {
    		this.props.history.push("/shopping");
    	}
	}


	render() {
		return (
	      <div>

	    	<div className = "row">
		    	<div className = "col-5 logo-container">
		    		<LazyLoad>
						<img src={Logo} alt="trippyy-logo" className="trippyy-logo"/>
					</LazyLoad>
				</div>
	          <div className = "col-7">
	          <div className ="inputForm-box">
	          	{
	    		 (this.props.isAuthenticated) ?
	    			 <h1>Welcome back, {this.props.user.username}!</h1> : (<h1>Get Started</h1>)
	    		}
			  	<form onSubmit = {this.newTrip} className="inputForm-form"> 
	                <div className ="inputForm-dates" id="input" >
	                	<h3> Enter Dates: </h3>
	                	<Calendar updateDates={this.updateDates}/>
	                </div>

                	<div id="input">
	                	<h3> Enter Country or City: </h3>
	                	<Autocomplete className="autocomplete" updateCountry={this.updateCountry} name = "country" 
						/>
	                </div>

	                
					<style type="text/css">
								{`
								.btn-trippyy {
								background-color: #5CCFE9;
								color: black;
								}
								`}
								</style>
	                <div className = "inputForm-submit" id="input">
	                	{ !this.props.loading ? 
							
	                		<Button variant="trippyy" onClick = {(event) => {this.newTrip(event); this.scrollToTheTop();}} > Submit </Button> 
	                		:
							<Spinner animation="border" role="status">
							  <span className="sr-only">Loading...</span>
							</Spinner>

	                	}
	                </div>
	              </form>
	              </div>
	              </div>

	              
	          </div>
	      </div>);

	}

}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.user !== null,
        user: state.user,
        loading: state.loading,
        newTripLoading: state.newTripLoading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        newTrip: (tripCountry, tripLat, tripLng, startDate, endDate) => dispatch(actions.newTrip(tripCountry, tripLat, tripLng, startDate, endDate)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
