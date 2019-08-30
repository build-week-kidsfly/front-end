import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/logout';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color='warning' light expand='md'>
          <NavbarBrand href='/'>KidsFly</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='/navigation'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/profile'>Profiles</NavLink>
              </NavItem>
              <NavItem />
              <NavItem>
                <NavLink href='/requestForm/'>Request Form</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/admin'>Admin</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => logout()} href='/'>
                  Logout
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default connect(
  null,
  { logout }
)(Navigation);
