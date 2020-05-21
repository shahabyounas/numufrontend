import React from "react"
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
const User = () => {
  return (
    <div className="users-section">
      <div className="table-container">
        <table>
          <thead>
            <th> Enter User Name</th>
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

export default User
