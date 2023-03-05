import React, { useState } from "react";

interface OrderConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  orderDetails: {
    orderItems: {
      name: string;
      price: number;
    }[];
    total: number;
    deliveryAddress: string;
  };
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({
  isOpen,
  onClose,
  orderDetails,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Send order details to server and wait for response
    // Once response is received, setIsSubmitting(false) and setHasSubmitted(true)
  };

  return isOpen ? (
    <div className="popup">
      <div className="popup-inner">
        <h2>Order Confirmation</h2>
        <div className="order-details">
          <h3>Order Items:</h3>
          <ul>
            {orderDetails.orderItems.map((item) => (
              <li key={item.name}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <p>
            <strong>Total:</strong> ${orderDetails.total}
          </p>
          <p>
            <strong>Delivery Address:</strong> {orderDetails.deliveryAddress}
          </p>
        </div>
        {hasSubmitted ? (
          <p>Thank you for your order!</p>
        ) : (
          <>
            <button onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Order"}
            </button>
            <button onClick={onClose}>Cancel</button>
          </>
        )}
      </div>
    </div>
  ) : null;
};

export default OrderConfirmation;
