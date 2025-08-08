

const VolunteerHero = () => (
    <section className="volunteer-hero">
        <div className="volunteer-hero__content">
            <h1>Become a Volunteer</h1>
            <p>
                Join our mission to make a difference! As a volunteer, you’ll help create a positive impact in our community.
            </p>
            <a href="/volunteer/signup" className="volunteer-hero__cta">
                Sign Up Now
            </a>
        </div>
        <style jsx>{`
            .volunteer-hero {
                background: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
                padding: 60px 20px;
                text-align: center;
                border-radius: 12px;
                margin-bottom: 32px;
            }
            .volunteer-hero__content {
                max-width: 600px;
                margin: 0 auto;
            }
            .volunteer-hero__cta {
                display: inline-block;
                margin-top: 24px;
                padding: 12px 32px;
                background: #fff;
                color: #f76b1c;
                border-radius: 6px;
                font-weight: bold;
                text-decoration: none;
                transition: background 0.2s;
            }
            .volunteer-hero__cta:hover {
                background: #f6d365;
            }
        `}</style>
    </section>
);

export default VolunteerHero;