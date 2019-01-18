import React, { Component } from 'react';
const googleId = require('../config/keys').googleApiID;

class GoogleAuth extends Component {
    state = {
        isSignedIn: null
    };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: `${googleId}`,
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange();
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () => {
        this.setState({
            isSignedIn: this.auth.isSignedIn.get()
        });
    };

    onSignIn = () => {
        this.auth.signIn();
    };

    onSignOut = () => {
        this.auth.signOut();
    };

    renderAuthButton(){
        if (this.stateisSigned === null) {
            return null;
        } else if (this.state.isSignedIn === true) {
            return (
                <button 
                    className="ui red google button"
                    onClick={this.onSignOut}
                >
                    <i className="google icon" />
                    Sign Out
                </button>
            )
        } else {
            return (
                <button 
                    className="ui red google button"
                    onClick={this.onSignIn}
                >
                    <i className="google icon" />
                    Sign In with Google
                </button>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

export default GoogleAuth;
