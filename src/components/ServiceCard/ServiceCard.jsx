import React from 'react';

const ServiceCard = ({
    id,
    title,
    price,
    unit,
    description,
    features,
    priceNote,
    specialNote,
    commitments
}) => {
    return (
        <div className="service-card">
            <div className="card-header">
                <h3 className="card-title">{title}</h3>
                <div className="price-info">
                    <span className="price">{price}</span>
                    <span className="unit">{unit}</span>
                </div>
            </div>

            <div className="card-body">
                <p className="description">{description}</p>

                <ul className="features-list">
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>

                <div className="price-note">
                    <p>{priceNote}</p>
                </div>

                {specialNote && (
                    <div className="special-note">
                        <p>{specialNote}</p>
                    </div>
                )}

                <div className="commitments">
                    <h4>🎯 Cam kết:</h4>
                    <ul>
                        {commitments.map((commitment, index) => (
                            <li key={index}>{commitment}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;