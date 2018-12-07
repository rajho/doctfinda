import React, { Component } from 'react';
import './App.css';
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

        <Form>
          <Card>
            <CardHeader>Basic Information</CardHeader>
            <CardBody>
              
                <FormGroup>
                  <Label for="name" className="App-label">Name</Label>
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
            </CardBody>     
          </Card>

          <Card>
            <CardHeader>Location</CardHeader>
            <CardBody>            
                <FormGroup>
                  <Label for="city" className="App-label">City</Label>
                  <Input type="text" name="city" id="city" placeholder="Search places" />
                </FormGroup>                    
            </CardBody>     
          </Card>     

          <Card>
            <CardBody className="tos">            
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="tos" id="tos"/>
                  I accept the terms of service
                </Label>
              </FormGroup>
            </CardBody>

          </Card>

        </Form>        
      </div>
    );
  }
}

export default App;
