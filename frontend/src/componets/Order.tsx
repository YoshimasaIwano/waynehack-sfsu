import React from 'react';
import { Button } from 'react-bootstrap';

export type OrderConfirmationProps = {
  isOpen: boolean;
  onClose: () => void;
  orderDetails: string;
};

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({
  isOpen,
  onClose,
  orderDetails
}) => {
  return isOpen ? (
    <div className="popup">
      <div className="popup-inner">
        <h2>Order Confirmation</h2>
        <p className="order-details with-nextlines"> {orderDetails} </p>
        <div className="button-container">
          <Button variant="secondary" onClick={onClose} className="rounded">
            Home
          </Button>
        </div>
      </div>
    </div>
  ) : null;
};

export default OrderConfirmation;
