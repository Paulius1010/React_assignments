import React from 'react'
import { useState, useEffect } from "react";


const url = 'https://jsonplaceholder.typicode.com';

// let data = [
//     {
//         id: 1,
//         content: "/posts",
//     },
//     {
//         id: 2,
//         content: "/comments",
//     },
//     {
//         id: 3,
//         content: "/albums",
//     },
//     {
//         id: 4,
//         content: "/photos",
//     },
//     {
//         id: 5,
//         content: "/todos",
//     },
//     {
//         id: 6,
//         content: "/users",
//     }
// ];


function Task6Button(props) {
    let { id, rout } = props;

    const [routing, setRouting] = useState({ rout });

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

    const arrayLength = content.length;

    return (
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <div className="col-2"><button onClick={() => setRouting({ rout })} type="button" >{rout}</button></div>
                    <p> Content length:  {arrayLength} ({rout})</p>
                </div>

            </div>
        </div>
    );
}

export default Task6Button;