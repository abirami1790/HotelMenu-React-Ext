import React, { Component } from 'react';
import './../App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import MenuList from './MenuList';
import CartList from './CartList';

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <Button color="warning"><Link to="/menu">Menu</Link></Button>
                    <MenuList/>
                    <CartList/>
                </Container>
            </div>
        );
    }
}

export default Home;