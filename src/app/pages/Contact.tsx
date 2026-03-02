import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router';

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setFormData({ name: '', email: '', subject: '', message: '' });
            setSubmitted(false);
        }, 3000);
    };

    return (
        <div className="min-h-screen">
            <Navigation />

            <section className="pt-32 pb-24 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <h1
                        style={{ fontFamily: 'var(--font-serif)' }}
                        className="text-7xl mb-8"
                    >
                        Contact
                    </h1>
                    <p
                        style={{ fontFamily: 'var(--font-sans)' }}
                        className="text-base text-muted-foreground leading-relaxed mb-16 max-w-2xl"
                    >
                        Have a question or special request? We'd love to hear from you.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div className="bg-white p-12 border border-brand-sage/10 shadow-sm">
                            {submitted ? (
                                <div className="p-12 text-center">
                                    <p
                                        style={{ fontFamily: 'var(--font-serif)' }}
                                        className="text-3xl mb-4 text-brand-sage"
                                    >
                                        Thank you for reaching out.
                                    </p>
                                    <p
                                        style={{ fontFamily: 'var(--font-sans)' }}
                                        className="text-sm text-muted-foreground"
                                    >
                                        We'll respond within 24 hours.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-10">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            style={{ fontFamily: 'var(--font-sans)' }}
                                            className="text-xs uppercase tracking-widest font-bold text-brand-sage block mb-4"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-brand-sand/30 border-b border-brand-sage/20 px-4 py-4 hover:border-brand-sage/40 focus:border-brand-sage focus:outline-none transition-all"
                                            style={{ fontFamily: 'var(--font-sans)' }}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            style={{ fontFamily: 'var(--font-sans)' }}
                                            className="text-xs uppercase tracking-widest font-bold text-brand-sage block mb-4"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-brand-sand/30 border-b border-brand-sage/20 px-4 py-4 hover:border-brand-sage/40 focus:border-brand-sage focus:outline-none transition-all"
                                            style={{ fontFamily: 'var(--font-sans)' }}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="subject"
                                            style={{ fontFamily: 'var(--font-sans)' }}
                                            className="text-xs uppercase tracking-widest font-bold text-brand-sage block mb-4"
                                        >
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full bg-brand-sand/30 border-b border-brand-sage/20 px-4 py-4 hover:border-brand-sage/40 focus:border-brand-sage focus:outline-none transition-all"
                                            style={{ fontFamily: 'var(--font-sans)' }}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            style={{ fontFamily: 'var(--font-sans)' }}
                                            className="text-xs uppercase tracking-widest font-bold text-brand-sage block mb-4"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={6}
                                            className="w-full bg-brand-sand/30 border-b border-brand-sage/20 px-4 py-4 hover:border-brand-sage/40 focus:border-brand-sage focus:outline-none transition-all resize-none"
                                            style={{ fontFamily: 'var(--font-sans)' }}
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-brand-sage text-white px-12 py-5 hover:bg-brand-sage/90 transition-all font-bold uppercase tracking-widest text-xs"
                                        style={{ fontFamily: 'var(--font-sans)', borderRadius: '0' }}
                                    >
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>

                        <div className="bg-brand-sage text-white p-12 space-y-12">
                            <div>
                                <h2
                                    style={{ fontFamily: 'var(--font-sans)' }}
                                    className="text-xs uppercase tracking-[0.2em] font-bold text-brand-clay mb-8"
                                >
                                    Contact Details
                                </h2>
                                <div className="space-y-10">
                                    <a
                                        href="tel:+1-416-123-4567"
                                        className="flex items-start gap-6 group"
                                    >
                                        <div className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-all">
                                            <Phone size={18} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <p
                                                style={{ fontFamily: 'var(--font-sans)' }}
                                                className="text-xs uppercase tracking-widest opacity-60 mb-1 font-bold"
                                            >
                                                Phone
                                            </p>
                                            <p
                                                style={{ fontFamily: 'var(--font-serif)' }}
                                                className="text-2xl"
                                            >
                                                +1 416 123 4567
                                            </p>
                                        </div>
                                    </a>

                                    <a
                                        href="mailto:hello@elegantcuts.ca"
                                        className="flex items-start gap-6 group"
                                    >
                                        <div className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-all">
                                            <Mail size={18} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <p
                                                style={{ fontFamily: 'var(--font-sans)' }}
                                                className="text-xs uppercase tracking-widest opacity-60 mb-1 font-bold"
                                            >
                                                Email
                                            </p>
                                            <p
                                                style={{ fontFamily: 'var(--font-serif)' }}
                                                className="text-2xl"
                                            >
                                                hello@elegantcuts.ca
                                            </p>
                                        </div>
                                    </a>

                                    <Link
                                        to="/location"
                                        className="flex items-start gap-6 group"
                                    >
                                        <div className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-all">
                                            <MapPin size={18} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <p
                                                style={{ fontFamily: 'var(--font-sans)' }}
                                                className="text-xs uppercase tracking-widest opacity-60 mb-1 font-bold"
                                            >
                                                Location
                                            </p>
                                            <p
                                                style={{ fontFamily: 'var(--font-serif)' }}
                                                className="text-2xl leading-snug"
                                            >
                                                123 Yorkville Ave<br />
                                                Toronto, ON
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="pt-12 border-t border-white/10">
                                <h2
                                    style={{ fontFamily: 'var(--font-sans)' }}
                                    className="text-xs uppercase tracking-[0.2em] font-bold text-brand-clay mb-8"
                                >
                                    Follow the Studio
                                </h2>
                                <div className="flex gap-8">
                                    <a
                                        href="#"
                                        className="flex items-center gap-4 hover:text-brand-clay transition-all group"
                                    >
                                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-clay">
                                            <Instagram size={16} strokeWidth={1.5} />
                                        </div>
                                        <span
                                            style={{ fontFamily: 'var(--font-sans)' }}
                                            className="text-sm font-bold uppercase tracking-widest"
                                        >
                                            Instagram
                                        </span>
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center gap-4 hover:text-brand-clay transition-all group"
                                    >
                                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-clay">
                                            <Facebook size={16} strokeWidth={1.5} />
                                        </div>
                                        <span
                                            style={{ fontFamily: 'var(--font-sans)' }}
                                            className="text-sm font-bold uppercase tracking-widest"
                                        >
                                            Facebook
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
