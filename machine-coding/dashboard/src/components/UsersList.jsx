import React from "react";

const UsersList = ({ users }) => {
  return (
    <main>
      {users?.map((user) => (
        <div>{user.name}</div>
      ))}
    </main>
  );
};

export default UsersList;
