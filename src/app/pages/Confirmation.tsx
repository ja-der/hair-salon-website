import { useLocation, Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Check } from 'lucide-react';

export function Confirmation() {
    const location = useLocation();
    const appointmentData = location.state || {};

    const formatDate = (date: Date) => {
        if (!date) return '';
        return new Date(date).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="min-h-screen">
            <Navigation />

            <section className="pt-32 pb-24 px-6 md:px-12">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 border border-foreground/10 mb-8">
                        <Check size={32} strokeWidth={1} />
                    </div>

                    <h1
                        style={{ fontFamily: 'var(--font-serif)' }}
                        className="text-7xl mb-8"
                    >
                        Your appointment is confirmed.
                    </h1>
                    <p
                        style={{ fontFamily: 'var(--font-sans)' }}
                        className="text-base text-muted-foreground leading-relaxed mb-16"
                    >
                        We look forward to welcoming you to Elegant Cuts.
                    </p>

                    <div className="border border-foreground/10 p-12 mb-12 text-left">
                        <h2
                            style={{ fontFamily: 'var(--font-sans)' }}
                            className="text-xs uppercase tracking-wider opacity-50 mb-8"
                        >
                            Appointment Details
                        </h2>

                        <div className="space-y-6">
                            <div className="flex justify-between py-4 border-b border-foreground/10">
                                <span
                                    style={{ fontFamily: 'var(--font-sans)' }}
                                    className="text-sm opacity-50"
                                >
                                    Service
                                </span>
                                <span
                                    style={{ fontFamily: 'var(--font-serif)' }}
                                    className="text-xl"
                                >
                                    {appointmentData.service || 'N/A'}
                                </span>
                            </div>

                            <div className="flex justify-between py-4 border-b border-foreground/10">
                                <span
                                    style={{ fontFamily: 'var(--font-sans)' }}
                                    className="text-sm opacity-50"
                                >
                                    Date
                                </span>
                                <span
                                    style={{ fontFamily: 'var(--font-sans)' }}
                                    className="text-sm"
                                >
                                    {formatDate(appointmentData.date)}
                                </span>
                            </div>

                            <div className="flex justify-between py-4 border-b border-foreground/10">
                                <span
                                    style={{ fontFamily: 'var(--font-sans)' }}
                                    className="text-sm opacity-50"
                                >
                                    Time
                                </span>
                                <span
                                    style={{ fontFamily: 'var(--font-sans)' }}
                                    className="text-sm"
                                >
                                    {appointmentData.time || 'N/A'}
                                </span>
                            </div>

                            <div className="flex justify-between py-4 border-b border-foreground/10">
                                <span
                                    style={{ fontFamily: 'var(--font-sans)' }}
                                    className="text-sm opacity-50"
                                >
                                    Client
                                </span>
                                <span
                                    style={{ fontFamily: 'var(--font-sans)' }}
                                    className="text-sm"
                                >
                                    {appointmentData.firstName} {appointmentData.lastName}
                                </span>
                            </div>

                            <div className="flex justify-between py-4">
                                <span
                                    style={{ fontFamily: 'var(--font-sans)' }}
                                    className="text-sm opacity-50"
                                >
                                    Email
                                </span>
                                <span
                                    style={{ fontFamily: 'var(--font-sans)' }}
                                    className="text-sm"
                                >
                                    {appointmentData.email || 'N/A'}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/booking"
                            style={{ fontFamily: 'var(--font-sans)' }}
                            className="text-sm underline hover:opacity-60 transition-opacity px-6 py-2"
                        >
                            Modify Appointment
                        </Link>
                        <Link
                            to="/contact"
                            style={{ fontFamily: 'var(--font-sans)' }}
                            className="text-sm underline hover:opacity-60 transition-opacity px-6 py-2"
                        >
                            Cancel Appointment
                        </Link>
                    </div>

                    <div className="mt-16">
                        <Link
                            to="/"
                            className="inline-block border border-foreground/10 px-12 py-4 hover:border-foreground/30 transition-colors"
                            style={{ fontFamily: 'var(--font-sans)' }}
                        >
                            <span className="text-sm uppercase tracking-wider">Return Home</span>
                        </Link>
                    </div>
                </div>
            </section >

            <Footer />
        </div >
    );
}
