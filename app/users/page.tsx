import React from "react";

interface Users {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: Users[] = await response.json();

  return (
    <>
      <p>Date: {new Date().toLocaleDateString()}</p>
      <p>Time: {new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
