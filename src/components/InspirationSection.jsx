// Inspiration Section
const InspirationSection = () => (
    <section className="inspiration-section">
        <div className="inspiration-content">
            <h2>50+ Beautiful rooms inspiration</h2>
            <p>Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
            <button>Explore More</button>
        </div>
        <div className="inspiration-images">
             <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&q=80" alt="Inspiration 1" className="main-image"/>
             <div className="sub-image-container">
                <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500&q=80" alt="Inspiration 2"/>
                <div className="sub-image-info">
                    <p>01 — Bed Room</p>
                    <h4>Inner Peace</h4>
                </div>
                <button className="arrow-btn">→</button>
             </div>
        </div>
    </section>
);
export default InspirationSection ;