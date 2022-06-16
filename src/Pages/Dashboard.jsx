import React, { useEffect } from 'react'
import Header from '../Components/Header'
import '../Style/Components/Dashboard.css'
import { useSelector, useStore, useDispatch } from 'react-redux'
import { axiosProfile } from '../features/profile'
import { selectProfile } from '../utils/selectors'
import { loginStorage } from '../features/login'
import AccountInfos from '../Components/AccountInfos'
import Footer from '../Components/Footer'

const Dashboard = () => {
    const store = useStore()
    const dispatch = useDispatch()
    const profile = useSelector(selectProfile)
    useEffect(() => {
        if (localStorage.getItem('JWT_Key')) {
            dispatch(loginStorage(JSON.parse(localStorage.getItem('JWT_Key'))))
        }
        axiosProfile(store)
    }, [dispatch, store])
    return (
        <div>
            {profile.status === 'resolved' ? (
                <div className="center">
                    <Header />
                    <main className="main bg-dark">
                        <div className="header">
                            <h1>
                                Welcome back
                                <br />
                                {profile.data.body.firstName}{' '}
                                {profile.data.body.lastName}
                            </h1>
                            <button className="edit-button">Edit Name</button>
                        </div>
                        <h2 className="sr-only">Accounts</h2>
                        <AccountInfos
                            title={'Argent Bank Checking (x8349)'}
                            balance={'$2,082.79'}
                            status={'Available Balance'}
                        />
                        <AccountInfos
                            title={'Argent Bank Savings (x6712)'}
                            balance={'$10,928.42'}
                            status={'Available Balance'}
                        />
                        <AccountInfos
                            title={'Argent Bank Credit Card (x8349)'}
                            balance={'$184.30'}
                            status={'Current Balance'}
                        />
                    </main>
                    <Footer />
                </div>
            ) : (
                ''
            )}
        </div>
    )
}

export default Dashboard
