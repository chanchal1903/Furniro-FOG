// Footer Component
const Footer = () => (
    <footer className="footer section-padding">
        <div className="container footer-grid">
            <div className="footer-about">
                <h4>Funiro.</h4>
                <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
            </div>
            <div className="footer-links">
                <p>Links</p>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="footer-help">
                <p>Help</p>
                <ul>
                    <li><a href="#">Payment Options</a></li>
                    <li><a href="#">Returns</a></li>
                    <li><a href="#">Privacy Policies</a></li>
                </ul>
            </div>
            <div className="footer-newsletter">
                <p>Newsletter</p>
                <form>
                    <input type="email" placeholder="Enter Your Email Address" />
                    <button type="submit">SUBSCRIBE</button>
                </form>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <p>2023 furino. All rights reserved</p>
            </div>
        </div>
    </footer>
);
export default Footer ;