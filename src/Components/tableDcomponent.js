import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const TableDetails = (data) => {
  const {toggleView} = data;
  const removeRow = param => e => {
    console.log(param)
  }
  const TableRow = (props) =>{
    const {tdata, toggleView} = props;
    return (
      <tr>
        <td>{tdata.first_name} </td>
        <td>{tdata.last_name} </td>
        <td>{tdata.email} </td>
        <td><button onClick={(tdata) => toggleView(tdata)} className="btn btn-default"> Edit </button></td>
        <td><button className="btn btn-default" onClick={removeRow(tdata)}> Delete </button></td>
      </tr>    
    )
  } 
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th> First Name </th>
            <th> Last Name </th>
            <th> Email </th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((res, i) => <TableRow key = {i} tdata = {res}/>)}
        </tbody>
      </table>
    </div>
  );
}

export default TableDetails;

//toggleView={(user) => {toggleView(user)}}