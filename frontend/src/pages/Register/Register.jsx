// mock page cho register
// cho register vao day
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './RegistrationForm';
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
