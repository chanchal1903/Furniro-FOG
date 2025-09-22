import PageBanner from './cartbanner'
import ProductCard from './ProductCard';
import FeaturesSection from './featuresection';
const ShopPage = () => {
    // A larger list of products for the shop page
    const shopProducts = [
        { img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&q=80', tag: '-30%', name: 'Syltherine', description: 'Stylish cafe chair', price: 'Rp 2.500.000', oldPrice: 'Rp 3.500.000' },
        { img: 'https://www.bing.com/th/id/OIP.WswHzG5kIFV0EFfUgMwdJQHaHa?w=178&h=211&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2', tag: '', name: 'Leviosa', description: 'Stylish cafe chair', price: 'Rp 2.500.000' },
        { img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80', tag: '-50%', name: 'Lolito', description: 'Luxury big sofa', price: 'Rp 7.000.000', oldPrice: 'Rp 14.000.000' },
        { img: 'https://www.bing.com/th/id/OIP.09GA5k_U6l7bRZEM8gjvSQHaFV?w=240&h=211&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2', tag: 'New', name: 'Respira', description: 'Outdoor bar table', price: 'Rp 500.000' },
        { img: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=500&q=80', tag: '', name: 'Grifo', description: 'Night lamp', price: 'Rp 1.500.000' },
        { img: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=500&q=80', tag: 'New', name: 'Muggo', description: 'Small mug', price: 'Rp 150.000' },
        { img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80', tag: '-50%', name: 'Pingky', description: 'Cute bed set', price: 'Rp 7.000.000', oldPrice: 'Rp 14.000.000' },
        { img: 'https://th.bing.com/th/id/OIP.1xahOFNWRG1-Ya3-tv0k1AHaIJ?w=168&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3', tag: 'New', name: 'Potty', description: 'Minimalist flower pot', price: 'Rp 500.000' },
        { img: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=500&q=80', tag: '-10%', name: 'Elegant Chair', description: 'Modern dining chair', price: 'Rp 1.800.000', oldPrice: 'Rp 2.000.000' },
        { img: 'https://images.unsplash.com/photo-1561582048-2659a8571a04?w=500&q=80', tag: '', name: 'Cozy Armchair', description: 'Living room armchair', price: 'Rp 3.200.000' },
        { img: 'https://images.unsplash.com/photo-1617104679233-a2b184d431a4?w=500&q=80', tag: 'New', name: 'Wooden Stool', description: 'Simple and elegant', price: 'Rp 800.000' },
        { img: 'https://images.unsplash.com/photo-1594896975222-9a73e449a55e?w=500&q=80', tag: '-20%', name: 'Minimal Desk', description: 'For your home office', price: 'Rp 4.000.000', oldPrice: 'Rp 5.000.000' },
        { img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&q=80', tag: '-30%', name: 'Syltherine', description: 'Stylish cafe chair', price: 'Rp 2.500.000', oldPrice: 'Rp 3.500.000' },
        { img: 'https://www.bing.com/th/id/OIP.WswHzG5kIFV0EFfUgMwdJQHaHa?w=178&h=211&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2', tag: '', name: 'Leviosa', description: 'Stylish cafe chair', price: 'Rp 2.500.000' },
        { img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80', tag: '-50%', name: 'Lolito', description: 'Luxury big sofa', price: 'Rp 7.000.000', oldPrice: 'Rp 14.000.000' },
        { img: 'https://www.bing.com/th/id/OIP.09GA5k_U6l7bRZEM8gjvSQHaFV?w=240&h=211&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2', tag: 'New', name: 'Respira', description: 'Outdoor bar table', price: 'Rp 500.000' },
    ];

    return (
        <main>
            <PageBanner title="Shop" bgClass="shop-banner-bg" />
            <div className="filter-bar">
                <div className="container">
                    <div className="filter-options">
                        <span className="filter-icon">&#9776; Filter</span>
                        <div className="view-options">
                           <span>&#9638;</span>
                           <span>&#9635;</span>
                        </div>
                        <span className="result-count">Showing 1–16 of 32 results</span>
                    </div>
                    <div className="show-sort-options">
                        <label htmlFor="show">Show</label>
                        <input type="number" id="show" defaultValue="16" style={{width: '50px'}} />
                        <label htmlFor="sort">Sort by</label>
                        <select id="sort">
                            <option>Default</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Newest</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="section-padding container">
                <div className="shop-product-grid">
                    {shopProducts.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
                <div className="pagination">
                    <a href="#" className="active">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">Next</a>
                </div>
            </div>
            <FeaturesSection />
        </main>
    );
};

export default ShopPage;