import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/ImageWithFallback';

export function Home() {
    return (
        <div className="min-h-screen">
            <Navigation />
            <section className="pt-32 pb-24 px-6 md:px-12 bg-brand-sand/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative z-10">
                            <span className="text-xs uppercase tracking-[0.4em] text-brand-clay font-bold mb-6 block">
                                Toronto Boutique Studio
                            </span>
                            <h1
                                style={{ fontFamily: 'var(--font-serif)' }}
                                className="text-7xl md:text-8xl leading-none mb-8 text-brand-slate"
                            >
                                Style that defines you.
                            </h1>
                            <p
                                style={{ fontFamily: 'var(--font-sans)' }}
                                className="text-base text-brand-slate/60 leading-relaxed mb-12 max-w-md font-medium"
                            >
                                Experience the art of refined hairstyling in the heart of Yorkville.
                                Where precision meets elegance, and every cut tells a story.
                            </p>
                            <Link
                                to="/booking"
                                className="inline-block bg-brand-sage text-white px-12 py-5 hover:bg-brand-slate transition-all font-bold uppercase tracking-widest text-xs"
                                style={{ fontFamily: 'var(--font-sans)', borderRadius: '0' }}
                            >
                                Book Appointment
                            </Link>
                        </div>
                        <div className="relative aspect-[3/4] overflow-hidden shadow-2xl">
                            <ImageWithFallback
                                src="/images/hero.jpg"
                                alt="Elegant salon interior"
                                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[2s]"
                            />
                            <div className="absolute inset-0 border-[20px] border-white/20 pointer-events-none" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-32 px-6 md:px-12 bg-brand-sage text-white relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <p
                        style={{ fontFamily: 'var(--font-serif)' }}
                        className="text-3xl md:text-4xl leading-relaxed italic"
                    >
                        "At Elegant Cuts, we believe that a haircut is more than just a service—it's an experience of transformation."
                    </p>
                    <div className="w-20 h-1 bg-brand-clay mx-auto mt-12" />
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <span className="text-xs uppercase tracking-[0.4em] text-brand-clay font-bold mb-6 block">
                        Our Specialties
                    </span>
                    <h2
                        style={{ fontFamily: 'var(--font-serif)' }}
                        className="text-6xl md:text-7xl text-brand-slate"
                    >
                        Featured Services
                    </h2>
                </div>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                name: 'Precision Cut',
                                description: 'A meticulous approach to cutting, tailored to your face shape and lifestyle.',
                                price: '$45',
                                image: '/images/precision.jpg'
                            },
                            {
                                name: 'Color & Tone',
                                description: 'Expert color application with premium, gentle formulations.',
                                price: '$85',
                                image: '/images/color.jpg'
                            },
                            {
                                name: 'Treatment',
                                description: 'Restorative hair care using modern botanical ingredients.',
                                price: '$35',
                                image: '/images/deep.jpg'
                            }
                        ].map((service, index) => (
                            <div key={index} className="group flex flex-col h-full bg-brand-sand/10 border border-brand-sage/5 hover:border-brand-sage/20 transition-all duration-500">
                                <div className="aspect-[3/4] overflow-hidden">
                                    <ImageWithFallback
                                        src={service.image}
                                        alt={service.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3
                                        style={{ fontFamily: 'var(--font-serif)' }}
                                        className="text-3xl mb-4 text-brand-slate"
                                    >
                                        {service.name}
                                    </h3>
                                    <p
                                        style={{ fontFamily: 'var(--font-sans)' }}
                                        className="text-sm text-brand-slate/60 mb-8 leading-relaxed flex-1 font-medium"
                                    >
                                        {service.description}
                                    </p>
                                    <div className="flex justify-between items-center pt-6 border-t border-brand-sage/10">
                                        <span
                                            style={{ fontFamily: 'var(--font-sans)' }}
                                            className="text-lg font-serif text-brand-clay"
                                        >
                                            From {service.price}
                                        </span>
                                        <Link
                                            to="/services"
                                            style={{ fontFamily: 'var(--font-sans)' }}
                                            className="text-[10px] uppercase tracking-widest font-black hover:text-brand-clay transition-colors"
                                        >
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-32 px-6 md:px-12 bg-brand-sand/20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <span className="text-xs uppercase tracking-[0.4em] text-brand-clay font-bold mb-6 block">
                                The Hands Behind the Craft
                            </span>
                            <h2
                                style={{ fontFamily: 'var(--font-serif)' }}
                                className="text-6xl md:text-7xl mb-12 leading-tight text-brand-slate"
                            >
                                Meet the Artisans
                            </h2>
                            <p
                                style={{ fontFamily: 'var(--font-sans)' }}
                                className="text-lg text-brand-slate/60 leading-relaxed mb-12 max-w-xl font-medium"
                            >
                                At Elegant Cuts, we believe hairstyling is a form of architectural art.
                                Our boutique Toronto studio is home to three master stylists, each bringing
                                a unique perspective to the modern aesthetic.
                            </p>

                            <div className="space-y-8 mb-12 font-sans">
                                <div className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 bg-brand-sage flex items-center justify-center text-white font-serif italic text-xl flex-shrink-0">A</div>
                                    <div>
                                        <h4 className="text-xl font-serif text-brand-slate group-hover:text-brand-clay transition-colors">Alex Rivera — Senior Stylist</h4>
                                        <p className="text-sm text-brand-slate/60 leading-relaxed mt-1">Specializing in structure and modern silhouettes with over 15 years experience.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 bg-brand-clay flex items-center justify-center text-white font-serif italic text-xl flex-shrink-0">J</div>
                                    <div>
                                        <h4 className="text-xl font-serif text-brand-slate group-hover:text-brand-clay transition-colors">Jordan Smith — Color Expert</h4>
                                        <p className="text-sm text-brand-slate/60 leading-relaxed mt-1">A visionary in organic balayage and botanical-safe color transformations.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 bg-brand-slate flex items-center justify-center text-white font-serif italic text-xl flex-shrink-0">C</div>
                                    <div>
                                        <h4 className="text-xl font-serif text-brand-slate group-hover:text-brand-clay transition-colors">Casey Bell — Master Barber</h4>
                                        <p className="text-sm text-brand-slate/60 leading-relaxed mt-1">Fusing traditional precision with contemporary style for the modern gentleman.</p>
                                    </div>
                                </div>
                            </div>

                            <Link
                                to="/booking"
                                className="inline-block border-b-2 border-brand-clay text-brand-clay pb-2 hover:text-brand-slate hover:border-brand-slate transition-all font-bold uppercase tracking-widest text-xs"
                                style={{ fontFamily: 'var(--font-sans)' }}
                            >
                                Book with a Specialist
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="pt-12">
                                    <img
                                        src="/images/stylist1.jpg"
                                        alt="Alex Rivera"
                                        className="w-full aspect-[4/5] object-cover shadow-xl"
                                    />
                                </div>
                                <div>
                                    <img
                                        src="/images/stylist2.jpg"
                                        alt="Jordan Smith"
                                        className="w-full aspect-[4/5] object-cover shadow-xl"
                                    />
                                </div>
                            </div>
                            <div className="absolute -inset-4 border border-brand-sage/20 -z-10 translate-x-8 translate-y-8" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-32 px-6 md:px-12 bg-brand-slate text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-20 -left-20 w-80 h-80 rounded-full bg-brand-clay blur-3xl" />
                    <div className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-brand-sage blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-24">
                        <span className="text-xs uppercase tracking-[0.4em] text-brand-clay font-bold mb-6 block">
                            Voices of the Studio
                        </span>
                        <h2
                            style={{ fontFamily: 'var(--font-serif)' }}
                            className="text-6xl md:text-7xl mb-8 leading-tight"
                        >
                            Client Experiences
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                text: "The most precise cut I've ever had. Every snippet felt intentional. Truly a masterpiece of modern craftsmanship.",
                                author: "David Miller",
                                role: "Creative Director",
                                color: "bg-brand-sage"
                            },
                            {
                                text: "A beautiful space in Yorkville with even better service. The atmosphere is an oasis of calm that I look forward toทุก month.",
                                author: "Sarah Jenkins",
                                role: "Architect",
                                color: "bg-brand-sand text-brand-slate"
                            },
                            {
                                text: "Finally found a studio in Toronto that understands the intersection of minimalist elegance and bold personality.",
                                author: "Marcus Chen",
                                role: "Designer",
                                color: "bg-brand-clay"
                            }
                        ].map((testimonial, index) => (
                            <div
                                key={index}
                                className={`${testimonial.color} p-12 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-500`}
                                style={{ borderRadius: '0' }}
                            >
                                <div className="mb-12">
                                    <div className="text-4xl mb-8 opacity-40 italic">"</div>
                                    <p
                                        style={{ fontFamily: 'var(--font-sans)' }}
                                        className="text-lg leading-relaxed font-medium"
                                    >
                                        {testimonial.text}
                                    </p>
                                </div>
                                <div>
                                    <div className="w-12 h-[1px] bg-current opacity-30 mb-6" />
                                    <p
                                        style={{ fontFamily: 'var(--font-serif)' }}
                                        className="text-xl mb-1"
                                    >
                                        {testimonial.author}
                                    </p>
                                    <p
                                        style={{ fontFamily: 'var(--font-sans)' }}
                                        className="text-xs uppercase tracking-widest opacity-60"
                                    >
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 text-center">
                        <Link
                            to="/booking"
                            className="inline-flex items-center gap-4 bg-white text-brand-slate px-12 py-5 hover:bg-brand-sand transition-all font-bold uppercase tracking-widest text-xs"
                        >
                            Join the Experience
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
