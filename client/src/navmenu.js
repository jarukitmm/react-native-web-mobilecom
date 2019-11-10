import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import './css/navmenu.css';
import SearchIcon from '@material-ui/icons/Search';
import Searchbar from './searchbar.js';
import {Route} from 'react-router-dom';
import Shopingcart from './shopingcart.js'

// props: {
//   setpage
// }
  
export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  changepage(val){
    // this.props.setpage(e.target.id)
    this.props.setpage(val)
  }

  render() {
    return (
      // <div>
      <div class="menutab">
        <Nav tabs>
          <Searchbar/>
          <NavItem>
            <NavLink onClick = {() => this.changepage('ทั้งหมด')} href="#">ทั้งหมด</NavLink>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              หนังสือเรียนพิเศษ
            </DropdownToggle>
            <DropdownMenu>
              {/* <DropdownItem header>เคมีอ.อุ๊</DropdownItem> */}
              <DropdownItem>เคมีอ.อุ๊</DropdownItem>
              {/* <DropdownItem disabled>Action</DropdownItem> */}
              <DropdownItem>ideal physic</DropdownItem>
              <DropdownItem>ondemand</DropdownItem>

              <DropdownItem divider />
              
              <DropdownItem>abc</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink onClick = {() => this.changepage('วิทยาศาสตร์')} /*id="1"*/ href="#">วิทยาศาสตร์</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick = {() => this.changepage('คณิตศาสตร์')} href="#">คณิตศาสตร์</NavLink>
            {/* <NavLink disabled href="#">Disabled Link</NavLink> */}
          </NavItem>
          <NavItem>
            <NavLink onClick = {() => this.changepage('ภาษาไทย')} href="#">ภาษาไทย</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick = {() => this.changepage('ภาษาอังกฤษ')} href="#">ภาษาอังกฤษ</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick = {() => this.changepage('ชีววิทยา')} href="#">ชีววิทยา</NavLink>
          </NavItem>
          {/* <Searchbar/> */}
        </Nav>
      </div>
      // <Route path="/shopingcart" component="Shopingcart"/>
      // </div>
    );
  }
}