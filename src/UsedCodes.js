import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DropDownComponent from './dropdowncomponent';
import TableComponent from './tablecomponent';
import SearchBar from './searchbar';
import tdata from './data.json';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// const App = () => (
//   <Router>
//     <div>
//       <h2>Accounts</h2>
//       <ul>
//         <li><Link to="/netflix">Netflix</Link></li>
//         <li><Link to="/zillow-group">Zillow Group</Link></li>
//         <li><Link to="/yahoo">Yahoo</Link></li>
//         <li><Link to="/modus-create">Modus Create</Link></li>
//       </ul>

//       <Route path="/:id" component={Child}/>
//     </div>
//   </Router>
// )


// const Child = ({ match }) => (
//   <div>
//     <h3>ID: {match.params.id}</h3>
//   </div>
// )

export default App;

class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
      displayData: tdata.tdata,
      selected : ''
      }
      this.changeGender = this.changeGender.bind(this);
      this.dataFilter = this.dataFilter.bind(this);
    }
    changeGender(gen){
      let selectedGender = gen;
      let selectedData = (selectedGender === 'All') ? tdata.tdata : tdata.tdata.filter(items => items.gender === selectedGender)
      this.setState({displayData: selectedData, selected: selectedData});    
    }
    dataFilter(res) {
      let searchedData = res;
      const firstName = this.state.selected.filter(item => (item.first_name.includes(searchedData) 
      || item.last_name.includes(searchedData)));
      this.setState({displayData: firstName});    
    }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Welcome to React</h3>
        </div>
        <div>
          <SearchBar dataFilter={this.dataFilter}/>
          <DropDownComponent changeGender={this.changeGender}/>
          <TableComponent data={this.state.displayData}/>
        </div>
      </div>
      );
  }
}
