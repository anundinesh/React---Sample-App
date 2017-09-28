import React, { Component } from 'react';
import PropTypes from 'prop-types';

const DropDownComponent = ({gender, changeGender}) => {
    const selectGender = (event) => {
        changeGender(event.target.value);
    };
    return (
    <div>
        <label>Gender</label>
        <select onChange={selectGender} defaultValue="All">
            {gender.map((label, i) => <option value={label} key={label}> {label} </option>  )}       
        </select>
    </div>
    );
}
DropDownComponent.propTypes = { gender: PropTypes.array, changeGender: PropTypes.func };
DropDownComponent.defaultProps = { gender: ['Male', 'Female','All'] };

export default DropDownComponent;


// class DropDownComponent extends Component {
//   constructor(props) {
//     super(props) 
//       this.state = {
//         gender: [ 'All','Male', 'Female']
//       }
//        this.selectGender = this.selectGender.bind(this);
//   }
//   selectGender(e) {
//     this.props.changeGender(e.target.value);
//   }
//   render() {
//     return (
//       <div className="container-fluid">
//         <div className="Column-padding">
//           <label>Gender</label> {' '}
//           <select onChange={this.selectGender} >
//             {this.state.gender.map((label, i) =>{
//               return (
//                 <option value={label} key={label}> {label} </option>
//               )
//             })}       
//           </select>
//         </div>
//       </div>
//     );
//   }
// }

// {/* <h1>{this.state.gender}</h1> */}
// {this.state.gender.map((res) => {
//   if(res === 'Male') {
//     filterTable = this.state.mDetails;
//   } else {
//     filterTable = this.state.fDetails;
//   }
//   return <div className="col-md-6 col-sm-12 col-xs-12" key={res}>
//     <h1>{res}</h1>
//     <TableComponent gend={res} data={filterTable}/>
//   </div>
// })}

