import tdata from '../data';

const initialState = {
    displayData: tdata.tdata,
    editView: false,
    uniqueId: '',
    userInfo: {
      "first_name":"",
      "last_name":"",
      "email":""
    } 
}

const user = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_USER':
        return {...state, editView:!this.state.editView, unquieId: action.user, userInfo:{first_name:'',last_name:'',email:''}}    
      case 'UPDATE_USER':
        let updateRow = state.displayData;
            updateRow.splice(state.unquieId, 1, action.user);
        return {...state, editView: false, displayData: updateRow}    
      case 'EDIT_USER':
        return {...state, editView: !state.editView, userInfo: action.user, unquieId: action.index}     
      case 'DELETE_USER':
        let deleteUser = state.displayData;
            deleteUser.splice(action.user,1);
        return {...state, displayData: deleteUser}                          
      default:
        return state
    }
  }
  
  export default user