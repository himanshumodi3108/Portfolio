import React, { useEffect } from 'react';
import './Toast.css';

const Toast = ({ message, type = 'info', onClose, duration = 5000 }) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return 'fa-check-circle';
      case 'error':
        return 'fa-exclamation-circle';
      case 'warning':
        return 'fa-exclamation-triangle';
      case 'info':
      default:
        return 'fa-info-circle';
    }
  };

  return (
    <div 
      className={`toast toast-${type}`}
      role="alert"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="toast-content">
        <i className={`fas ${getIcon()} toast-icon`} aria-hidden="true"></i>
        <span className="toast-message">{message}</span>
      </div>
      <button
        className="toast-close"
        onClick={onClose}
        aria-label="Close notification"
      >
        <i className="fas fa-times" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default Toast;

