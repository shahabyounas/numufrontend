import React from "react"
import User from "./components/User"
import Hobby from "./components/Hobby"
import "./App.css"

const App = () => {
  return (
    <>
      <div className="container">
        <User />
        <Hobby />
      </div>
    </>
  )
}

export default App
