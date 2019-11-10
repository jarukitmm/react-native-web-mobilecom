import React, { Component } from 'react';
// import Login from './login.js';
// import Drawer from './Drawer.js';
// import Loginmodal from './loginmodal.js';
import Carousel from './carousel.js';
import Card from './card.js';
import Footer from './footer.js';
import Navbar from './navbar.js';
import Navmenu from './navmenu.js';
// import Shopingcart from './product.js';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.cardpage = this.cardpage.bind(this)
    this.state = {
      page: 'ทั้งหมด'
    };
  }

  cardpage =(p)=> {
    this.setState({ page: p })
    console.log(this.state)
  }

  render() {
    return (
      <div className="Container" style={{ marginTop: '0px' }}>
        <Carousel />
        <Navmenu setpage={this.cardpage} />
        {/* <p>{this.state.page}</p> */}
        <div class="cardzone" style={{ margin: '0px', marginTop: '1em' }}>
          <flex-container>
            <Card page={this.state.page} />
          </flex-container>
        </div>
        {/* <Footer/> */}
      </div>
    );
  }
}

