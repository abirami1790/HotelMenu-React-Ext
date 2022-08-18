import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label,ButtonGroup,Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import MenuList from './MenuList';


class MenuEdit extends Component {

    emptyItem = {
        name: '',
        price: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem,
            menuItems: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.remove = this.remove.bind(this);
    }

    fetchData() {
            return fetch('/menu/all')
                   .then(response => response.json())
                   .then(data => this.setState({menuItems: data}));
        }

    async componentDidMount() {

        this.fetchData();
    }
    async remove(id) {
        await fetch('/menu/delete/'+id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
         window.location.reload();
    }

    async update(id,name,price) {
        const {item} = this.state;
            await fetch('/menu/update', {
                method: 'POST',
                headers: {
                   'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id:item.id,name: item.name,price:item.price })
          })
         window.location.reload();
}

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

async handleSubmit(event) {
    event.preventDefault();
    const {item} = this.state;

    await fetch('/menu/create', {
                   method: 'POST',
                   headers: {
                       'Content-Type': 'application/json'
                   },
                   body: JSON.stringify({ name: item.name,price:item.price })
              })
             window.location.reload();
}

    render() {
        const {item} = this.state;
        const title = <h2>{item.id ? 'Edit Menu' : 'Add/Edit Menu Item'}</h2>;
        const {menuItems} = this.state;

                const menuList = menuItems.map(menuItem => {
                    return <tr key={menuItem.id}>
                     <td style={{whiteSpace: 'nowrap'}}>{menuItem.id}</td>
                        <td style={{whiteSpace: 'nowrap'}}><input type='text' value={menuItem.name}
                        /></td>
                        <td>{menuItem.price}</td>
                        <td>
                            <ButtonGroup>
                                <Button size="sm" color="danger" onClick={() => this.remove(menuItem.id)}>Delete</Button>
                            </ButtonGroup>
                        </td>
                    </tr>
                });

        return <div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
<FormGroup>
                        <Label for="id">Id</Label>
                        <Input type="text" name="id" id="id" value={item.id || ''}
                               onChange={this.handleChange}  autoComplete="id"/>
                    </FormGroup>
                   <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={item.name || ''}
                               onChange={this.handleChange} autoComplete="name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="price">Price</Label>
                        <Input type="text" name="price" id="price" value={item.price || ''}
                               onChange={this.handleChange} autoComplete="price"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Add</Button>{' '}
                        <Button color="dark" type="update" onClick={() => this.update()}>Update</Button>{' '}
                        <Button color="secondary" tag={Link} to="/menuEdit">Cancel</Button>
                    </FormGroup>
                </Form>
              <div>
                              <Container fluid>
                                  <div className="float-right" hidden>
                                      <Button color="success" tag={Link} to="/menu/edit">Add Menu Item</Button>
                                  </div>
                                  <h3 hidden>Menu Item</h3>
                                  <Table className="mt-4">
                                      <thead>
                                      <tr>
                                          <th width="30%">Id</th>
                                          <th width="30%">Item Name</th>
                                          <th width="30%">Item Price</th>
                                          <th width="40%">Delete Item</th>
                                      </tr>
                                      </thead>
                                      <tbody>
                                      {menuList}
                                      </tbody>
                                  </Table>
                              </Container>
                          </div>
            </Container>
        </div>
    }
}

export default withRouter(MenuEdit);