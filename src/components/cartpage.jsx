import React from 'react';
import CartBanner from "./cartbanner";
import FeaturesSection from "./featuresection";
const CartPage = () => (
    <main>
        <CartBanner />
        <div className="section-padding container">
            <div className="cart-section">
                <div className="cart-details">
                    <div className="cart-table-header">
                        <div>Product</div>
                        <div>Price</div>
                        <div>Quantity</div>
                        <div>Subtotal</div>
                        <div></div>
                    </div>
                    <div className="cart-item">
                        <div className="cart-product">
                            <img src="https://tse1.mm.bing.net/th/id/OIP.0W6LV7M_oBZnmg7nA1NXxgHaEu?w=1400&h=894&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Asgaard sofa" />
                            <span>Asgaard sofa</span>
                        </div>
                        <div className="cart-item-price">Rs. 250,000.00</div>
                        <div className="cart-item-quantity">
                            <input type="number" defaultValue="1" min="1" />
                        </div>
                        <div className="cart-item-subtotal">Rs. 250,000.00</div>
                        <div className="cart-item-delete">🗑️</div>
                    </div>
                </div>
                <div className="cart-totals-box">
                    <h3>Cart Totals</h3>
                    <div className="totals-row">
                        <span className="label">Subtotal</span>
                        <span className="price">Rs. 250,000.00</span>
                    </div>
                     <div className="totals-row">
                        <span className="label">Total</span>
                        <span className="price total">Rs. 250,000.00</span>
                    </div>
                    <button className="checkout-btn">Check Out</button>
                </div>
            </div>
        </div>
        <FeaturesSection />
    </main>
);
export default CartPage;