const authReducer = (state, action) => {

    console.log({state, action})

    switch (action.type) {
      case 'set-authenticated':
        return { ...state, authenticated: action.authenticated }
      default:
        return state
    }
  }
  
  export default authReducer