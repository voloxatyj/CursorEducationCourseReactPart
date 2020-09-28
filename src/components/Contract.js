import React from 'react';

export const Contract = ({item}) => {
    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                <h5>{item.firstName +' '+ item.lastName}</h5>
                    <p className="card-text">
                        <i className="fas fa-phone-alt fa-lg p-1"></i><strong>phone</strong>:{item.phone}
                        <br/>
                    </p>
                    <p className="card-text d-flex align-items-center">
                        {item.gender === "male" ? <i className="fas fa-male fa-2x p-1"></i> : <i className="fas fa-female fa-2x p-1"></i>}<strong>gender</strong>:{item.gender}
                    </p>
                </div>
            </div>
        </div>
    )
}
