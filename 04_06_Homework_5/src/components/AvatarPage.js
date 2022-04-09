import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function AvatarPage() {
    let {avatarname} = useParams;
    console.log(avatarname);

    const [content, setContent] = useState([]);
    const getContent = async () => {
        const response = await fetch(`https://api.github.com/users/${avatarname}`);
        const content = await response.json();
        setContent(content);
    };
    useEffect(() => {
        getContent();
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-2">{content.login}</div>
                <div className="col-2">
                    <img src={content.avatar_url} alt=""/>
                </div>
            </div>
        </div>
    );

};


export default AvatarPage;