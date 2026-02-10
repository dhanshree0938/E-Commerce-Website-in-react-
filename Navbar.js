import React from 'react';

const Navbar = ({ userData, logout }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
            <div className="container-fluid px-4">
                <a className="navbar-brand fw-bold fs-4" href="#">
                    🛒DM Store
                </a>

                {/* Fake search bar – UI only */}
                <form className="d-flex mx-auto w-50">
                    <input
                        className="form-control rounded-0"
                        type="search"
                        placeholder="Search products..."
                    />
                    <button className="btn btn-warning rounded-0 fw-bold" type="button">
                        Search
                    </button>
                </form>

                <ul className="navbar-nav align-items-center">
                    <li className="nav-item me-3 text-white small">
                        Hello, <strong>{userData.userName}</strong>
                    </li>

                    <li className="nav-item me-3">
                        <a className="nav-link position-relative" href="#cart">
                            <i className="fas fa-shopping-cart fs-5"></i>
                        </a>
                    </li>

                    <li className="nav-item">
                        <button className="btn btn-sm btn-outline-danger" onClick={logout}>
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
