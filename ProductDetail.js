import React from 'react';

const ProductDetail = ({ selectedProduct, setSelectedProduct, addToCart }) => {
    const { name, category, image, description, price } = selectedProduct;

    return (
        <div className="container mt-5 pt-4">
            <div className="row g-4 align-items-center">
                <div className="col-md-5 text-center">
                    <img
                        src={image}
                        alt="Product"
                        className="img-fluid border p-3"
                        style={{ maxHeight: '350px' }}
                    />
                </div>

                <div className="col-md-7">
                    <h3 className="fw-bold">{name}</h3>
                    <p className="text-muted">{category.toUpperCase()}</p>

                    <h4 className="text-success fw-bold">{price}</h4>

                    <p className="mt-3">{description}</p>

                    <div className="d-flex gap-3 mt-4">
                        <button
                            className="btn btn-warning fw-bold px-4"
                            onClick={() => addToCart(selectedProduct)}
                        >
                            Add to Cart
                        </button>

                        <button
                            className="btn btn-outline-secondary px-4"
                            onClick={() => setSelectedProduct(null)}
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
