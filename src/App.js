import React, { Component } from 'react';
import logo from './images/logo.svg';
import './App.css';
import Add from './add';
import { connect } from 'react-redux';
import { addUser, updateUser, deleteUser, editUser } from './actions'
// import RouterExample from './route';
import EmployeeDetails from './employeedetails';
//import DropDownComponent from './dropdowncomponent';
// import TableComponent from './tablecomponent';
// import SearchBar from './searchbar';
import tdata from './data.json';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';

class App extends Component {
  state = {
    displayData: tdata.tdata,
    editView: false,
    uniqueId: '',
    userInfo: {
      "first_name":"",
      "last_name":"",
      "email":""
    }    
  }
  editData(user, index) {
    this.setState({editView:!this.state.editView, userInfo: user, unquieId: index});
  }
  updateUser(user) {
    let updateRow = this.state.displayData;
    updateRow.splice(this.state.unquieId,1, user);
    this.setState({editView:!this.state.editView, displayData:updateRow});    
  }
  addRow(val) {
    this.setState({editView:!this.state.editView,unquieId: val, userInfo:{first_name:'',last_name:'',email:''}});
  }
  deleteRow(user) {
    let deleteUser = this.state.displayData;
        deleteUser.splice(user,1);
    this.setState({displayData: deleteUser});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Welcome to React</h3>
        </div>
        <div>
        {
          this.state.editView ? <Add userInfo={this.state.userInfo} updateUser={this.updateUser.bind(this)}/> : 
          <EmployeeDetails data={this.state.displayData} editData={this.editData.bind(this)} addRow={this.addRow.bind(this)} deleteRow={this.deleteRow.bind(this)}/>
        }
        </div>
      </div>
      );
  }
}
export default App;



// changeGender=(gen)=>{
//   let selectedGender = gen;
//   let selectedData = (selectedGender === 'All') ? tdata.tdata : tdata.tdata.filter(items => items.gender === selectedGender)
//   this.setState({displayData: selectedData, selected: selectedData});    
// }
// dataFilter=(res)=> {
//   let searchedData = res;
//   const firstName = this.state.selected.filter(item => (item.first_name.includes(searchedData) 
//   || item.last_name.includes(searchedData)));
//   this.setState({displayData: firstName});    
// }
// {/* <SearchBar dataFilter={this.dataFilter}/>
// <DropDownComponent changeGender={this.changeGender}/>
// <TableComponent data={this.state.displayData}/> */}