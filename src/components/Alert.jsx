import React from 'react';
import { Alert } from 'react-bootstrap';

const CustomAlert = ({ mensaje, tipo }) => {
  return <Alert variant={tipo}>{mensaje}</Alert>;
};

export default CustomAlert;
