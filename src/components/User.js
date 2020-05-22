import React from "react"
import { connect } from "react-redux"
import { addUserAction } from "../actions"
const users = [
  {
    name: "ali"
  },
  {
    name: "ahmed"
  },
  {
    name: "ali"
  },
  {
    name: "ahmed"
  }
]
const User = userProps => {
  return (
    <div className="users-section">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th> Enter User Name</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr>
                <td> {user.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}



function mapDispatchToProps(dispatch, ownProps) {
  return {
    addUserAction(payload) {
      dispatch(addUserAction(payload))
    }
  }
}

export default connect( mapDispatchToProps)(User)
