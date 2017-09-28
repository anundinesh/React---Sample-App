import React,{ Component } from 'react';
// import {Link} from 'react-router-dom';
// import Add from './add';

class EmployeeDetails extends Component {        
    render() {
        return (             
            <div className="container-fluid">
                <button className="btn-btn-default" onClick={() =>{let val = this.props.data.length;
                    this.props.addRow(val)}} style={{margin:10}}> Add Employee </button>
                <table className="table table-bordered">
                    <tbody>
                        {this.props.data.map((res, i) => 
                            <tr key={i}>
                            <td>{res.first_name} </td>
                            <td>{res.last_name} </td>
                            <td>{res.email} </td>
                            <td><button onClick={() => this.props.editData(res, i)} className="btn btn-default"> Edit </button> </td>
                            <td><button onClick={() => this.props.deleteRow(i)} className="btn btn-default"> Delete </button></td>
                            </tr>   
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default EmployeeDetails;

// tableData = (val) => {
//     let row = this.state.data;
//     val.map((data, i) => {
//         row.push(data);
//     });
//     this.setState({data: row});
// } 
//toggleView={(user) => this.props.toggleView(user)} 

// = (data, editData) => {
//     const editRow = param => e => {
//       console.log(param)
//       editData(param)
//     }
//     const TableRow = (props) => {
//       const {tdata, toggleView} = props;
//       return(
//         <tr>
//           <td>{tdata.first_name} </td>
//           <td>{tdata.last_name} </td>
//           <td>{tdata.email} </td>
//           <td><button onClick={editRow(tdata)} className="btn btn-default"> Edit </button> </td>
//           <td><button className="btn btn-default"> Delete </button></td>
//         </tr>    
//       )
//     }
//     return (
//       <div>
//         <table className="table table-bordered">
//           <tbody>
//             {data.data.map((res, i) => <TableRow key = {i} tdata = {res}/>)}
//           </tbody>
//         </table>
//       </div>
//     );
//   }