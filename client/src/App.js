import React, { Component } from 'react';
import './css/App.css';
import Login from './login.js';
// import Drawer from './Drawer.js';
import Loginmodal from './loginmodal.js';
import Home from './home.js'
import Header from './header.js';
import Carousel from './carousel.js';
import Card from './card.js';
import Footer from './footer.js';
import Navbar from './navbar.js';
import Navmenu from './navmenu.js';
import Shopingcart from './shopingcart.js';
import Shoppingcart2 from './shoppingcart2.js';
import Productcard from './productcard.js';
import Searchbar from './searchbar.js';
import Slidingpane from './slidingpane.js';
import Profile from './profile.js';
import Adminpage from './adminpage.js';
 
import { Route } from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      user: null
    }
    this.passtoparentAPP = this.passtoparentAPP.bind(this);
    // console.log(this.state.user+"<----------------------------------------------------");
  }
  passtoparentAPP=(u) => {
    this.setState({user: u});
  }

  render() {
    console.log(this.state.user)
    return (
      <div className="Container">
        <Navbar passtoparentAPP={this.passtoparentAPP}/>
        <div style={{marginTop: '68px'}}>
          <Route exact path="/" component={()=><Home/>} />
          {/* <Route path="/header" component={Header} /> */}
          <Route path="/login" component={()=><Login />} />
          <Route path="/navmenu" component={()=><Navmenu/>} />
          <Route path="/card" component={Card} />
          <Route path="/shopingcart" component={Shopingcart}/>
          <Route path="/shoppingcart2" component={Shoppingcart2}/>
          {/* <Route path="/productcard" component={Productcard} /> */}
          <Route path="/footer" component={Footer} />
          <Route path="/searchbar" component={Searchbar} />
          <Route path="/slidingpane" component={Slidingpane} />
          {console.log("Appppppp"+this.state.user)}
          <Route path="/profile" component={()=><Profile user={this.state.user}/>} />
          <Route path="/adminpage" component={Adminpage} />
        </div>
        <Footer style={{marginTop: '20em'}}/>
      </div>
    );
  }
}

export default App;
