import { useState } from "react";

import "./App.css";
import UsersList from "./components/UsersList";
import Modal from "./components/Modal";

function App() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleClick = () => {
    setIsModalOpen(true);
  };
  const handleSubmit = (newUser) => {
    if (!editingUser) {
      setUsers((prev) => [...prev, newUser]);
    } else {
      const findUser = users.filter((user) => user.id === newUser.id);
      setUsers((prev) =>
        prev.map((user) => (user === findUser ? newUser : user)),
      );
    }
  };
  return (
    <div className="app">
      <nav className="navbar">
        <input
          type="text"
          value={searchQuery}
          placeholder="search user"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add User</button>
      </nav>
      <UsersList users={users} />
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} onSubmit={handleSubmit} />
      )}
    </div>
  );
}

export default App;
