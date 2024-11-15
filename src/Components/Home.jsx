import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUsers } from '../slices/UserSclice';

function Home() {

    const dispatch = useDispatch();
    const [userValue, setUserValue] = useState({
        name: "",
        age: "",
        email: "",
        contact: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserValue((curr) => {
            return {
                ...curr,
                [name]: value
            }
        })
    }

    const addUser = () => {
        event.preventDefault();
        dispatch(addUsers(userValue))
        setUserValue('');
    }
    return (
        <>
            <h1 className='text-center pt-5 text-primary'>Redux-project</h1>
            <div className="container mt-4">
                <form className="p-4 border rounded shadow-sm bg-light">
                    <h3 className="mb-4">User Information</h3>

                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            name='name'
                            type="text"
                            className="form-control"
                            placeholder="Enter your name"
                            value={userValue.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Age</label>
                        <input
                            name='age'
                            type="number"
                            className="form-control"
                            placeholder="Enter your age"
                            value={userValue.age}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            name='email'
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                            value={userValue.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Contact</label>
                        <input
                            name='contact'
                            type="number"
                            className="form-control"
                            placeholder="Enter your contact number"
                            value={userValue.contact}
                            onChange={handleChange}
                        />
                    </div>

                    <button className="btn btn-primary w-100" onClick={addUser}>
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default Home