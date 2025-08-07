import React, { useState } from 'react';

const DonationPage = () => {
    const [amount, setAmount] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would integrate with a payment API
        setSubmitted(true);
    };

    return (
        <div style={{ maxWidth: 400, margin: '2rem auto', padding: 24, border: '1px solid #eee', borderRadius: 8 }}>
            <h2>Support Our Mission</h2>
            <p>Your donation helps us continue our work. Thank you for your generosity!</p>
            {submitted ? (
                <div style={{ color: 'green', marginTop: 16 }}>
                    Thank you for your donation!
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label>
                        Donation Amount ($):
                        <input
                            type="number"
                            min="1"
                            value={amount}
                            onChange={e => setAmount(e.target.value)}
                            required
                            style={{ marginLeft: 8, padding: 4, width: 100 }}
                        />
                    </label>
                    <br />
                    <button type="submit" style={{ marginTop: 16, padding: '8px 16px' }}>
                        Donate
                    </button>
                </form>
            )}
        </div>
    );
};

export default DonationPage;