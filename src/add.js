import React,{Component} from 'react';
import InputComponent from './Components/inputcomponent';
import { connect } from 'react-redux';
import { addUser, updateUser, editUser } from './actions'
// import {Link} from 'react-router-dom';
// import App from './App';

class Add extends Component {
    state = {
        formValues: {
            first_name: this.props.userInfo.first_name,
            last_name: this.props.userInfo.last_name,
            email: this.props.userInfo.email,
            id:this.props.userInfo.id
        }
    }
    handleChange=(e) => {
        let formValues = this.state.formValues;
        let name = e.target.name;
        let value = e.target.value;
        
        formValues[name] = value;
        this.setState({formValues});
    }
    render() {
        return (
            <form className="container" onSubmit={() => this.props.updateUser(this.state.formValues)}>
                <InputComponent inputType={'text'} title= {'First Name'}
                    name={'first_name'} controlFunc={this.handleChange}
                    content={this.state.formValues["first_name"]} placeholder={'First Name'}/>
                <InputComponent inputType={'text'} title= {'Last Name'} 
                    name={'last_name'} controlFunc={this.handleChange}
                    content={this.state.formValues["last_name"]} placeholder={'Last Name'}/>
                <InputComponent inputType={'text'} title= {'Email'}
                    name={'email'} controlFunc={this.handleChange} 
                    content={this.state.formValues["email"]} placeholder={'Email Address'}/>                                            
                <input type="submit" className="btn btn-default" value="Save"/>
                <button className="btn btn-default" style={{marginLeft:20}}>Cancel</button>
            </form>                                     
        )
    }
}

export default Add;