import React, {Component} from 'react';
import axios from "axios";
import { connect } from 'react-redux';
import * as actions from '../store/actions/actions';
import NavBar from '../Components/navBar';

class Signup extends Component {

    componentDidMount() {
      //Updates login status into redux.
      this.props.onTryAutoSignup();

      //If user is logged in, redirect to main page.
      if (localStorage.token !== null && localStorage.token !== undefined) {
        alert("Please logout to create a new account");
        this.props.history.push('/');
      }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onAuth(event.target.username.value, event.target.email.value,
          event.target.password1.value, event.target.password2.value);
        this.props.history.push('/');
      }

    render() {
        return (
          <div className = "container-fluid align-items-center">
              <NavBar from={this.props.location.pathname}/>
              
              <div className = "jumbotron startBox">
                <h1> SIGN UP</h1>
                  <form onSubmit={this.handleSubmit}>
                    <div className = "element">
                      <input type = "text" name = "username" placeholder = "Enter Username" />
                    </div>
                    
                    <div className = "element">
                      <input type = "text" name = "email" placeholder = "Enter Email" />
                    </div>

                    <div className = "element">
                      <input type = "text" name = "password1" placeholder = "Enter Password" />
                    </div>

                    <div className = "element">
                      <input type = "text" name = "password2" placeholder = "Enter Password again" />
                    </div>
                    
                    <button className ="element" type="submit" value = "Submit"> Signup </button>
                  </form>
              </div>
          </div>);

    }

}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, email, password1, password2) => dispatch(actions.authSignuped(username, email, password1, password2)),
        onTryAutoSignup: () => dispatch(actions.authCheckedState()),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);