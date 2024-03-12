"use client"

import { useEffect, useState } from 'react';

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://testt-back-1d3ffaa1ca20.herokuapp.com/',{
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                setUsers(data);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.username}>{user.username},{user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default UsersPage;
