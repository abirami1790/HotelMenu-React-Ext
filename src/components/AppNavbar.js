import React, {Component} from 'react';
import {Navbar, NavbarBrand, NavItem} from 'reactstrap';
import {Link} from 'react-router-dom';

export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return <Navbar color="dark" dark expand="md">
            <NavbarBrand tag={Link} to="/">Hotel Menu</NavbarBrand>
            <NavbarBrand tag={Link} to="/">Help</NavbarBrand>
            <NavbarBrand tag={Link} to="/">Sign In</NavbarBrand>
            <NavbarBrand tag={Link} to="/">Cart</NavbarBrand>
        </Navbar>;
    }
}