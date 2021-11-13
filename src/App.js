
import './App.css';
import UserList from './UserList'; 
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setUsers(data);
      })
  }, []);
  return (
    <div className="App">
      {users && <UserList users = {users} title = "All Users!" />}
    </div>
  );
}

export default App;
