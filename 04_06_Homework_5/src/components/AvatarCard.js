import React from 'react';
import { useNavigate } from "react-router-dom";

function AvatarCard(props) {

    let { key, imgsrc, name } = props;
    let navigate = useNavigate();
    return (

        <div className="col-lg-2">
            <img class="bd-placeholder-img rounded-circle" width="140" height="140" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" src={imgsrc} ></img>
            <h2>{name}</h2>
            <p><a class="btn btn-secondary" onClick={() => navigate(name)}>View details &raquo;</a></p>
        </div>

    )
}

export default AvatarCard