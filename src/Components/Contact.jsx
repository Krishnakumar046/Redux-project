import React from 'react';

function Contact() {
    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6 text-center">
                    <h2 className="text-dark fw-bold mb-3">Contact Me</h2>
                    <hr className="w-50 mx-auto" />
                    <div className="card shadow-sm p-4">
                        <div className="card-body">
                            <p className="fw-medium mb-3">
                                <i className="bi bi-person-fill me-2"></i>
                                <strong>Name:</strong> Krishna Kumar
                            </p>
                            <p className="fw-medium mb-3">
                                <i className="bi bi-telephone-fill me-2"></i>
                                <strong>Phone:</strong> 8825726929
                            </p>
                            <p className="fw-medium mb-3">
                                <i className="bi bi-envelope-fill me-2"></i>
                                <strong>Email:</strong>
                                <a href="mailto:krishnakrish6046@gmail.com" className="text-decoration-none"> krishnakrish6046@gmail.com</a>
                            </p>
                            <p className="fw-medium mb-3">
                                <i className="bi bi-laptop me-2"></i>
                                <strong>Role:</strong> Java FullStack Developer
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
