import React, { Component } from 'react';
const googleId = require('../config/keys').googleApiID;

class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: `${googleId}`,
                scope: 'email'
            });
        });
    }

    render() {
        return (
            <div>
                GoogleAuth
            </div>
        )
    }
}

export default GoogleAuth;
