<<<<<<< HEAD
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../../styles/Login.css";
// import AppContext from "../../context/app-context";


function Login() {
  //  const { setCredentials } = useApp();
 const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


 function validateForm() {
 return email.length > 0 && password.length > 0;
}
 async function handleLogin(event) {
 const user = await postLogin(email, password)
 console.log(user);
//  appeler le setUser du app context 
  }
  
 async function postLogin(email, password) {
  try {
    const reponse = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password}),
  });

    const resultat = await reponse.json();
    console.log("Réussite :", resultat);
  } catch (erreur) {
    console.error("Erreur :", erreur);
  }
  
}
 return (
  <div className="Login">
     <Form onSubmit={handleLogin}>
    <Form.Group size="lg" controlId="email">
      <Form.Label className="form1">Email</Form.Label>
      <Form.Control autoFocus type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
     </Form.Group>
        <Form.Group size="lg" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
     </Form.Group>
   <Button type="submit" disabled={!validateForm()}>Login</Button>
  </Form>
  <Link to="/Subscribe">
     <Button>Subscribe</Button>
     </Link>
  </div>
  );
 }

 
=======
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../../styles/Login.css";
// import AppContext from "../../context/app-context";


function Login() {
  //  const { setCredentials } = useApp();
 const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


 function validateForm() {
 return email.length > 0 && password.length > 0;
}
 async function handleLogin(event) {
 const user = await postLogin(email, password)
 console.log(user);
//  appeler le setUser du app context 
  }
  
 async function postLogin(email, password) {
  try {
    const reponse = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password}),
  });

    const resultat = await reponse.json();
    console.log("Réussite :", resultat);
  } catch (erreur) {
    console.error("Erreur :", erreur);
  }
  
}
 return (
  <div className="Login">
     <Form onSubmit={handleLogin}>
    <Form.Group size="lg" controlId="email">
      <Form.Label className="form1">Email</Form.Label>
      <Form.Control autoFocus type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
     </Form.Group>
        <Form.Group size="lg" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
     </Form.Group>
   <Button type="submit" disabled={!validateForm()}>Login</Button>
  </Form>
  <Link to="/Subscribe">
     <Button>Subscribe</Button>
     </Link>
  </div>
  );
 }

 
>>>>>>> e87d2061a4521c03d4dd8d318fd8fb257754b307
export default Login;