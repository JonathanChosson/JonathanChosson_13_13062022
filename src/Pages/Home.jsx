import React from 'react'
import FeatureItem from '../Components/FeatureItem'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import '../Style/Components/Home.css'

const Home = () => {
    return (
        <div className="center">
            <Header />
            <main>
                <Hero />
                <section className="features">
                    <h2 className="sr-only">Features</h2>
                    <FeatureItem
                        icon="./img/icon-chat.png"
                        h3="You are our #1 priority"
                        text="Need to talk to a representative? You can get in
                            touch through our 24/7 chat or through a phone call
                            in less than 5 minutes."
                    />
                    <FeatureItem
                        icon="./img/icon-money.png"
                        h3="More savings means higher rates"
                        text="The more you save with us, the higher your interest
                        rate will be!"
                    />
                    <FeatureItem
                        icon="./img/icon-security.png"
                        h3="Security you can trust"
                        text="We use top of the line encryption to make sure your
                        data and money is always safe."
                    />
                </section>
                <Footer />
            </main>
        </div>
    )
}

export default Home
