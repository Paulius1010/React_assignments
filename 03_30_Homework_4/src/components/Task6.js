import React from 'react'
import Task6Button from './Task6Button';
import { useState, useEffect } from "react";

const url = 'https://jsonplaceholder.typicode.com';

let data = [
    {
        id: 1,
        rout: "/posts",
    },
    {
        id: 2,
        rout: "/comments",
    },
    {
        id: 3,
        rout: "/albums",
    },
    {
        id: 4,
        rout: "/photos",
    },
    {
        id: 5,
        rout: "/todos",
    },
    {
        id: 6,
        rout: "/users",
    }
];

function Task6() {
    const [routing, setRouting] = useState('posts');

    let newUrl = new URL("/", url)
    newUrl = new URL(routing, url)
    console.log(routing)
    const [content, setContent] = useState([]);
    const getContent = async () => {
        const response = await fetch(newUrl);
        const content = await response.json();
        console.log(content);
        setContent(content);
    };
    useEffect(() => {
        getContent();
    }, [routing]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-2"><button onClick={() => setRouting('posts')} type="button" >Posts</button></div>
                <div className="col-2"><button onClick={() => setRouting('comments')} type="button" >Comments</button></div>
                <div className="col-2"><button onClick={() => setRouting('albums')} type="button" >Albums</button></div>
                <div className="col-2"><button onClick={() => setRouting('photos')} type="button" >Photos</button></div>
                <div className="col-2"><button onClick={() => setRouting('todos')} type="button" >Todos</button></div>
                <div className="col-2"><button onClick={() => setRouting('users')} type="button" >Users</button></div>
                {/* <div className="row" >{button}</div> */}
            </div>
            <p>{content.length} {routing}</p>
        </div>
    );

};

const button = data.map((link) => {
    return (
        <Task6Button
            key={link.id}
            id={link.id}
            rout={link.rout}
        />
    );
});

export default Task6;