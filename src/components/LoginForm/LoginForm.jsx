import React, { Fragment, Component } from 'react';
import Button from '../../UI/Btn/Btn';
import Input from '../../UI/Input/Input';

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        currentUser: '',
        message: ''
    }

    handleChange = (event) => {
        const {name,value} = event.target;
        
        console.log(name,value);
    }

    handleClick = (event) => {
        
        
    }

    render() {
        return (
            <Fragment>
                <Input label="Email" required="true" onChange={this.handleChange} />
                <Input label="Password" required="true" onChange={this.handleChange} type="password" />
                <Button color="primary" click={this.handleClick}>Login</Button>
            </Fragment>
        )
    }
}

export default LoginForm;