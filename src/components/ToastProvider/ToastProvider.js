import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const createToast = (message, variant) => {
    if (!message) {
      return;
    }
    const newToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ];

    setToasts(newToasts);
  };

  const dismissToast = (id) => {
    const newToasts = toasts.filter((toast) => toast.id !== id);

    setToasts(newToasts);
  };

  const dismissAllToasts = React.useCallback(() => {
    setToasts([]);
  }, []);

  return (
    <ToastContext.Provider
      value={{ toasts, createToast, dismissToast, dismissAllToasts }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
