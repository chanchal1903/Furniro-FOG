import React from 'react';
const ProductCard = ({ img, tag, name, description, price, oldPrice }) => {
    const isNew = tag === 'New';
    const isDiscount = tag && !isNew;

    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src={img} alt={name} className="product-image" />
                {tag && (
                    <span className={`product-tag ${isNew ? 'new' : 'discount'}`}>
                        {tag}
                    </span>
                )}
                <div className="product-overlay">
                    <button className="add-to-cart-btn">Add to cart</button>
                    <div className="product-actions">
                        <span>Share</span>
                        <span>Compare</span>
                        <span>Like</span>
                    </div>
                </div>
            </div>
            <div className="product-info">
                <h3 className="product-name">{name}</h3>
                <p className="product-description">{description}</p>
                <div className="product-pricing">
                    <span className="product-price">{price}</span>
                    {oldPrice && <span className="product-old-price">{oldPrice}</span>}
                </div>
            </div>
        </div>
    );
};
export default ProductCard;