import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const Formulario = ({ onSubmit }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('success');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !email || !password || !confirmPassword) {
      setMensaje('Por favor completa todos los campos.');
      setTipoMensaje('danger');
      setAlertVisible(true);
      return;
    }
    if (password !== confirmPassword) {
      setMensaje('Las contraseñas no coinciden.');
      setTipoMensaje('danger');
      setAlertVisible(true);
      return;
    }
    onSubmit({ nombre, email, password, confirmPassword });
    setMensaje('Registro exitoso');
    setTipoMensaje('success');
    setAlertVisible(true);
  };

  return (
    <div>
      {alertVisible && (
        <Alert variant={tipoMensaje} className="mt-3">
          {mensaje}
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirmar Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirmar Contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>

        <Button  variant="primary" type="submit">
          Registrarse
        </Button>
      </Form>
    </div>
  );
};

export default Formulario;

