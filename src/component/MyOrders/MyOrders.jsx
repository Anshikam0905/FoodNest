import React from "react";
import "./MyOrders.css";

const MyOrders = ({ orders = [], onBack }) => {
  return (
    <div className="my-orders-page">
      <div className="my-orders-header">
        <button onClick={onBack} className="back-btn">
          ← Back to Profile
        </button>

        <h1>My Orders</h1>
        <p>Track your food orders with Food Nest</p>
      </div>

      {orders.length === 0 ? (
        <div className="empty-orders">
          <div className="empty-icon">🛒</div>
          <h2>No Orders Yet!</h2>
          <p>
            You haven't placed any orders. Explore our menu and order your
            favourite food.
          </p>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div className="my-order-card" key={order.id}>
              <div className="my-order-top">
                <div>
                  <h3>Order #{order.id}</h3>
                  <p>{order.date}</p>
                </div>

                <span
                  className={`order-status ${order.status.toLowerCase().replaceAll(" ", "-")}`}
                >
                  {order.status}
                </span>
              </div>

              <div className="my-order-items">
                {order.items.map((item, index) => (
                  <div className="my-order-item" key={index}>
                    <div className="my-order-food">
                      {item.image ? (
                        <img src={item.image} alt={item.name} />
                      ) : (
                        <span>🍕</span>
                      )}
                    </div>

                    <div className="my-order-food-info">
                      <h4>{item.name}</h4>
                      <p>Quantity: {item.quantity}</p>
                    </div>

                    <strong>₹{item.price * item.quantity}</strong>
                  </div>
                ))}
              </div>

              <div className="my-order-total">
                <span>Total Amount</span>
                <strong>₹{order.total}</strong>
              </div>

              <div className="my-order-address">
                <p>
                  <strong>Delivery Address:</strong> {order.address}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
