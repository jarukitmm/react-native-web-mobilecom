import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import { Jumbotron, Button } from 'reactstrap';
import './css/footer.css';
import StickyFooter from 'react-sticky-footer';

export default class Footer extends Component {
    render() {
      return (
        <div class="foot">
            <Jumbotron>
            <footer class="page-footer font-small blue">
                <div class="footer-copyright text-center py-3">© 2018 Copyright:
                    <a href="">Bootstrap.com</a>
                </div>
                <div>
                    Contact US<br/>
                    <a href="">0812345678</a>
                </div>
            </footer>
            </Jumbotron>
        </div>
        // <div classname="footer">
        // <StickyFooter
        //     bottomThreshold={50}
        //     normalStyles={{
        //         backgroundColor: "#999999",
        //         padding: "2rem"
        //     }}
        //     stickyStyles={{
        //         backgroundColor: "rgba(255,255,255,.8)",
        //         padding: "2rem"
        //     }}
        // >
        //     Add any footer markup here
        // </StickyFooter>
        // </div>
      );
    }
  }