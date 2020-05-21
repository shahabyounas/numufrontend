import React from "react"
const users = [
  {
    passion: "ali",
    hobby: "cricket",
    year: 2010
  },
  {
    passion: "ali",
    hobby: "cricket",
    year: 2010
  },
  {
    passion: "ali",
    hobby: "cricket",
    year: 2010
  },
  {
    passion: "ali header",
    hobby: "cricket",
    year: 2010
  }
]
const Hobby = () => {
  return (
    <div className="hobby-section">
      <div className="table-container">
        <table>
          <thead>
            <th> Passion</th>
            <th> Hobby</th>
            <th> Year</th>
            <th> Add</th>
          </thead>
          <tbody>
            {users.map(user => (
              <tr>
                <td> {user.passion}</td>
                <td> {user.hobby}</td>
                <td> {user.year}</td>
                <td>{"Delete"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Hobby
