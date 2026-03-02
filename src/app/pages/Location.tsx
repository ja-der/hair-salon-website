import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { MapPin, Clock, Compass } from 'lucide-react';

export function Location() {
    const hours = [
        { day: 'Monday', time: '10:00 — 20:00' },
        { day: 'Tuesday', time: '10:00 — 20:00' },
        { day: 'Wednesday', time: '10:00 — 20:00' },
        { day: 'Thursday', time: '10:00 — 20:00' },
        { day: 'Friday', time: '10:00 — 20:00' },
        { day: 'Saturday', time: '09:00 — 19:00' },
        { day: 'Sunday', time: '09:00 — 19:00' }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            <section className="pt-40 pb-20 px-6 md:px-12 bg-brand-sand/30">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                        <div className="max-w-2xl">
                            <span className="text-xs uppercase tracking-[0.4em] text-brand-clay font-bold mb-6 block">
                                Visit the Studio
                            </span>
                            <h1
                                style={{ fontFamily: 'var(--font-serif)' }}
                                className="text-7xl md:text-8xl text-brand-slate leading-none"
                            >
                                Our Location
                            </h1>
                        </div>
                        <div className="text-right hidden md:block">
                            <p className="text-sm text-brand-slate/40 uppercase tracking-widest font-bold">
                                Yorkville <br />
                                Toronto, Ontario
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                        <div className="space-y-24">
                            <div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-brand-sage text-white flex items-center justify-center">
                                        <MapPin size={20} />
                                    </div>
                                    <h2 className="text-xs uppercase tracking-widest font-bold text-brand-clay">Address</h2>
                                </div>
                                <address
                                    style={{ fontFamily: 'var(--font-serif)' }}
                                    className="text-5xl not-italic leading-tight text-brand-slate"
                                >
                                    123 Yorkville Ave<br />
                                    Toronto, ON M5R 1C4
                                </address>
                                <p className="mt-8 text-brand-slate/60 max-w-sm leading-relaxed font-medium">
                                    Located in the heart of Yorkville neighbourhood,
                                    our studio is a sanctuary of style and precision.
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-brand-clay text-white flex items-center justify-center">
                                        <Compass size={20} />
                                    </div>
                                    <h2 className="text-xs uppercase tracking-widest font-bold text-brand-clay">Getting Here</h2>
                                </div>
                                <div className="space-y-6">
                                    <div className="border-l-2 border-brand-sand pl-8 py-2 font-sans">
                                        <h4 className="font-bold text-brand-slate mb-1">Via Public Transit</h4>
                                        <p className="text-sm text-brand-slate/60">A 5-minute walk from Bay Station (Line 2). Exit toward Cumberland St.</p>
                                    </div>
                                    <div className="border-l-2 border-brand-sand pl-8 py-2 font-sans">
                                        <h4 className="font-bold text-brand-slate mb-1">By Car</h4>
                                        <p className="text-sm text-brand-slate/60">Underground parking available at Cumberland Terrace or green P-parking on Yorkville Ave.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-brand-sand">
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-widest font-black text-brand-clay mb-4">Phone</h4>
                                    <a href="tel:4161234567" className="text-xl font-serif text-brand-slate hover:text-brand-clay transition-colors">+1 416 123 4567</a>
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-widest font-black text-brand-clay mb-4">Email</h4>
                                    <a href="mailto:hello@elegantcuts.ca" className="text-xl font-serif text-brand-slate hover:text-brand-clay transition-colors">hello@elegantcuts.ca</a>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-16">
                            <div className="relative aspect-square overflow-hidden bg-brand-sand/50 group">
                                <img
                                    src="https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=1200"
                                    alt="Yorkville Toronto"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-white/90 backdrop-blur-sm p-8 shadow-2xl border border-brand-sand flex flex-col items-center">
                                        <MapPin size={32} className="text-brand-clay mb-4" />
                                        <span className="text-[10px] uppercase tracking-[0.3em] font-black">Studio Coordinates</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-brand-slate p-12 text-white">
                                <div className="flex items-center gap-4 mb-10">
                                    <Clock size={20} className="text-brand-clay" />
                                    <h2 className="text-xs uppercase tracking-widest font-bold">Opening Hours</h2>
                                </div>
                                <div className="space-y-4">
                                    {hours.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex justify-between items-baseline pb-4 border-b border-white/10 last:border-0"
                                        >
                                            <span className="text-sm font-sans opacity-60 uppercase tracking-widest text-[10px] font-black">{item.day}</span>
                                            <span className="text-sm font-serif">{item.time}</span>
                                        </div>
                                    ))}
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
