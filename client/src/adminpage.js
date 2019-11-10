// react-super-responsive-table
import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import { formatMs } from '@material-ui/core/styles/transitions';
import './css/shopingcart.css';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

export default class shopingcart extends React.Component{
  constructor(props){
    
    super(props);

    this.state = {
      user : null
    };
  }

  loopcount(){
    // this.setState({data:res.data} = axios.post(`http://localhost:3000/api/product`);
  }

  onDeleteClick=()=>{
    
  }

componentDidMount(){
    // console.log('call createtable');
    fetch('http://localhost:3000/api/products/allproduct')
          .then(res=>{
            return res.json();
             }).then(data=>{
                let allproducts = data.product.map((product,index)=>{
                  console.log(index,JSON.stringify(product));
                  return(
                    <Tr>
                      <Td>{index+1}</Td>
                      <Td><img style={{width: '10em', height: '10em'}} src={product.image}></img></Td>
                      <Td>{product.name}</Td>
                      <Td>{product.description}</Td>
                      <Td>{product.subject}</Td>
                      <Td>{product.level}</Td>
                      <Td>{product.cost}</Td>
                      <IconButton
                        aria-label="Delete"
                        // onClick={this.onDeleteClick.bind(this, _id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tr>
                  )
                })
                console.log(allproducts);
                this.setState({data:allproducts})
               
             });
  }
  render (){
    return(
      <Table>
      <Thead>
        <Tr>
          <Th>No.</Th>
          {/* <Th>Product ID</Th> */}
          <Th>รูป</Th>
          <Th>ชื่อหนังสือ</Th>
          <Th>ชื่อผู้แต่ง/สำนักพิมพ์</Th>
          <Th>วิชา</Th>
          <Th>ระดับชั้น</Th>
          {/* <Th>Quantity</Th> */}
          <Th>ราคา</Th>
          {/* <Th>Total</Th> */}
        </Tr>
      </Thead>
      <Tbody>
        {this.state.data}
      </Tbody>
    </Table>
    )
  } 
}