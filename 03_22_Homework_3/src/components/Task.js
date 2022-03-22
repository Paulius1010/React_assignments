import React, { useState } from "react";

function Task() {
    const [task, setTask] = useState(false);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card" style={{ width: "18rem" }} >
                        <img src="#" className="card-img-top" alt="" />
                        <h5 className="card.title">{task ? "Task is done!" : "Task is not done!"}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make and make up the bulk of the card's content.</p>
                        <button onClick={() => setTask(true)} type="button" className={task ? "btn btn-success" : "btn btn-danger"}>{task ? "Done" : "Mark as done"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Task;