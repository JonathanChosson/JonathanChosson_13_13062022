import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import SignInForm from '../Components/SignInForm'

const SignIn = () => {
    return (
        <div className="center">
            <Header />
            <main className="main bg-dark">
                <SignInForm />
            </main>
            <Footer />
        </div>
    )
}

export default SignIn
