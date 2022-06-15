import React from 'react'
import Header from '../Components/Header'
import { useSelector } from 'react-redux'
import { selectLogin } from '../utils/selectors'

const Dashboard = () => {
    const login = useSelector(selectLogin)
    console.log(login.data.body.token)
    return (
        <div>
            <div className="center">
                <Header />
            </div>
        </div>
    )
}

export default Dashboard
