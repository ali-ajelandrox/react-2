import React from 'react';
import { Button } from 'react-bootstrap';

const SocialButton = ({ icon }) => {
  return (
    <Button 
      variant="outline-primary" 
      className="m-2 rounded-circle" 
    >
      <img src={icon} alt="Icon" width="70" height="70" />
    </Button>
  );
};

export default SocialButton;
