import React, {Component} from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({dataFilter, filter}) => {
    const searchFilter = (event) => {
        let val = event.target.value
        {filter: val};
        dataFilter(val);        
    }
    return (
        <div>
        <label>Search</label> 
        <input type="text" placeholder="Search" value={filter} onChange={searchFilter}/>
       </div>         
    )
}

SearchBar.propTypes = { dataFilter: PropTypes.func, filter: PropTypes.string };
SearchBar.defaultValue = {filter: ''};

export default SearchBar;

// class SearchBar extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             filter: ''
//         }
//         this.searchFilter = this.searchFilter.bind(this);
//     }
//     searchFilter(e) {
//         let val = e.target.value
//         this.setState({filter: val});
//         this.props.dataFilter(val);
//     }
//     render() {
//         return (
//            <div>
//             <label>Search</label> 
//             <input type="text" placeholder="Search" value={this.state.filter} onChange={this.searchFilter}/>
//            </div>
//         )
//     }
// } 
