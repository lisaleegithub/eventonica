import React, { useEffect, useState } from 'react';
import DeleteUser from './DeleteUser';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [email, setEmail] = useState('')

    // console.log('users', users);

    const getUsers = () => {
        fetch('http://localhost:4000/users')
          .then((res) => res.json())
          .then((res) => setUsers(res.users));
      };
      
      useEffect(() => {
        // useEffect will run getUsers() every time this component loads, 
        // as opposed to just the first time it is rendered.
        getUsers();
      }, []);

    // addUser() adds new user to the users list
    const handleSubmit = (e) => {
        e.preventDefault();
        addUser();
    };

    const addUser = () => {
        const newUser = { id: id, name: name, email: email };
        fetch("http://localhost:4000/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            // body data type must match content-type
            // convert to a JSON string
            body: JSON.stringify(newUser),
        })
        // json() method of response returns a
        // promise which resolves with the result of
        // parsing the body text as JSON
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        // if success, do the following
            setUsers([...users, newUser])
            setName('');
            setId('');
            setEmail('');
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    }

    // delete the user object with the id from the users list
    const handleDeleteUser = (deleteId) => {
        const newUsers = users.filter((i) => i.id !== deleteId);
        setUsers(newUsers);
      };

    return (
    <section className="user-management">
        <h2>User Management</h2>

        <ul id="users-list">
            {users.map((user) => <li key={user.id}>{user.name}: {user.email}</li>)}
        </ul>

        <div>
            <h3>Add User</h3>
            <form id="add-user" action="#" onSubmit={handleSubmit}>
                <fieldset>
                    <label>Name</label>
                    <input type="text" id="add-user-name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
                </fieldset>

                <fieldset>
                    <label>ID</label>
                    <input type="number" id="add-user-id" 
                    value={id}
                    onChange={(e) => setId(e.target.value)}/>
                </fieldset>
                
                <fieldset>
                    <label>Email</label>
                    <input type="email" id="add-user-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                </fieldset>
                <input type="submit" value="Add" />
            </form>
        </div>

        <DeleteUser handleDeleteUser={handleDeleteUser} />

    </section>
    )
}
export default Users;