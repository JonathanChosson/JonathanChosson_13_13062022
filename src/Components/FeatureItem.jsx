import React from 'react'

const FeatureItem = ({ icon, h3, text }) => {
    return (
        <div className="feature-item">
            <img src={icon} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">{h3}</h3>
            <p>{text}</p>
        </div>
    )
}

export default FeatureItem
