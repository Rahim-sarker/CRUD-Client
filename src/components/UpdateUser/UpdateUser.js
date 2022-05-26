import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';


const UpdateUser = () => {

    const { id } = useParams();
    const [user, setuser] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/users/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setuser(data))
    }, []);

    //Update Users
    const handleNameChange = e => {
        const UpdatedName = e.target.value;
        const updateUsers = { name: UpdatedName, email: user.email };
        setuser(updateUsers);
    }

    const handleEmailChange = e => {
        const UpdatedEmail = e.target.value;
        const UpdateUserEmail = { name: user.name, email: UpdatedEmail }
        setuser(UpdateUserEmail);
    }

    const handleUpdateUser = e => {
        const url = `http://localhost:5000/users/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Updated Successfully");
                    setuser({});
                }
            })

        e.preventDefault();
    }

    return (
        <div>
            <h2>Update {user.name} :: {user.email} </h2>
            <p>{id}</p>

            <form onSubmit={handleUpdateUser}>
                <input type="text" onChange={handleNameChange} value={user.name || ''} />
                <input type="email" onChange={handleEmailChange} name="" id="" value={user.email || ''} />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateUser;