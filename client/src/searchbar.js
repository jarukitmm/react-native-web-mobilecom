import React from 'react';
import SearchBar from '@opuscapita/react-searchbar';
import './css/searchbar.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
// import { Search, Grid, Header, Segment } from 'semantic-ui-react'

export default class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      filterValue: '',
    };
  }

  // handleSearch = (searchValue) => {
  //   this.setState({ searchValue });
  // }

  handleFilter = (filterValue) => {
    this.setState({ filterValue });
    console.log('onsearch <--------------------------');
    this.setState({searchValue:'aaaa'})
    console.log(this.state.searchValue);
  }

  render() {
    return (
      <div style={{paddingLeft : '3em', paddingRight: '3em', paddingTop: '0.25em'}}>
        <SearchBar
          value={this.state.filterValue}
          onSearch={this.handleFilter}
          searchPlaceHolder="Search..."
          dynamicSearchStartsFrom={3}
        />
        {/* <Link to="/searchcard" >search</Link> */}
        {/* <div class="result">{this.state.searchValue}</div> */}
      </div>
    );
  }
}