import React, { useState, useEffect } from 'react';
import { UseAddUser } from '../config/firebase';

const InitializeUserData = { id: '', username: '' };
function AddUser() {
  const [user, setUser] = useState(InitializeUserData);
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmitUser = e => {
    e.preventDefault();
    const message = UseAddUser(user.id, user.username);
    setUser(InitializeUserData);
    // console.log(message);
    setMessage(message);
  };

  return (
    <>
      <div>
        <div>
          <label>
            id
            <input
              name="id"
              type="text"
              onChange={handleChange}
              value={user.id}
            />
          </label>
        </div>
        <div>
          <label>
            username
            <input
              name="username"
              type="text"
              onChange={handleChange}
              value={user.username}
            />
          </label>
        </div>

        <div>
          <button onClick={handleSubmitUser}>Ekle</button>
        </div>
        <br />
        <br />
        <br />
        {message}
        <br />
      </div>
    </>
  );
}

export default AddUser;
