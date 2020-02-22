import React, {FC, useState} from "react";
import UserForm from "../UserForm/UserForm";
import UserTable from "../UserTable/UserTable";
import {IUser} from "../../interface";
import EditUserForm from "../EditUserForm/EditUserForm";

const App: FC = () => {

  const userData: Array<IUser> = [
    {id: 1, username: 'Anka', name: 'Anna'},
    {id: 2, username: 'Sanchey', name: 'Alexandr'},
  ];

  const [users, setUsers] = useState<IUser[]>(userData);
  const [editing, setEditing] = useState<boolean>(false);
  const initialFormState: IUser = {id: null, username: '', name: ''};
  const [currentUser, setCurrentUser] = useState<IUser>(initialFormState);

  const addUser = (user: IUser): void => {
    user.id = users.length + 1;
    setUsers([...users, user])
  };

  const deleteUser = (id: number): void => {
    setEditing(false);
    setUsers(users.filter(el => el.id !== id))
  };

  const updateUser = (id: number, updatedUser: IUser): void => {
    setEditing(false);
    setUsers(users.map(user => user.id === id ? updatedUser : user))
  };

  const editRow = (user: IUser) => {
    setEditing(true);
    setCurrentUser({id: user.id, name: user.name, username: user.username})
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            editing
              ? (
                <div>
                  <h2>Edit user</h2>
                  <EditUserForm
                    editing={editing}
                    setEditing={setEditing}
                    currentUser={currentUser}
                    updateUser={updateUser}
                  />
                </div>
              )
              : (
                <div>
                  <h2>Add user</h2>
                  <UserForm addUser={addUser}/>
                </div>
              )
          }
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable
            editRow={editRow}
            users={users}
            onDelete={deleteUser}
          />
        </div>
      </div>
    </div>
  )
};

export default App;
