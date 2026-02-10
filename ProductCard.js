import React from 'react';

const ProductCard = ({ prodData, setSelectedProduct, addToCart }) => {
    return (
        <div className="container mt-4">
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                {prodData.map((curProd) => (
                    <div className="col" key={curProd.id}>
                        <div className="card h-100 shadow-sm border-0 product-card">
                            <img
                                src={curProd.image}
                                className="card-img-top p-3"
                                alt="Product"
                                style={{ height: '220px', objectFit: 'contain' }}
                            />

                            <div className="card-body d-flex flex-column">
                                <h6 className="fw-semibold">{curProd.name}</h6>
                                <small className="text-muted mb-1">
                                    {curProd.category.toUpperCase()}
                                </small>

                                <p className="fw-bold text-success mb-2">
                                    {curProd.price}
                                </p>

                                <div className="mt-auto">
                                    <button
                                        className="btn btn-sm btn-outline-primary w-100 mb-2"
                                        onClick={() => setSelectedProduct(curProd)}
                                    >
                                        View Details
                                    </button>

                                    <button
                                        className="btn btn-sm btn-warning w-100 fw-bold"
                                        onClick={() => addToCart(curProd)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Small CSS */}
            <style>
                {`
                .product-card:hover {
                    transform: translateY(-4px);
                    transition: 0.3s ease;
                    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
                }
                `}
            </style>
        </div>
    );
};

export default ProductCard;
