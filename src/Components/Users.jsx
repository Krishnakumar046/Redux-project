import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUsers } from '../slices/UserSclice';

function Users() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.userInfo.users);

    const deletePerson = (index) => {
        dispatch(deleteUsers(index));
    };

    return (
        <div className="container my-4">
            <h2 className="text-center mb-4">User List</h2>
            <div className="row justify-content-center">
                {
                    users.length > 0 ? users.map((person, index) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={index}>
                            <div className="card shadow-sm h-100">
                                <div className="card-body">
                                    <h5 className="card-title text-primary">{person.name}</h5>
                                    <p className="card-text mb-1"><strong>Age:</strong> {person.age}</p>
                                    <p className="card-text mb-1"><strong>Email:</strong> {person.email}</p>
                                    <p className="card-text mb-3"><strong>Contact:</strong> {person.contact}</p>
                                    <div className="text-center">
                                        <button
                                            className="btn btn-danger rounded-pill"
                                            onClick={() => deletePerson(index)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <div className="col-12">
                            <p className="text-center text-muted">No users available.</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Users;
