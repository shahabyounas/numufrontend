export const initialState = {
  users: {
    data: []
  }
}

 const rootReducer = (state = initialState, action) => {
     console.log("action---", action)
  switch (action.typle) {
    case "add_user":
      return {
        ...state,
        users: {
          ...state.users
        }
      }
  }
}

export default rootReducer


