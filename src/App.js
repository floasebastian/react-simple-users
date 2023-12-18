import { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';
import Jumbotron from './Jumbotron';

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <Jumbotron />
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;
