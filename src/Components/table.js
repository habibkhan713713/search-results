import React from 'react'

export default class Table extends React.Component {
  render() {
    return (
      <div> <table className='table mb-0'>
         <thead>
          <tr>
            <th scope="col">BOOK ID</th>
            <th scope="col">BOOK Name</th>
            <th scope="col">Author Name</th>
            <th scope="col">Genre</th>
            <th scope="col">Copies</th>
          </tr>
        </thead>
        </table>
      </div>
    )
  }
}
