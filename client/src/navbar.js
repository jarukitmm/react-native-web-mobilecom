// REACT ICONS KIT
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import './css/navbar.css';
import Login from './login.js';
import Shoppingcart2 from './shoppingcart2';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Icon } from 'react-icons-kit'
import {books} from 'react-icons-kit/icomoon/books'

import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';

export default class navbarmenu extends React.Component {
  constructor(props) {

    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      user: null
      
    };
    this.passtoparent = this.passtoparent.bind(this);
    // console.log(this.state.user+"<------------------from constructor of navbar");
    // this.props.passtoparent(this.state.user);
    
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  passtoparent = (u) => {
    this.props.passtoparentAPP(u)
  }

  check=() => {
    console.log(this.state.user+"<------------------from check of navbar");
  }

  // componentWillReceiveProps(nextProps){
  //   console.log(this.state.user);
  //   return (
  //     <div class="fixed-top">
  //       <Navbar color="bg-default" light expand="md">
  //       <Zoom><Link class="logoname" to="/"><h style={{ color: 'red'}}>2</h><h style={{ color: 'rgb(2, 210, 3)'}}>hand</h><Icon style={{ color: 'green'}} size={'1.5em'} icon={books} /><h style={{ color: 'red'}}>2</h><h style={{ color: 'rgb(2, 210, 3)'}}>U</h></Link></Zoom>
  //         {/* <NavbarBrand href="/">2handbook2you</NavbarBrand> */}
  //         <NavbarToggler onClick={this.toggle} />
  //         <Collapse isOpen={this.state.isOpen} navbar>
  //           <Nav className="ml-auto" navbar>
  //             <NavItem>
  //               <Link  to="/shopingcart">shopingcart</Link>
  //             </NavItem>
  //             {/* <NavItem>
  //               <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
  //             </NavItem> */}
  //             <NavItem>
  //               {/* <NavLink onClick={() => this.props.openModal('login')} >Sign in</NavLink> */}
  //               <Login passtoparent={this.passtoparent} />
  //             </NavItem>
  //             {/* <UncontrolledDropdown nav inNavbar>
  //               <DropdownToggle nav caret>
  //                 Options
  //               </DropdownToggle>
  //               <DropdownMenu right>
  //                 <DropdownItem>
  //                   Option 1
  //                 </DropdownItem>
  //                 <DropdownItem>
  //                   Option 2
  //                 </DropdownItem>
  //                 <DropdownItem divider />
  //                 <DropdownItem>
  //                   Reset
  //                 </DropdownItem>
  //               </DropdownMenu>
  //             </UncontrolledDropdown> */}
  //           </Nav>
  //         </Collapse>
  //       </Navbar>
  //     </div>
      
  //   );
  // }
  
  render() {
    return (
      <div class="fixed-top">
        <Navbar color="bg-default" light expand="md">
        <Zoom><Link class="logoname" to="/"><h style={{ color: 'red'}}>2</h><h style={{ color: 'rgb(2, 210, 3)'}}>hand</h><Icon style={{ color: 'green'}} size={'1.5em'} icon={books} /><h style={{ color: 'red'}}>2</h><h style={{ color: 'rgb(2, 210, 3)'}}>U</h></Link></Zoom>
          {/* <NavbarBrand href="/">2handbook2you</NavbarBrand> */}
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link  to="/shopingcart">product</Link>
              </NavItem>
              <NavItem>
                <Shoppingcart2/>
              </NavItem>
              {/* <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem> */}
              <NavItem>
                {/* <NavLink onClick={() => this.props.openModal('login')} >Sign in</NavLink> */}
                <Login onClick={this.check} passtoparent={this.passtoparent} />
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}



// navbarmenu.propTypes = {
//   user: PropTypes.constance,
//   isopen: PropTypes.bool
// };