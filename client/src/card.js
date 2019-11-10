import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, CardDeck } from 'reactstrap';
import './css/card.css';

// import { Card, CardHeader, CardBody, CardFooter, ImageHeader } from "react-simple-card";

export default class Cardproduct extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      data : null,
      alldata: null,
      check: false
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/products/allproduct')
    .then(res=>{
      return res.json();
       }).then(data=>{
              let allproduct = data.product.map((product,index)=>{
            // console.log(index,JSON.stringify(product));
            return(
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
            )
          })
        //   console.log(allproducts);
        this.setState({data: allproduct});
        console.log('เก็บalldata <-----------------------------')
        this.setState({alldata: allproduct});
       });
  }

  componentWillReceiveProps(nextProps){
    fetch('http://localhost:3000/api/products/allproduct')
    .then(res=>{
      return res.json();
       }).then(data=>{
              let allproduct = data.product.map((product,index)=>{
            // console.log(index,JSON.stringify(product));
            if (product.subject == this.props.page) {
              this.setState({check:false});
              return(
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
              )
            } 
            else if (this.props.page == 'ทั้งหมด') {
                this.setState({data:null});
                this.setState({check:true});
                // return(
                //   this.state.alldata                
                // )
            }
          })
        //   console.log(allproducts);
        this.setState({data: allproduct});
       });
  }

  render(){
    if (this.state.check == false) {
      return(
        this.state.data
      )  
    } 
    else if(this.state.check == true){
      return(
        this.state.alldata
      )
    }
  }
}
