import React from 'react'

const AccountInfos = ({ title, balance, status }) => {
    return (
        <>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">{title}</h3>
                    <p className="account-amount">{balance}</p>
                    <p className="account-amount-description">{status}</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">
                        View transactions
                    </button>
                </div>
            </section>
        </>
    )
}

export default AccountInfos
