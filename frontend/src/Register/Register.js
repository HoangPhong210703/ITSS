import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../Assets/Header/Header';
import Footer from '../Assets/Footer/Footer';
import './RegistrationForm.js';
import './Register.css';



function Title() {
    return (
      <h1 className="title">会員登録</h1>
    );
}


function Register() {
    return (
        <div className="Register">
        <Header />
        <Title />
        <RegistrationForm />
        <Footer />
        </div>
    );
};



export default Register;

