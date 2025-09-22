import ProductCard from "./ProductCard";
const ProductsSection = () => {
    const products = [
        { img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&q=80', tag: '-30%', name: 'Syltherine', description: 'Stylish cafe chair', price: 'Rp 2.500.000', oldPrice: 'Rp 3.500.000' },
        { img: 'https://www.bing.com/th/id/OIP.WswHzG5kIFV0EFfUgMwdJQHaHa?w=178&h=211&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2', tag: '', name: 'Leviosa', description: 'Stylish cafe chair', price: 'Rp 2.500.000' },
        { img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80', tag: '-50%', name: 'Lolito', description: 'Luxury big sofa', price: 'Rp 7.000.000', oldPrice: 'Rp 14.000.000' },
        { img: 'https://www.bing.com/th/id/OIP.09GA5k_U6l7bRZEM8gjvSQHaFV?w=240&h=211&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2', tag: 'New', name: 'Respira', description: 'Outdoor bar table and stool', price: 'Rp 500.000' },
        { img: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=500&q=80', tag: '', name: 'Grifo', description: 'Night lamp', price: 'Rp 1.500.000' },
        { img: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=500&q=80', tag: 'New', name: 'Muggo', description: 'Small mug', price: 'Rp 150.000' },
        { img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80', tag: '-50%', name: 'Pingky', description: 'Cute bed set', price: 'Rp 7.000.000', oldPrice: 'Rp 14.000.000' },
        { img: 'https://th.bing.com/th/id/OIP.1xahOFNWRG1-Ya3-tv0k1AHaIJ?w=168&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3', tag: 'New', name: 'Potty', description: 'Minimalist flower pot', price: 'Rp 500.000' },
    ];


    return (
        <section className="products-section section-padding">
            <div className="container text-center">
                <h2 className="section-title">Our Products</h2>
                <div className="product-grid">
                    {products.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
                <button className="show-more-btn">Show More</button>
            </div>
        </section>
    );
};
export default ProductsSection ;