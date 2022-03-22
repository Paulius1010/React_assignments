import React from 'react'
import PostContent from './PostContent';
import { useState } from "react";

let data = [
    {
        id: 1,
        content: "Aš mokausi HTML",
        img: "https://miro.medium.com/max/996/1*5gJzummAqpBDGATo0fjU6Q.jpeg",
        status: false,

    },
    {
        id: 2,
        content: "Aš mokausi CSS",
        img: "https://www.thatsoftwaredude.com/images/post/random-code.jpg",
        status: false,

    },
    {
        id: 3,
        content: "Aš mokausi JavaScript",
        img: "https://res.cloudinary.com/practicaldev/image/fetch/s--eXgVdE2K--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/ux6uf870i7esod0sx4sw.png",
        status: false,

    }
];

function Task4() {
    const [posts, setPosts] = useState(data);

    function changeStatus(id) {
        const updatePosts = [...posts];
        updatePosts.forEach((post) => {
            if (post.id == id) {
                post.status = true;
            }
        });
        setPosts(updatePosts);
    }

    const postsList = data.map((post) => {
        return (
            <PostContent
                id={post.id}
                content={post.content}
                img={post.img}
                status={post.status}
                changeStatus={changeStatus}
            />
        );
    });
    return <div className="row" >{postsList.length ? postsList : "EMPTY :("}</div>;

}




export default Task4