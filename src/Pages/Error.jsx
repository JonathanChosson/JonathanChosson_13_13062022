import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Error = () => {
    return (
        <div className="center">
            <Header />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <h1>404</h1>
                    <p>La page que vous demandez n'hexiste pas</p>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Error
