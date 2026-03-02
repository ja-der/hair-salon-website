import { Instagram, Facebook, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
    return (
        <footer className="border-t border-foreground/10 mt-32">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <h3 style={{ fontFamily: 'var(--font-serif)' }} className="text-xl mb-4">
                            Elegant Cuts
                        </h3>
                        <p style={{ fontFamily: 'var(--font-sans)' }} className="text-sm text-muted-foreground leading-relaxed">
                            Premium hair salon in Toronto, dedicated to refined style and exceptional service.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ fontFamily: 'var(--font-sans)' }} className="text-xs uppercase tracking-wider mb-4 opacity-50">
                            Quick Links
                        </h4>
                        <div className="flex flex-col gap-3" style={{ fontFamily: 'var(--font-sans)' }}>
                            <Link to="/services" className="text-sm hover:opacity-60 transition-opacity">Services</Link>
                            <Link to="/booking" className="text-sm hover:opacity-60 transition-opacity">Book Appointment</Link>
                            <Link to="/location" className="text-sm hover:opacity-60 transition-opacity">Location</Link>
                            <Link to="/contact" className="text-sm hover:opacity-60 transition-opacity">Contact</Link>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontFamily: 'var(--font-sans)' }} className="text-xs uppercase tracking-wider mb-4 opacity-50">
                            Connect
                        </h4>
                        <div className="flex flex-col gap-3 mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
                            <a href="tel:+1-416-123-4567" className="text-sm flex items-center gap-2 hover:opacity-60 transition-opacity">
                                <Phone size={14} />
                                +1 416 123 4567
                            </a>
                            <a href="mailto:hello@elegantcuts.ca" className="text-sm flex items-center gap-2 hover:opacity-60 transition-opacity">
                                <Mail size={14} />
                                hello@elegantcuts.ca
                            </a>
                        </div>
                        <div className="flex gap-4">
                            <a href="#" className="hover:opacity-60 transition-opacity">
                                <Instagram size={18} strokeWidth={1.5} />
                            </a>
                            <a href="#" className="hover:opacity-60 transition-opacity">
                                <Facebook size={18} strokeWidth={1.5} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-foreground/10 mt-12 pt-8">
                    <p style={{ fontFamily: 'var(--font-sans)' }} className="text-xs text-muted-foreground text-center">
                        © 2026 Elegant Cuts. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
