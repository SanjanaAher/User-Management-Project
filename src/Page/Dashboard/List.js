import React from "react";
import "./List.css";
import Pop from './Popup'

function List({ user, handleEdit, handleDelete }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan={2} className="text-center">
              No.{" "}
            </th>
            <th colSpan={4} className="text-center">
              First Name
            </th>
            <th colSpan={4} className="text-center">
              Last Name
            </th>
            <th colSpan={2} className="text-center">
              Email
            </th>
            <th colSpan={8} className="text-center">
              Status
            </th>
            <th colSpan={7} className="text-center">
              Role
            </th>
            <th colSpan={4} className="text-center">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {user.length > 0 ? (
            user.map((use, i) => (
              <tr colSpan={3} key={use.id}>
                <td colSpan={2}>{i + 1}</td>
                <td colSpan={4}>
                  {use.firstname ? use.firstname : use.updatefirstname}
                </td>
                <td colSpan={4}>
                  {use.lastname ? use.lastname : use.updatelastname}
                </td>
                <td colSpan={2}>{use.email ? use.email : use.updateemail}</td>
                <td colSpan={8}>
                  {use.status ? use.status : use.updatestatus}
                </td>
                <td colSpan={7}>{use.role ? use.role : use.updaterole}</td>
                <td className="action-btn" colSpan={2}>
                  <button
                    className="button2"
                    onClick={() => handleEdit(use.id)}
                  >
                    Edit
                  </button>
                </td>
                <td className="action-btn" colSpan={2}>
                  {/* <button className='button2' onClick={()=>handleDelete(use.id)}>Delete</button> */}
                 <Pop  handleDelete = {handleDelete} id={ use.id } />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Employees</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default List;
