import React,{ Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';
import Add from './add';
import EmployeeDetails from './employeedetails';

class RouterExample extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={EmployeeDetails}/>
                    <Route path='/add' component={Add}/>
                    <Route path='/edit/:f/:l/:e' component={Add}/>
                </Switch>
            </div>            
        )
    }
}
// const RouteD = () => (
//     <Router>
//       <Route component={RouterExample} />
//     </Router>
//   )

export default RouterExample;