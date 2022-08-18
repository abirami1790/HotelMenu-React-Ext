import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class MenuList extends Component {

    constructor(props) {
        super(props);
        this.state = {menuItems: []};
        this.remove = this.remove.bind(this);
    }

    fetchData() {
        return fetch('/menu/all')
               .then(response => response.json())
               .then(data => this.setState({menuItems: data}));
    }

    componentDidMount() {
        this.fetchData();
        }

    async remove(id) {
        await fetch('/cart/delete/'+id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
         window.location.reload();
    }

     async add(menuItem) {
          await fetch('/cart/add', {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json'
               },
               body: JSON.stringify({ id: menuItem.id,name:menuItem.name,quantity:1,price:menuItem.price })
          })
         window.location.reload();
     }



    render() {
        const {menuItems} = this.state;

        const menuList = menuItems.map(menuItem => {
            return <tr key={menuItem.id}>
                <td style={{whiteSpace: 'nowrap'}}>{menuItem.name}</td>
                <td>{menuItem.price}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" onClick={() => this.add(menuItem)}>+1</Button>

                        <Button size="sm" color="danger" onClick={() => this.remove(menuItem.id)}>-1</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <Container fluid>
                    <div className="float-right" hidden>
                        <Button color="success" tag={Link} to="/menu/edit">Add Menu Item</Button>
                    </div>
                    <h3 hidden>Menu Item</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="30%">Item Name</th>
                            <th width="30%">Item Price</th>
                            <th width="40%">Add to cart</th>
                        </tr>
                        </thead>
                        <tbody>
                        {menuList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default MenuList;