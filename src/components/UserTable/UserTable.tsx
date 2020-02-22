import React, {FC} from "react";
import {IUser} from "../../interface";

interface ITable {
  users: Array<IUser>,
  onDelete: (id: number) => void,
  editRow: (user: IUser) => void
}

const UserTable: FC<ITable> = ({users, onDelete, editRow}) => {
  return (
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      {users.length > 0 ? (
        users.map(user => (
          <tr key={user.id!}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button
                onClick={() => editRow(user)}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(user.id!)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
      </tbody>
    </table>
  )
};

export default UserTable;
