const ShoppingCartCard = ({ cartItems, removeFromCart, increaseQuantity, decreaseQuantity, checkout }) => {
    const total = cartItems.reduce(
        (acc, cur) => acc + parseFloat(cur.price.replace('Rs.', '')) * cur.quantity,
        0
    );

    return (
        <div className="card shadow-sm sticky-top" style={{ top: '90px' }}>
            <div className="card-header fw-bold bg-dark text-white">
                🛍 Shopping Cart
            </div>

            <ul className="list-group list-group-flush">
                {cartItems.map((item) => (
                    <li className="list-group-item" key={item.id}>
                        <small className="fw-semibold">{item.name}</small>

                        <div className="d-flex justify-content-between align-items-center mt-2">
                            <div className="btn-group btn-group-sm">
                                <button className="btn btn-outline-danger" onClick={() => decreaseQuantity(item)}>-</button>
                                <button className="btn btn-light">{item.quantity}</button>
                                <button className="btn btn-outline-success" onClick={() => increaseQuantity(item)}>+</button>
                            </div>

                            <button
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => removeFromCart(item)}
                            >
                                <i className="fa fa-trash"></i>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="card-body">
                <h6 className="fw-bold">Total: Rs.{total}</h6>
                <button className="btn btn-primary w-100 mt-2" onClick={checkout}>
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default ShoppingCartCard;
