// eslint-disable no-alert
import React from 'react';
import ReactModalLogin from 'react-modal-login';
import axios from 'axios';
import {Link} from 'react-router-dom';
// import {facebookConfig, googleConfig} from "./social-config";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/login.css';


export default class Sample extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      loggedIn: null,
      loading: false,
      error: null,
      initialTab: null,
      recoverPasswordSuccess: null,
      user: null
    };

  }


  onLogin() {
    console.log('__onLogin__');
    console.log('username: ' + document.querySelector('#username').value);
    console.log('password: ' + document.querySelector('#password').value);
    
    const user = {
      username: '',
      password: ''
    }

    user.username = document.querySelector('#username').value;
    user.password = document.querySelector('#password').value;

    
    if (!user.username || !user.password) {
      this.setState({
        error: true
      })
    } else {
      // this.onLoginSuccess('form');
      axios
      .post(`http://localhost:3000/api/auth/users/login`, {username:user.username,password:user.password})
      .then((res)=>{ 
        console.log('status '+ res);
        console.log(res);
        console.log(res.data);
        // this.onLoginSuccess(res.data.firstname);
          // this.setState({user:res.data.username});
          // this.setState({pss:res.data.password});
        this.setState({user:res.data.user});
        console.log('check '+this.state.user)
        this.props.passtoparent(this.state.user)
        
      })
      .catch((error)=>{
        // console.log(error.response.status)
        this.onLoginFail('form',error.response.status)
      })
      
    }
  }

  onRegister() {
    const user = {}

    user.firstname = document.querySelector('#firstname').value;
    user.lastname = document.querySelector('#lastname').value;
    user.username = document.querySelector('#username').value;
    user.password = document.querySelector('#password').value;
    user.email = document.querySelector('#email').value;
    user.dateOfBirth = document.querySelector('#dateOfBirth').value;
    console.log('firstname : '+user.firstname);
    if (!user.firstname || !user.lastname || !user.password || !user.username || !user.email || !user.dateOfBirth) {
      console.log('up')
      this.setState({
        error: true
      })
    } else {
      console.log('down')
      // this.onLoginSuccess('form');
      axios
        .post(`http://localhost:3000/api/auth/users/signup`, {
          user
        })
        .then(res => {
          console.log(res);
          console.log(res.data.user);
          // this.onLoginSuccess(res.data.firstname);
          this.setState({user:res.data.user});
          // this.setState({pss:res.data.password});
          
        })
    }
  }

  onRecoverPassword() {
    console.log('__onFotgottenPassword__');
    console.log('email: ' + document.querySelector('#email').value);

    const email = document.querySelector('#email').value;


    if (!email) {
      this.setState({
        error: true,
        recoverPasswordSuccess: false
      })
    } else {
      this.setState({
        error: null,
        recoverPasswordSuccess: true
      });
    }
  }

  openModal(initialTab) {
    this.setState({
      initialTab: initialTab
    }, () => {
      this.setState({
        showModal: true,
      })
    });
  }

  onLoginSuccess(method, response) {

    this.closeModal();
    this.setState({
      loggedIn: method,
      loading: false
    })
  }

  onLoginFail(method, response) {
    
    this.setState({
      showModal: true,
      loading: false,
      error: response
    })
  }

  startLoading() {
    this.setState({
      loading: true
    })
  }

  finishLoading() {
    this.setState({
      loading: false
    })
  }

  afterTabsChange() {
    this.setState({
      error: null,
      recoverPasswordSuccess: false,
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
      error: null
    });
  }
  
  logout(){
    axios
        .post(`http://localhost:3000/api/auth/users/logout`).then(res => {
          console.log(res);
          console.log(res.data);
          window.location.reload();
          // this.setState({user:''});
          
        });
  
  }


  render() {

    // const loggedIn = this.state.loggedIn
    //   ? <div>
    //       <p>You are signed in with: {this.state.loggedIn}</p>
    //       <p>username: {this.state.user}</p>
    //       <p>password: {this.state.pss}</p>
    //       <br/>
    //       {/* <button className="RML-btn" onClick={this.logout}>Logout</button> */}
    //     </div>
        

    //   : <div>
    //       <p>You are signed out</p>
    //   </div>;

    const isLoading = this.state.loading;
    console.log('state user : \n '+JSON.stringify(this.state.user));
    if(this.state.user == null){
      return (
      <div class="signin_signout_button">
        <button
          className="RML-btn"
          onClick={() => this.openModal('login')}
        >
          Sign in
        </button>
        <h>  </h>
        <button
          className="RML-btn"
          onClick={() => this.openModal('register')}
        >
          Sign up
        </button>

        <ReactModalLogin
          visible={this.state.showModal}
          onLoginFail={this.onLoginFail}
          onCloseModal={this.closeModal.bind(this)}
          loading={isLoading}
          initialTab={this.state.initialTab}
          error={this.state.error}
          tabs={{
            afterChange: this.afterTabsChange.bind(this)
          }}
          startLoading={this.startLoading.bind(this)}
          finishLoading={this.finishLoading.bind(this)}
          form={{
            onLogin: this.onLogin.bind(this),
            onRegister: this.onRegister.bind(this),
            onRecoverPassword: this.onRecoverPassword.bind(this),

            recoverPasswordSuccessLabel: this.state.recoverPasswordSuccess
              ? {
                  label: "New password has been sent to your mailbox!"
                }
              : null,
            recoverPasswordAnchor: {
              label: "Forgot your password?"
            },
            loginBtn: {
              label: "Sign in"
            },
            registerBtn: {
              label: "Sign up"
            },
            recoverPasswordBtn: {
              label: "Send new password"
            },
            loginInputs: [
              {
                containerClass: 'RML-form-group',
                label: 'Username',
                type: 'text',
                inputClass: 'RML-form-control',
                id: 'username',
                name: 'username',
                placeholder: 'Username'
              },
              {
                containerClass: 'RML-form-group',
                label: 'Password',
                type: 'password',
                inputClass: 'RML-form-control',
                id: 'password',
                name: 'password',
                placeholder: 'Password',
              }
            ],
            registerInputs: [
              {
                containerClass: 'RML-form-group',
                label: 'Firstname',
                type: 'text',
                inputClass: 'RML-form-control',
                id: 'firstname',
                name: 'firstname',
                placeholder: 'Firstname'
              },
              {
                containerClass: 'RML-form-group',
                label: 'Lastname',
                type: 'text',
                inputClass: 'RML-form-control',
                id: 'lastname',
                name: 'lastname',
                placeholder: 'Lastname',
              },
              {
                containerClass: 'RML-form-group',
                label: 'Username',
                type: 'text',
                inputClass: 'RML-form-control',
                id: 'username',
                name: 'username',
                placeholder: 'Username',
              },
              {
                containerClass: 'RML-form-group',
                label: 'Password',
                type: 'password',
                inputClass: 'RML-form-control',
                id: 'password',
                name: 'password',
                placeholder: 'Password',
              },
              {
                containerClass: 'RML-form-group',
                label: 'Email',
                type: 'email',
                inputClass: 'RML-form-control',
                id: 'email',
                name: 'email',
                placeholder: 'Email',
              },
              {
                containerClass: 'RML-form-group',
                label: 'Date of Birth',
                type: 'date',
                inputClass: 'RML-form-control',
                id: 'dateOfBirth',
                name: 'dateOfBirth'
              },
              {
                containerClass: 'RML-form-group',
                label: 'Creditcard Number',
                type: 'number',
                inputClass: 'RML-form-control',
                id: 'creditcardnumber',
                name: 'creditcardnumber',
                placeholder: 'CreditCard Number'
              },
              {
                containerClass: 'RML-form-group',
                label: 'Expiration Month',
                type: 'number',
                inputClass: 'RML-form-control',
                id: 'expmonth',
                name: 'expmonth',
                placeholder: 'Expiration month'
              },
              {
                containerClass: 'RML-form-group',
                label: 'Expiration Year',
                type: 'number',
                inputClass: 'RML-form-control',
                id: 'expyear',
                name: 'expyear',
                placeholder: 'Expiration year'
              },
              {
                containerClass: 'RML-form-group',
                label: 'CCV number',
                type: 'password',
                inputClass: 'RML-form-control',
                id: 'ccvnum',
                name: 'ccvnum',
                placeholder: 'CCV number'
              }
            ],
            recoverPasswordInputs: [
              {
                containerClass: 'RML-form-group',
                label: 'Email',
                type: 'email',
                inputClass: 'RML-form-control',
                id: 'email',
                name: 'email',
                placeholder: 'Email',
              },
            ],
          }}
          // separator={{
          //   label: "or"
          // }}
          // providers={{
          //   facebook: {
          //     config: facebookConfig,
          //     onLoginSuccess: this.onLoginSuccess.bind(this),
          //     onLoginFail: this.onLoginFail.bind(this),
          //     inactive: isLoading,
          //     label: "Continue with Facebook"
          //   },
          //   google: {
          //     config: googleConfig,
          //     onLoginSuccess: this.onLoginSuccess.bind(this),
          //     onLoginFail: this.onLoginFail.bind(this),
          //     inactive: isLoading,
          //     label: "Continue with Google"
          //   }
          // }}
        />
        {/* {loggedIn} */}
      </div>
    )
    }else{

      return(
      <div class="signin_signout_button">
        <div class="showusername">
          <Link to="/profile">{this.state.user.username}</Link> 
        </div>
      <button className="RML-btn" onClick={this.logout}>
        Logout
      </button>
      </div>
      )
    }
    
  }
}