import React, { Component } from 'react';
import { Input, Label,Table } from 'reactstrap';
import Button from '@material-ui/core/Button'


class LoginForm extends Component {


  render() {
    return (
      <div className="col-md-6 offset-md-3 mt-5 text-center">
        <div className="card">
         <h4 className="card-header">Login Form</h4>
         <div className="card-body">

        <Table>
                   <tr>
                        <td><Label id="lb-username">Username: </Label></td>

                        <td><Input id="input-username"  type="text"> </Input></td> </tr>
                        <tr>
                        <td><Label id="lb-password">Password: </Label></td>

                        <td><Input id="input-password" type="password"> </Input></td> </tr>
                        <tr><Button id="login-btn">LogIn</Button></tr>

                    </Table>
                    </div>
                </div>
      </div>
    );
  }
}

export default LoginForm;
