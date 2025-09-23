import React from 'react';
const BrowseRange = () => (
    <section className="browse-range section-padding">
        <div className="container text-center">
            <h2 className="section-title">Browse The Range</h2>
            <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="range-container">
                <div className="range-item">
                    <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500&q=80" alt="Dining" />
                    <h3>Dining</h3>
                </div>
                <div className="range-item">
                    <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80" alt="Living" />
                    <h3>Living</h3>
                </div>
                <div className="range-item">
                    <img src="https://images.unsplash.com/photo-1595526114035-0d45ed16433d?w=500&q=80" alt="Bedroom" />
                    <h3>Bedroom</h3>
                </div>
            </div>
        </div>
    </section>
);
export default BrowseRange;