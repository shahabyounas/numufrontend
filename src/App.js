import React, { Component } from "react"
import User from "./components/User"
import Hobby from "./components/Hobby"
import { connect } from "react-redux"
import { addUserAction } from "./actions"
import store from "./store"
import "./App.css"

export class App extends Component {
  componentDidMount() {
    store.dispatch(addUserAction())
  }

  render() {
    return (
      <>
        <User {...this.props} />
        <Hobby {...this.props} />
      </>
    )
  }
}

const mapStateToProps = props => {
  return { ...props }
}
export default connect(mapStateToProps, {})(App)
