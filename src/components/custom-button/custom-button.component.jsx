import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, signInWithGoogle, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={`${signInWithGoogle ? 'google-sign-in' : ''} custom-button`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
