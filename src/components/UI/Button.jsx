import React from 'react';

const Button = ({ css, children, onClick }) => {
  return (
    <button onClick={onClick} className={css}>
      {children}
    </button>
  );
};

export default Button;
