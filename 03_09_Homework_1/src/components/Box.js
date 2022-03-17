import React from 'react'

export default function Box({ image, text, minutes }) {
    return (
        <div className="col-md-4">
            <div className="card mb-4 box-shadow">
                <img className="card-img-top" src={image} alt="" />
                <div className="card-body">
                    <p className="card-text">{text}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">{minutes}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}