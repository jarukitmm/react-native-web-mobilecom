import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Icon } from 'react-icons-kit';
import {user} from 'react-icons-kit/fa/user';
import axios from 'axios';
import './css/profile.css';
import Home from './home';
import {Route, Link} from 'react-router-dom';
import './css/profile.css';


function Editprofile() {
        // this.state = {
        //     user: null,
        // }

    //     this.validateForm=() => {
    //         return this.state.email.length > 0 && this.state.password.length > 0;
    //     }
    
    //     this.handleChange = (event) => {
    //         this.setState({
    //             [event.target.id]: event.target.value
    //         });
    //     }
  
    //   this.handleSubmit = (event) => {
    //       event.preventDefault();
    //       axios
    //     .post(`http://localhost:3000/api/auth/users/editprofile`, {
    //       user
    //     })
    //     .then(res => {
    //       console.log(res);
    //       console.log(res.data.user);
    //       // this.onLoginSuccess(res.data.firstname);
    //       this.setState({user:res.data.user});
    //       // this.setState({pss:res.data.password});
          
    //     })
    //     }

    return (
      <div class = "edit_profile">
        <h2>Edit Profile</h2>
        <form > 
        {/* onSubmit={this.handleSubmit} */}
            <label>
                Firstname:
                <input type="text" />
                {/* value={this.state.value} onChange={this.handleChange} */}
            </label><br/>
            <label>
                Lastname:
                <input type="text" />
            </label><br/>
            <label>
                Username:
                <input type="text" />
            </label><br/>
            <label>
                Password:
                <input type="password" />
            </label><br/>
            <label>
                E-mail:
                <input type="text" />
            </label><br/>
            <label>
                Date of Birth:
                <input type="date" />
            </label><br/>
            <input type="submit" value="Submit" />
        </form>
      </div>
    );
}

export default class profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user: this.props.user
        };
    }

    editdata(){
        console.log("log in editdata")
        return(
            <div>Hello</div>
        )
    }
    
    render(){  
        if (this.state.user != null) {
            return (
                <div class="profile_field">
                    <Jumbotron fluid>
                        <Container fluid>
                            <Icon size={'1.5em'} icon={user} />
                            <h1>{this.state.user.username}</h1>
                            {/* <button onClick={this.editdata}>edit</button> */}
                            <Link to="/profile/editprofile">edit</Link>
                        </Container>
                        <Route path="/profile/editprofile" component={Editprofile}/>
                    </Jumbotron>
                </div>
            );
        } else {
            return(
                <Home/>
            );
        }
    }
    
};

