import React, {FC, useState, useEffect, ChangeEvent, FormEvent} from "react";
import {IUser} from "../../interface";

interface IEditForm {
  editing: boolean,
  setEditing: (bol: boolean) => void,
  currentUser: IUser,
  updateUser: (id: number, updatedUser: IUser) => void
}

const EditUserForm: FC<IEditForm> = ({editing, currentUser, setEditing, updateUser}) => {
  const [user, setUser] = useState(currentUser);


  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;

    setUser({...user, [name]: value})
  };
  useEffect(
    () => {
      setUser(currentUser)
    }, [currentUser]
  );

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!user.name || !user.username) {
      return
    }
    updateUser(user.id!, user)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button>Update user</button>
      <button
        onClick={() => setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  )
};

export default EditUserForm
