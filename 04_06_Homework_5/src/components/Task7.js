import React from 'react'
import { useState, useEffect } from "react";
import AvatarCard from './AvatarCard';


const url = 'https://api.github.com/users';


function Task7() {
    const [content, setContent] = useState([]);
    const getContent = async () => {
        const response = await fetch(url);
        const content = await response.json();
        setContent(content);
    };
    useEffect(() => {
        getContent();
    }, []);

    const printContent = content.map((avatar) => {
        return (
            <AvatarCard
                key={avatar.id}
                imgsrc={avatar.avatar_url}
                name={avatar.login}
            />

        )
    })

    return (
        <div className="container">
            <div className="row">
                {printContent}
            </div>
        </div>

    )

};




export default Task7;