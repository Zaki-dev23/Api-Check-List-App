import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function UserList() {
    const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => setListOfUsers(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="user-list-container">
            <h1 className="user-list-heading">List of Users</h1>
            <ul className="user-list">
                {listOfUsers.map(userd => (
                    <li key={userd.id} className="user-list-item">
                        <span className='img'>
                            <span className='tete1'></span>
                            <span className='tete'></span>
                        </span>
                        <p>{userd.name}</p>
                        <br /><span>{userd.username}</span>
                        <br /><select placeholder="Plus d'information">
                            <option>Plus d'information...</option>
                            <option> <span className='titleOption'>Email :</span> {userd.email}</option>
                            <option>Address street : {userd.address.street}</option>
                            <option>Address city :{userd.address.city}</option>
                            
                        </select>
                    </li>

                ))}
            </ul>

        </div>
    );
}

export default UserList;