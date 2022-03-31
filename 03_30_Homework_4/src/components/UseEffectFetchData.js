import React from 'react'
import { useState, useEffect } from "react";

const url = 'https://api.github.com/users'

const UseEffectFetchData = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        console.log(users);
        setUsers(users);
    };
    useEffect(() => {
        getUsers();
    }, []);
    return <div> {users.map(user => { return <img src={user.avatar_url} /> })}</div>;
    // return <div>Labas {JSON.stringify(users[2])}</div>;
};

export default UseEffectFetchData;