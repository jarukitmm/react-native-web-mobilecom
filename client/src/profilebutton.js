import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Icon } from 'react-icons-kit';
import {user} from 'react-icons-kit/fa/user';
import {Link, Redirect} from 'react-router-dom';
import './css/profile.css';
import Profile from 'profile.js'

export default class profilebutton extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            redirect: false
        }
    }

    onclick(){
        this.setState({redirect: true});
    }

    render(){  
        return (
            <div>
                <Link to="/profile">{this.props.username}</Link>
                <Profile username={this.props.username}/>
            </div>
        );
    }
};

