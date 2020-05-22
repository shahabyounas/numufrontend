import App from "./App"

const axios = require("axios").default
const API = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 1000,
    headers: {'Content-Type': 'application/json'}
  })

const { addUserAction, addHobby, editHobby, deleteHobby } = require("./actions")


export const cacheMiddleware = store => next => async action => { 
    console.log("actions ----", action)
    switch(action.type) {
        case "add_user": {
            const state = store.getState()
            API.get("/users").then( users => {
                console.log(users.data)
                store.dispatch(addUserAction(users.data.data))
            })
        }
     break
    }
    return next(action)
}