import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../slices/userSlice";

const Users = () => {
  const users = useSelector((state) => state.usersInfo.users);
  const dispatch = useDispatch();
  console.log(users);

  const deleteUserInfo = (index) => {
    dispatch(deleteUser(index));
  };

  return (
    <div>
      {users?.map((user, index) => {
        return (
          <div key={index}>
            <h1>{user.name}</h1>
            <h2>{user.age}</h2>
            <h2>{user.email}</h2>
            <h2>{user.contact}</h2>
            <button onClick={() => deleteUserInfo(index)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
