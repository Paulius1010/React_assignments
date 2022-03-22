import React from 'react'

function PostContent(props) {
    let { id, content, img, status, changeStatus } = props;

    return (
        <div className="col-4">

            <img src={img} alt={content} className="img-fluid" />
            <p>{content}</p>
            <p>{status ? "Išmokau" : "Mokausi"}</p>
            <button onClick={() => changeStatus(id)} className="btn btn-light">OK</button>
        </div>
    );
}

export default PostContent