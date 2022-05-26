import React from 'react';
import { useRef } from 'react';

const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();

    const handleAddUser = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const newUser = { name, email };

        fetch('http://localhost:5000/users', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Inserted Successfully");
                    e.target.reset();
                }
            })
        e.preventDefault();
    }


    return (
        <div>
            <h2>Please Add User</h2>

            <form onSubmit={handleAddUser}>
                <input type="text" placeholder='Name' ref={nameRef} />
                <input type="email" name="" id="" placeholder='Your Email' ref={emailRef} />
                <input type="submit" value="submit" />
            </form>

        </div>
    );
};

export default AddUser;