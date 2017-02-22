import React, {PropTypes, Component} from 'react';
import { connect } from 'react-redux';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class App extends Component {

	render() {
	  return(
	    <div id="page">
        <header>
          <Navbar staticTop collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">The Guardian App</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Navbar>
        </header>
        <div id="primary">
          <div className="container">
            {this.props.children}
          </div>
        </div>
      </div>
    );
	}
}

function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps)(App);
