import React, { Component } from 'react';

const TableComponent = (data) => {
  const editRow = param => e => {
    console.log(param)
  }
  const TableRow = (props) => {
    const {tdata, toggleView} = props;
    return(
      <tr>
        <td>{tdata.first_name} </td>
        <td>{tdata.last_name} </td>
        <td>{tdata.email} </td>
        <td><button onClick={editRow(tdata)} className="btn btn-default"> Edit </button> </td>
        <td><button className="btn btn-default"> Delete </button></td>
      </tr>    
    )
  }
  return (
    <div>
      <table className="table table-bordered">
        <tbody>
          {data.data.map((res, i) => <TableRow key = {i} tdata = {res}/>)}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;

// /* Table component used for displaying the table */
// class TableComponent extends Component {
//   render() {
//     return (
//       <div>
//         <table className="table table-bordered">
//           <tbody>
//           {this.props.data.map((data, i) => <TableRow key = {i} tdata = {data}/>)}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// /* Table Row component is for defining the row */
// class TableRow extends Component {
//   render() {
//     return (
//       <tr>
//         <td>{this.props.tdata.first_name} </td>
//         <td>{this.props.tdata.last_name} </td>
//         <td>{this.props.tdata.email} </td>
//         <td>{this.props.tdata.gender} </td>
//         <td>{this.props.tdata.ip_address} </td>
//       </tr>
//     )
//   }
// }

/* Component used for table header  val= {this.props.objectKeys}*/
// class TableHeader extends Component {
//   render() {
//     return (
//         <th> {this.props.head}</th>
//     )
//   }
// }
// <thead>
// <tr>
//   {this.props.theader.map((header,i) => {
//     return (
//       <TableHeader head={header} key={header}/>
//     )
//   })}
// </tr>
// </thead>
// {this.props.val.map((label, i) => {
//   return (
//     <td key={i}> {this.props.tdata[label]}</td>
//   )
// })}
// <FilterGender data={this.props.data} gen={this.props.gend}/>
// function FilterGender(props) {
//   const genderCombo = props.data;
//   const listItems = genderCombo.map((data, i) => {
//     if(data.gender === props.gen) {
//       return (
//         <ul className="bor" key={i}>
//         <li>FIRST NAME: {data.first_name}</li>
//         <li>LAST NAME: {data.last_name}</li>
//         <li>EMAIL: {data.email}</li>
//         <li>GENDER: {data.gender}</li>
//         <li>IP ADDRESS: {data.ip_address}</li>
//         </ul>
//       )
//     }
//   });
//   return (
//     <div>{listItems}</div>
//   );
// }
