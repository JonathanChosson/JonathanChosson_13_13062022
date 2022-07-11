import React, { useEffect } from 'react'
import Header from '../Components/Header'
import '../Style/Components/Dashboard.css'
import { useSelector, useStore, useDispatch } from 'react-redux'
import { axiosProfile, updateProfile } from '../features/profile'
import { selectProfile } from '../utils/selectors'
import { loginStorage } from '../features/login'
import AccountInfos from '../Components/AccountInfos'
import Footer from '../Components/Footer'
import { useState } from 'react'

const Profile = () => {
    const [newProfile, setNewProfile] = useState({})
    const store = useStore()
    const dispatch = useDispatch()
    const profile = useSelector(selectProfile)
    useEffect(() => {
        if (localStorage.getItem('JWT_Key')) {
            dispatch(loginStorage(JSON.parse(localStorage.getItem('JWT_Key'))))
        }
        axiosProfile(store)
    }, [dispatch, store])

    function toggleHidden(div) {
        div.classList.toggle('hidden')
    }

    function appearEditProfile() {
        toggleHidden(document.querySelector('.edit-div'))
        toggleHidden(document.querySelector('.edit-button'))
    }

    function handlechange(e) {
        e.preventDefault()
        if (e.target.id === 'firstName') {
            setNewProfile({
                firstName: e.target.value,
                lastName: newProfile.lastName,
            })
        } else if (e.target.id === 'lastName') {
            setNewProfile({
                firstName: newProfile.firstName,
                lastName: e.target.value,
            })
        }
    }

    function profileUpdate() {
        setNewProfile({
            firstName:
                newProfile.firstName === ''
                    ? store.getState().profile.data.body.firstName
                    : newProfile.firstName,
            lastName:
                newProfile.lastName === ''
                    ? store.getState().profile.data.body.lastName
                    : newProfile.lastName,
        })
        updateProfile(store, newProfile)
    }

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
                            <button
                                className="edit-button"
                                onClick={appearEditProfile}
                            >
                                Edit Name
                            </button>
                            <div className="edit-div hidden">
                                <input
                                    id="firstName"
                                    className="edit-input input__firstName"
                                    type="text"
                                    placeholder={profile.data.body.firstName}
                                    onChange={handlechange}
                                ></input>
                                <input
                                    id="lastName"
                                    className="edit-input input__lastName"
                                    type="text"
                                    placeholder={profile.data.body.lastName}
                                    onChange={handlechange}
                                ></input>
                                <br />
                                <button
                                    className="edit-button-space"
                                    onClick={profileUpdate}
                                >
                                    Save
                                </button>
                                <button
                                    className="edit-button-space"
                                    onClick={appearEditProfile}
                                >
                                    Cancel
                                </button>
                            </div>
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

export default Profile
