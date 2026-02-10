import React from 'react';

const ProductNav = ({ filterItem, menuList }) => {
    return (
        <div className="container mt-5 pt-4 text-center">
            <div className="d-flex flex-wrap justify-content-center gap-2">
                {menuList.map((curCateg) => (
                    <button
                        key={curCateg}
                        className="btn btn-outline-dark px-4 py-2 fw-semibold rounded-pill"
                        onClick={() => filterItem(curCateg)}
                    >
                        {curCateg.toUpperCase()}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductNav;
