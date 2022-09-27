import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, uage) => {
    setUsersList((prevUsersList) => {
      return [ ...prevUsersList,{ name: username, age: uage, id:Math.random().toString() }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList}></UsersList>
    </div>
  );

}

export default App;
