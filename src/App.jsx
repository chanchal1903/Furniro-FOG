import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import ProductsSection from './components/ProductsSection'
import BrowseRange from './components/BrowseRange'
import ShareSetupSection from './components/ShareSetupSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import InspirationSection from './components/InspirationSection'
import CartPage from './components/cartpage'
import ContactPage from './components/contacts/contactpage'
import ShopPage from './components/shop'
const GlobalStyles = () => (
    <style>
        {`
            /* General Body Styles */
            body {
                font-family: 'Poppins', sans-serif;
                margin: 0;
                color: #333;
                background-color: #fff;
            }

            /* Reusable Container */
            .container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 20px;
            }

            .section-padding {
                padding: 60px 0;
            }

            .text-center {
                text-align: center;
            }

            .section-title {
                font-size: 32px;
                font-weight: 700;
                color: #3A3A3A;
                margin-bottom: 10px;
            }

            .section-subtitle, .section-hashtag {
                font-size: 16px;
                color: #666;
                margin-bottom: 40px;
            }
            .section-hashtag {
                font-size: 32px;
                font-weight: 700;
                color: #3A3A3A;
            }

            /* Header */
            .header {
                background-color: #fff;
                padding: 20px 0;
                border-bottom: 1px solid #eee;
            }

            .header .container {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .logo {
                display: flex;
                align-items: center;
            }

            .logo-img {
                margin-right: 8px;
            }

            .logo h1 {
                font-size: 24px;
                font-weight: 700;
                margin: 0;
            }

            .nav-menu a {
                text-decoration: none;
                color: #333;
                margin: 0 20px;
                font-weight: 500;
            }

            .nav-icons span {
                margin-left: 25px;
                font-size: 20px;
                cursor: pointer;
            }

            /* Hero Section */
            .hero-section {
                background: url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80') no-repeat center center/cover;
                height: 90vh;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                padding: 0 5%;
            }

            .hero-content {
                background-color: rgba(255, 243, 229, 0.9);
                padding: 40px;
                border-radius: 10px;
                max-width: 500px;
            }

            .hero-content p {
                font-weight: 500;
            }

            .hero-content h2 {
                font-size: 48px;
                color: #B88E2F;
                line-height: 1.2;
                margin: 10px 0;
            }

            .hero-content .description {
                margin-bottom: 20px;
            }

            .buy-now-btn {
                background-color: #B88E2F;
                color: #fff;
                padding: 15px 40px;
                border: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: 700;
                cursor: pointer;
                text-transform: uppercase;
            }

            /* Browse the Range */
            .range-container {
                display: flex;
                justify-content: center;
                gap: 30px;
                margin-top: 50px;
                flex-wrap: wrap;
            }

            .range-item {
                text-align: center;
            }

            .range-item img {
                width: 100%;
                max-width: 380px;
                height: 480px;
                object-fit: cover;
                border-radius: 10px;
                margin-bottom: 20px;
            }

            .range-item h3 {
                font-size: 24px;
                font-weight: 600;
                color: #333;
            }

            /* Products Section */
            .product-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 30px;
            }

            .product-card {
                background-color: #F4F5F7;
                text-align: left;
                position: relative;
                overflow: hidden;
            }

            .product-image-container {
                position: relative;
            }

            .product-image {
                width: 100%;
                height: 300px;
                object-fit: cover;
                display: block;
            }

            .product-tag {
                position: absolute;
                top: 20px;
                right: 20px;
                background-color: #E97171;
                color: white;
                width: 48px;
                height: 48px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 500;
            }

            .product-tag.new {
                background-color: #2EC1AC;
            }

            .product-info {
                padding: 16px;
            }

            .product-name {
                font-size: 24px;
                font-weight: 600;
                margin: 0 0 8px 0;
            }

            .product-description {
                color: #898989;
                font-weight: 500;
                margin: 0 0 8px 0;
            }

            .product-pricing {
                display: flex;
                align-items: center;
                gap: 16px;
            }

            .product-price {
                font-size: 20px;
                font-weight: 600;
            }

            .product-old-price {
                text-decoration: line-through;
                color: #B0B0B0;
            }

            /* Product Card Overlay */
            .product-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.7);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transition: opacity 0.3s ease;
            }

            .product-card:hover .product-overlay {
                opacity: 1;
            }

            .add-to-cart-btn {
                background-color: #fff;
                color: #B88E2F;
                padding: 12px 30px;
                border: none;
                font-weight: 600;
                cursor: pointer;
                margin-bottom: 24px;
            }

            .product-actions {
                display: flex;
                gap: 20px;
                color: white;
                font-weight: 600;
            }

            .product-actions span {
                cursor: pointer;
            }

            .show-more-btn {
                margin-top: 40px;
                background: none;
                border: 1px solid #B88E2F;
                color: #B88E2F;
                padding: 12px 60px;
                font-weight: 600;
                cursor: pointer;
                transition: background-color 0.3s, color 0.3s;
            }

            .show-more-btn:hover {
                background-color: #B88E2F;
                color: #fff;
            }

            /* Inspiration Section */
            .inspiration-section {
                display: flex;
                flex-wrap: wrap;
                background-color: #FCF8F3;
                align-items: center;
                padding: 40px;
                gap: 20px;
            }
            .inspiration-content {
                flex: 1 1 300px;
                padding-right: 20px;
            }
            .inspiration-content h2 {
                font-size: 40px;
                font-weight: 700;
                color: #3A3A3A;
                line-height: 1.2;
            }
            .inspiration-content p {
                color: #616161;
                margin: 20px 0;
            }
            .inspiration-content button {
                background-color: #B88E2F;
                color: #fff;
                padding: 12px 36px;
                border: none;
                cursor: pointer;
                font-weight: 600;
            }
            .inspiration-images {
                flex: 1 1 400px;
                display: flex;
                gap: 20px;
                flex-wrap: wrap;
            }
            .inspiration-images img {
                height: 500px;
                object-fit: cover;
                width: 100%;
            }
            .main-image {
                flex: 1 1 250px;
            }
            .sub-image-container {
                flex: 1 1 200px;
                position: relative;
            }
            .sub-image-container img {
                width: 100%;
                height: auto;
                max-height: 430px;
            }
            .sub-image-info {
                position: absolute;
                bottom: 20px;
                left: 20px;
                background: rgba(255, 255, 255, 0.8);
                padding: 15px;
            }
            .arrow-btn {
                position: absolute;
                bottom: 20px;
                right: 20px;
                background: #B88E2F;
                color: white;
                border: none;
                width: 40px;
                height: 40px;
                font-size: 24px;
                cursor: pointer;
            }


            /* Share Setup Section */
            .gallery-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
                gap: 16px;
                align-items: center;
            }
            .gallery-grid img {
                width: 100%;
                height: auto;
                object-fit: cover;
            }

            /* Footer */
            .footer {
                border-top: 1px solid #eee;
            }

            .footer-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 30px;
                padding-bottom: 40px;
            }

            .footer-about h4 {
                font-size: 24px;
                font-weight: 700;
                margin-bottom: 30px;
            }

            .footer-about p, .footer-links p, .footer-help p, .footer-newsletter p {
                color: #9F9F9F;
                font-weight: 500;
                margin-bottom: 30px;
            }

            .footer ul {
                list-style: none;
                padding: 0;
                margin: 0;
            }

            .footer ul li {
                margin-bottom: 20px;
            }

            .footer ul a {
                text-decoration: none;
                color: #000;
                font-weight: 500;
            }

            .footer-newsletter form {
                display: flex;
                gap: 10px;
            }

            .footer-newsletter input {
                border: none;
                border-bottom: 1px solid #000;
                padding: 5px 0;
                flex-grow: 1;
            }

            .footer-newsletter input:focus {
                outline: none;
            }

            .footer-newsletter button {
                background: none;
                border: none;
                border-bottom: 1px solid #000;
                cursor: pointer;
                font-weight: 600;
            }

            /* --- Page Banner Styles (Generic) --- */
            .page-banner {
                height: 30vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                color: #333;
                background-size: cover;
                background-position: center;
            }
             .cart-banner-bg {
                background-image: url('https://images.unsplash.com/photo-1554224719-53a3b4ca2185?w=1200&q=80');
            }
            .contact-banner-bg {
                background-image: url('https://images.unsplash.com/photo-1556742533-3b1a0b3b3a8c?w=1200&q=80');
            }

            .page-banner h1 {
                font-size: 48px;
                margin: 0;
            }
            .page-banner p {
                font-weight: 500;
            }
            .page-banner a {
                text-decoration: none;
                color: #333;
            }

            .cart-section {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                gap: 30px;
            }

            .cart-details {
                flex: 2 1 600px;
            }

            .cart-totals-box {
                flex: 1 1 300px;
                background-color: #F9F1E7;
                padding: 20px;
                height: fit-content;
            }
            
            .cart-table-header, .cart-item {
                display: grid;
                grid-template-columns: 2fr 1fr 1fr 1fr 0.5fr;
                align-items: center;
                padding: 15px 0;
            }
            
            .cart-table-header {
                background-color: #F9F1E7;
                font-weight: 500;
                padding: 15px;
            }

            .cart-item {
                 border-bottom: 1px solid #eee;
            }

            .cart-product {
                display: flex;
                align-items: center;
            }

            .cart-product img {
                width: 100px;
                height: 100px;
                object-fit: cover;
                margin-right: 20px;
            }
            
            .cart-item-quantity input {
                width: 40px;
                text-align: center;
                border: 1px solid #ccc;
                border-radius: 5px;
                padding: 5px;
            }

            .cart-item-delete {
                color: #B88E2F;
                cursor: pointer;
                font-size: 24px;
            }
            
            .cart-totals-box h3 {
                text-align: center;
                font-size: 32px;
                margin-bottom: 40px;
            }
            
            .totals-row {
                display: flex;
                justify-content: space-between;
                margin-bottom: 20px;
            }
            
            .totals-row .label {
                font-weight: 500;
            }
            .totals-row .price.total {
                color: #B88E2F;
                font-weight: 700;
                font-size: 20px;
            }
            
            .checkout-btn {
                width: 100%;
                padding: 15px;
                border: 1px solid #000;
                border-radius: 10px;
                background-color: transparent;
                cursor: pointer;
                font-weight: 600;
                font-size: 18px;
            }

            /* --- Features Section --- */
            .features-section {
                background-color: #FAF3EA;
            }
            .features-container {
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                gap: 20px;
            }
            .feature-item {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            .feature-item span {
                font-size: 32px;
            }
            .feature-text h4 {
                margin: 0 0 5px 0;
            }
            .feature-text p {
                margin: 0;
                color: #666;
            }

            /* --- Contact Page Styles --- */
            .contact-page-content {
                max-width: 1000px;
                margin: 0 auto;
            }
            .contact-section-header {
                margin-bottom: 30px;
                text-align: center;
            }
            .contact-section-header h2 {
                font-size: 36px;
                font-weight: 600;
            }
            .contact-section-header p {
                color: #666;
                max-width: 500px;
                margin: 10px auto 0;
            }
            .contact-section-body {
                display: flex;
                flex-wrap: wrap;
                gap: 40px;
                justify-content: center;
            }
            .contact-info {
                flex: 1 1 300px;
            }
            .contact-info-item {
                display: flex;
                align-items: flex-start;
                gap: 20px;
                margin-bottom: 30px;
            }
            .contact-info-item span { /* Icon */
                font-size: 24px;
                margin-top: 5px;
            }
            .contact-info-item h4 {
                margin: 0 0 5px 0;
                font-size: 24px;
                font-weight: 500;
            }
            .contact-info-item p {
                margin: 0;
                color: #666;
            }
            .contact-form {
                flex: 1 1 500px;
            }
            .contact-form .form-group {
                margin-bottom: 20px;
            }
            .contact-form label {
                display: block;
                margin-bottom: 8px;
                font-weight: 500;
            }
            .contact-form input,
            .contact-form textarea {
                width: 100%;
                padding: 12px;
                border-radius: 5px;
                border: 1px solid #ccc;
                box-sizing: border-box; /* Important for padding */
            }
            .contact-form textarea {
                height: 120px;
                resize: vertical;
            }
            .contact-form button {
                background-color: #B88E2F;
                color: white;
                padding: 12px 60px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-weight: 500;
                font-size: 16px;
            }

            /* --- Shop Page Styles --- */
            .shop-banner-bg {
                background-image: url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80');
            }

            .filter-bar {
                background-color: #F9F1E7;
                padding: 20px 0;
            }

            .filter-bar .container {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: center;
                gap: 20px;
            }

            .filter-options {
                display: flex;
                align-items: center;
                gap: 15px;
            }

            .filter-options .filter-icon {
                font-size: 24px;
                font-weight: 700;
            }

            .filter-options span, .result-count {
                font-weight: 400;
            }

            .view-options {
                display: flex;
                align-items: center;
                gap: 15px;
            }

            .show-sort-options {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 20px;
            }

            .show-sort-options label {
                font-weight: 500;
            }

            .show-sort-options select,
            .show-sort-options input {
                padding: 8px 12px;
                border: 1px solid #9F9F9F;
                border-radius: 5px;
                background-color: white;
            }

            /* Shop Product Grid */
            .shop-product-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 30px;
            }

            /* Pagination */
            .pagination {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 15px;
                margin-top: 50px;
            }

            .pagination a {
                text-decoration: none;
                color: #333;
                padding: 10px 18px;
                border-radius: 10px;
                background-color: #F9F1E7;
                font-weight: 500;
            }

            .pagination a.active,
            .pagination a:hover {
                background-color: #B88E2F;
                color: #fff;
            }
        `}
    </style>
);


// Main App Component
function App() {
    const [view, setView] = useState('home'); // 'home', 'cart', 'contact', or 'shop'

    return (
        <div className="App">
            <GlobalStyles />
            <Header setView={setView} />

            {view === 'home' && (
                <main>
                    <HeroSection />
                    <BrowseRange />
                    <ProductsSection />
                    <InspirationSection />
                    <ShareSetupSection />
                </main>
            )}

            {view === 'cart' && <CartPage />}

            {view === 'contact' && <ContactPage />}

            {view === 'shop' && <ShopPage />}
            
            <Footer />
        </div>
    );
}

export default App;