const PageBanner = ({ title, bgClass }) => (
    <section className={`page-banner ${bgClass}`}>
        <h1>{title}</h1>
        <p><a href="#">Home</a> &gt; {title}</p>
    </section>
);