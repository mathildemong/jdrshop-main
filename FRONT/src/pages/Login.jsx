<<<<<<< HEAD
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/Login.css";

function Login() {
 const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
 function validateForm() {
 return email.length > 0 && password.length > 0;
}
 function handleSubmit(event) {
event.preventDefault();
  }
 return (
  <div className="Login">
     <Form onSubmit={handleSubmit}>
    <Form.Group size="lg" controlId="email">
      <Form.Label className="form1">Email</Form.Label>
      <Form.Control autoFocus type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
     </Form.Group>
        <Form.Group size="lg" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
     </Form.Group>
   <Button block size="lg" type="submit" disabled={!validateForm()}>Login</Button>
  </Form>
  </div>
  );
 }

 
export default Login;
=======
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/Login.css";

function Login() {
 const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
 function validateForm() {
 return email.length > 0 && password.length > 0;
}
 function handleSubmit(event) {
event.preventDefault();
  }
 return (
  <div className="Login">
     <Form onSubmit={handleSubmit}>
    <Form.Group size="lg" controlId="email">
      <Form.Label className="form1">Email</Form.Label>
      <Form.Control autoFocus type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
     </Form.Group>
        <Form.Group size="lg" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
     </Form.Group>
   <Button block size="lg" type="submit" disabled={!validateForm()}>Login</Button>
  </Form>
  </div>
  );
 }

 
export default Login;
>>>>>>> e87d2061a4521c03d4dd8d318fd8fb257754b307
