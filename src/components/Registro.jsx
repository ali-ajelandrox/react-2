import React, { useState } from 'react';
import { Card, Button, Form, Alert, Image } from 'react-bootstrap';

const Registro = () => {
  const [alertVisible, setAlertVisible] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('success');

  const handleFormSubmit = (formData) => {
    // Validar si alguno de los campos está vacío
    if (!formData.nombre || !formData.email || !formData.password || !formData.confirmPassword) {
      setMensaje('Todos los campos son requeridos.');
      setTipoMensaje('danger');
      setAlertVisible(true);
      return;
    }

    // Validar si las contraseñas coinciden
    if (formData.password !== formData.confirmPassword) {
      setMensaje('Las contraseñas no coinciden.');
      setTipoMensaje('danger');
      setAlertVisible(true);
      return;
    }

    // Mostrar la alerta de registro exitoso
    setMensaje('Registro exitoso');
    setTipoMensaje('success');
    setAlertVisible(true);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '400px' }}>
        <Card.Body>
          <Card.Title className="text-center">Crea una cuenta </Card.Title>
          <div className="text-center mt-3" >
          <SocialButton icon={<i class="fa-brands fa-facebook fa-2xl"></i>} />
          <SocialButton icon={<i class="fa-brands fa-linkedin fa-2xl"></i>} />
          <SocialButton icon={<i class="fa-brands fa-github fa-2xl"></i>} />

          </div>
        
          <Formulario onSubmit={handleFormSubmit} />
          {alertVisible && (
            <CustomAlert mensaje={mensaje} tipo={tipoMensaje} />
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

const SocialButton = ({ icon }) => {
  return (
    <Button variant="outline-primary" 
    className="m-2 rounded-circle" >
      {icon}
    </Button>
  );
};

const Formulario = ({ onSubmit }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nombre, email, password, confirmPassword });
  };

  return (
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

      <div className="text-center mt-3">
            <Button variant="success" type="submit">
              Registrarse
            </Button>
          </div>
    </Form>
  );
};

const CustomAlert = ({ mensaje, tipo }) => {
  return <Alert variant={tipo}>{mensaje}</Alert>;
};

export default Registro;

