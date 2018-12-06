import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import { Button, 
        Nav,
        Navbar,
        NavItem,
        NavbarBrand,
        NavbarToggler,
        Collapse, 
        NavLink,
        Card,
        CardHeader,
        CardBody,
        Form, 
        FormGroup,
        Label,
        Input
      } from 'reactstrap'

class App extends Component {
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
      <div className="App">
        

        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>              
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Sign In</NavLink>
              </NavItem>
              <NavItem>
                <Button outline color="primary">Add Doctor</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Card>
          <CardHeader>Basic Information</CardHeader>
          <CardBody>
            
          </CardBody>          
        </Card>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" placeholder="Name" />
          </FormGroup>
          <FormGroup>
            <Label for="phone-number">Phone Number</Label>
            <Input type="text" name="phone-number" id="phone-number" placeholder="Phone number" />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="Email" />
          </FormGroup>
        </Form>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button color="danger">Danger!</Button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
