// Basic Imports
import React, { Component, Fragment } from "react";
// -------------------------------------------------------------------------

//Imports needed for redux
import * as actions from '../store/actions/actions';
import { connect } from 'react-redux';
// -------------------------------------------------------------------------

import "./CSS/Results.css"
import Timetable from '../Components/Timetable'
import NavBar from '../Components/navBar'

/** Container, renders results page
* @memberof Container
* @param {Component} Navbar, renders navigation bar.
* @param {Component} Timetable, renders timetable to display activities.
* @param {ReduxAction} checkTrip, updates redux state of trip with local storage
* @param {ReduxAction} authCheckState, updates redux state of user with local storage
*/
class Results extends Component {
    componentDidMount() {
        this.props.checkTrip();
        this.props.onTryAutoSignup();
    }

	render() {
		return (
            <Fragment>
                <NavBar from={this.props.location.pathname}/>
                <Timetable/>
            </Fragment>);
	} 
	        
  	
}


const mapStateToProps = (state) => {
    return {
        trip: state.trip,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState()),
        checkTrip: () => dispatch(actions.checkTrip()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Results);