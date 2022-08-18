import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class CartList extends Component {

    constructor(props) {
        super(props);
        this.state = {cartItems: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/cart/all')
            .then(response => response.json())
            .then(data => this.setState({cartItems: data}));
    }

    async remove(id) {
        await fetch('/CartList/delete', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedClients = [...this.state.cartItems].filter(i => i.id !== id);
            this.setState({cartItems: updatedClients});
        });
    }

    render() {
        const {cartItems} = this.state;

        const cartList = cartItems.map(cartItem => {
            return <tr key={cartItem.id}>
                <td style={{whiteSpace: 'nowrap'}}>{cartItem.name}</td>
                <td>{cartItem.quantity}</td>
                <td>{cartItem.price}</td>
            </tr>
        });

        return (
            <div>
                <Container fluid>
                    <h3>Cart Item</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="30%">Item Name</th>
                            <th width="30%">Item Qty</th>
                            <th width="40%">Item Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cartList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default CartList;