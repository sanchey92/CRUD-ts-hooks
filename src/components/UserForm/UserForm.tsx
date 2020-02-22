import React, {FC, useState, ChangeEvent, FormEvent} from "react";
import {IUser} from "../../interface";

interface IForm {
  addUser: (user: IUser) => void
}

const UserForm: FC<IForm> = ({addUser}) => {

  const initialState: IUser = {id: null, name: '', username: ''};
  const [values, setValue] = useState(initialState);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const {name, value} = event.currentTarget;
    setValue({...values, [name]: value});
  };

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    if (!values.name || !values.username) {
      return;
    }
    addUser(values);
    setValue(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={values.username}
        onChange={handleInputChange}
      />
      <button>Add new user</button>
    </form>
  )
};
export default UserForm
