import React, { Component } from 'react';
// import Login from './login.js';
// import Drawer from './Drawer.js';
// import Loginmodal from './loginmodal.js';
import Carousel from './carousel.js';
import Card from './card.js';
import Footer from './footer.js';
import Navbar from './navbar.js';
import Navmenu from './navmenu.js';
import Shopingcart from './shopingcart.js';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.cardpage = this.cardpage.bind(this)
    this.state = {
    
    };
  }

  render() {
    return (
      <div className="Container" style={{ marginTop: '0px' }}>
        <Carousel />
        <Navmenu setpage={this.cardpage} />
        {/* <p>{this.state.page}</p> */}
        <div class="cardzone" style={{ margin: '0px', marginTop: '1em' }}>
          <flex-container>
          <Card>
                <div class="row">
                <div class="col" id="col_l" style={{marginTop: '10px'}}>
                  <img src={product.image} alt="Card image cap" />
                </div>
                <div class="col" id="col_r">
                  <CardBody>
                    <CardTitle>{product.name}</CardTitle>
                    <CardSubtitle>{product.description}</CardSubtitle>
                  </CardBody>
                  <CardBody>
                    <CardText>{"ระดับชั้น : "+product.level}</CardText>
                  </CardBody>
                  <CardDeck>
                    <CardLink id="price" href="#">{product.cost+' บาท'}</CardLink>
                    <CardLink id="add_to_cart" href="#">Add to Cart</CardLink>
                  </CardDeck>
                  {/* <CardSubtitle><CardLink href="#">Add to Cart</CardLink></CardSubtitle> */}
                </div>
                </div>
              </Card>
          </flex-container>
        </div>
        {/* <Footer/> */}
      </div>
    );
  }
}

