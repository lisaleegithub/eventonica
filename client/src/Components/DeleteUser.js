import React from "react";
import { useState } from "react";

const DeleteUser = ({ handleDeleteUser }) => {
    const [deleteId, setDeleteId] = useState('');

    return (
        <div>
            <h3>Delete User</h3>
            <form id="delete-user" action="#" 
            onSubmit={(e) => {
                e.preventDefault();
                handleDeleteUser(deleteId);
                setDeleteId('');
                }}
            >
                <fieldset>
                    <label>User ID</label>
                    <input type="number" id="delete-user-id"
                    value={deleteId}
                    onChange={(e) => setDeleteId(e.target.value)} />
                </fieldset>
                <input type="submit" />
            </form>
        </div >
    )
}

export default DeleteUser;