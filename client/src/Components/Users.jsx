import React from 'react';
import { useState } from 'react';
import DeleteUser from './DeleteUser';

// users data - eventually will store in a database
const marlin = { name: 'Marlin', email: 'marlin@gmail.com', id: '1' };
const nemo = { name: 'Nemo', email: 'nemo@gmail.com', id: '2' };
const dory = { name: 'Dory', email: 'dory@gmail.com', id: '3' };

const Users = () => {
    const [users, setUsers] = useState([marlin, nemo, dory])
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [email, setEmail] = useState('')

    // add the user object to the users list and reset input fields after submitting
    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { id: id, name: name, email: email };
        setUsers([...users, newUser]);
        setName('');
        setId('');
        setEmail('');
    };

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