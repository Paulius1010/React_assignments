import React, { useState } from 'react'

function Task2() {
    const [like, setLike] = useState(0);
    const [hate, setHate] = useState(0);
 
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card" style={{ width: "18rem" }} >
                        <img src="#" className="card-img-top" alt="" />
                        <h5 className="card.title">Antraste</h5>
                        <p className="card-text">Some quick example text to build on the card title and make and make up the bulk of the card's content.</p>
                        <button onClick={() => setLike(like + 1)} type="button" className="btn btn-success">Like {like}</button>
                        <button onClick={() => setHate(hate + 1)} type="button" className="btn btn-danger">Hate {hate}</button>
                        <button onClick={()=>reset(setHate(0),setLike(0))} type="button" className="btn btn-primary"> Reset</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Task2