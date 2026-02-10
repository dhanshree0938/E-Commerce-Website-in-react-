import React from 'react';

const Login = ({ formData, handleInputChange, handleSubmit, errorMsg }) => {

  return (
    <div className="container-fluid bg-light" style={{ minHeight: '100vh' }}>
      <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="col-md-4 col-sm-10">
          
          <div className="card border-0 shadow-lg rounded-4">
            
            {/* Header */}
            <div className="card-header bg-dark text-white text-center rounded-top-4">
              <h4 className="mb-0 fw-bold"> DM Store</h4>
              <small className="text-muted">Sign in to continue</small>
            </div>

            {/* Body */}
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Email address</label>
                  <input
                    type="email"
                    name="userEmail"
                    className="form-control form-control-lg"
                    placeholder="Enter your email"
                    value={formData.userEmail}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Password</label>
                  <input
                    type="password"
                    name="userPwd"
                    className="form-control form-control-lg"
                    placeholder="Enter your password"
                    value={formData.userPwd}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Error Message */}
                {errorMsg && (
                  <div className="alert alert-danger py-2 small">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-warning btn-lg w-100 fw-bold mt-2"
                >
                  Sign In
                </button>

              </form>
            </div>

            {/* Footer */}
            <div className="card-footer text-center small text-muted bg-white">
              © 2026 Dhanshree Mali
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
