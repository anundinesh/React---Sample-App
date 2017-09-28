export const addUser = user => {
    return {
      type: 'ADD_USER',
      user
    }
  }

export const updateUser = user => {
  return {
    type: 'UPDATE_USER',
    user
  }
}  

export const editUser = ({user, value}) => {
  return {
    type: 'EDIT_USER',
    user,
    value
  }
} 

export const deleteUser = user => {
    return {
      type: 'DELETE_USER',
      user
    }
} 

