import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export function ClientInfo() {
    const navigate = useNavigate();
    const location = useLocation();
    const bookingData = location.state || {};

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        notes: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/confirmation', {
            state: {
                ...bookingData,
                ...formData
            }
        });
    };

    return (
        <div className="min-h-screen">
            <Navigation />

            <section className="pt-32 pb-24 px-6 md:px-12">
                <div className="max-w-2xl mx-auto">
                    <h1
                        style={{ fontFamily: 'var(--font-serif)' }}
                        className="text-7xl mb-8"
                    >
                        Your Information
                    </h1>
                    <p
                        style={{ fontFamily: 'var(--font-sans)' }}
                        className="text-base text-muted-foreground leading-relaxed mb-16"
                    >
                        Please provide your contact details to complete your booking.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div>
                                <label
                                    htmlFor="firstName"
                                    style={{ fontFamily: 'var(--font-sans)' }}
                                    className="text-xs uppercase tracking-wider opacity-50 block mb-3"
                                >
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full bg-input-background border border-foreground/10 px-6 py-4 hover:border-foreground/20 focus:border-foreground/30 transition-colors outline-none"
                                    style={{ fontFamily: 'var(--font-sans)' }}
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="lastName"
                                    style={{ fontFamily: 'var(--font-sans)' }}
                                    className="text-xs uppercase tracking-wider opacity-50 block mb-3"
                                >
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full bg-input-background border border-foreground/10 px-6 py-4 hover:border-foreground/20 focus:border-foreground/30 transition-colors outline-none"
                                    style={{ fontFamily: 'var(--font-sans)' }}
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                style={{ fontFamily: 'var(--font-sans)' }}
                                className="text-xs uppercase tracking-wider opacity-50 block mb-3"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-input-background border border-foreground/10 px-6 py-4 hover:border-foreground/20 focus:border-foreground/30 transition-colors outline-none"
                                style={{ fontFamily: 'var(--font-sans)' }}
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="phone"
                                style={{ fontFamily: 'var(--font-sans)' }}
                                className="text-xs uppercase tracking-wider opacity-50 block mb-3"
                            >
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full bg-input-background border border-foreground/10 px-6 py-4 hover:border-foreground/20 focus:border-foreground/30 transition-colors outline-none"
                                style={{ fontFamily: 'var(--font-sans)' }}
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="notes"
                                style={{ fontFamily: 'var(--font-sans)' }}
                                className="text-xs uppercase tracking-wider opacity-50 block mb-3"
                            >
                                Additional Notes (Optional)
                            </label>
                            <textarea
                                id="notes"
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                rows={4}
                                className="w-full bg-input-background border border-foreground/10 px-6 py-4 hover:border-foreground/20 focus:border-foreground/30 transition-colors outline-none resize-none"
                                style={{ fontFamily: 'var(--font-sans)' }}
                                placeholder="Any special requests or preferences..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary text-primary-foreground px-12 py-4 hover:opacity-90 transition-opacity"
                            style={{ fontFamily: 'var(--font-sans)' }}
                        >
                            <span className="text-sm uppercase tracking-wider">Confirm Booking</span>
                        </button>
                    </form>
                </div>
            </section>

            <Footer />
        </div>
    );
}
