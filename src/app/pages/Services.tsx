import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export function Services() {
    const services = [
        {
            name: 'Precision Cut',
            description: 'A meticulous approach to cutting, tailored to your unique face shape and lifestyle. Our stylists take time to understand your needs before each precise snip.',
            duration: '30 min',
            price: '$35',
            image: '/images/precision.jpg'
        },
        {
            name: 'Wash & Cut',
            description: 'Complete service including a relaxing wash with premium products, scalp massage, and expert cutting.',
            duration: '45 min',
            price: '$45',
            image: '/images/wash.jpg'
        },
        {
            name: 'Color & Tone',
            description: 'Expert color application using premium, gentle formulations. From subtle highlights to complete transformations, executed with care.',
            duration: '120 min',
            price: '$85',
            image: '/images/color.jpg'
        },
        {
            name: 'Balayage',
            description: 'Hand-painted highlights for a natural, sun-kissed effect. A refined technique for dimensional color.',
            duration: '150 min',
            price: '$135',
            image: '/images/balayage.jpg'
        },
        {
            name: 'Deep Treatment',
            description: 'Restorative hair care using modern botanical ingredients. Repairs damage and restores natural shine.',
            duration: '45 min',
            price: '$35',
            image: '/images/deep.jpg'
        },
        {
            name: 'Scalp Treatment',
            description: 'A therapeutic experience focused on scalp health. Includes massage, cleansing, and nourishing treatment.',
            duration: '30 min',
            price: '$25',
            image: '/images/scalp.jpg'
        },
        {
            name: 'Styling Session',
            description: 'Professional styling for special occasions. Includes consultation, styling, and finishing touches.',
            duration: '60 min',
            price: '$40',
            image: '/images/styling.jpg'
        },
        {
            name: 'Consultation',
            description: 'Complimentary one-on-one consultation with our senior stylist to discuss your hair goals and recommendations.',
            duration: '20 min',
            price: 'Free',
            image: '/images/consultation.jpg'
        }
    ];

    return (
        <div className="min-h-screen">
            <Navigation />

            <section className="pt-32 pb-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <h1
                        style={{ fontFamily: 'var(--font-serif)' }}
                        className="text-7xl mb-8 text-brand-slate"
                    >
                        Our Services
                    </h1>
                    <p
                        style={{ fontFamily: 'var(--font-sans)' }}
                        className="text-base text-muted-foreground leading-relaxed mb-24 max-w-2xl font-medium"
                    >
                        Each service is designed to deliver exceptional results through precision,
                        care, and the finest products.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`group relative flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-brand-sage/10 ${index % 3 === 0 ? 'bg-brand-sage text-white' :
                                    index % 3 === 1 ? 'bg-brand-sand text-brand-slate' :
                                        'bg-brand-slate text-white'
                                    }`}
                                style={{ borderRadius: '0' }}
                            >
                                <div className="h-80 overflow-hidden relative">
                                    <img
                                        src={service.image}
                                        alt={service.name}
                                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-95"
                                    />
                                    <div className="absolute inset-0 bg-brand-slate/10 group-hover:bg-transparent transition-colors duration-500" />

                                    <div className={`absolute top-6 right-6 px-6 py-2 font-bold tracking-widest text-xs ${index % 3 === 1 ? 'bg-brand-sage text-white' : 'bg-white text-brand-slate'
                                        }`}>
                                        {service.price}
                                    </div>
                                </div>

                                <div className="p-10 flex flex-col flex-1 relative">
                                    <div className="mb-12 relative z-10">
                                        <span className={`text-[10px] uppercase tracking-[0.4em] font-bold block mb-6 px-3 py-1 inline-block border ${index % 3 === 1 ? 'border-brand-clay text-brand-clay' : 'border-white/30 text-white/70'
                                            }`}>
                                            Ref. 0{index + 1}
                                        </span>
                                        <h2
                                            style={{ fontFamily: 'var(--font-serif)' }}
                                            className="text-4xl mb-6 leading-tight"
                                        >
                                            {service.name}
                                        </h2>
                                        <p
                                            style={{ fontFamily: 'var(--font-sans)' }}
                                            className={`text-sm leading-relaxed mb-8 font-medium ${index % 3 === 1 ? 'text-brand-slate/70' : 'text-white/70'
                                                }`}
                                        >
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between relative z-10 mt-auto pt-8 border-t border-current/10">
                                        <div className="flex gap-10" style={{ fontFamily: 'var(--font-sans)' }}>
                                            <div>
                                                <span className="text-[10px] uppercase tracking-[0.2em] opacity-60 block mb-2 font-black">
                                                    Duration
                                                </span>
                                                <span className="text-sm font-bold">{service.duration}</span>
                                            </div>
                                            <div>
                                                <span className="text-[10px] uppercase tracking-[0.2em] opacity-60 block mb-2 font-black">
                                                    Service
                                                </span>
                                                <span className="text-sm font-bold">In-Studio</span>
                                            </div>
                                        </div>

                                        <Link
                                            to="/booking"
                                            style={{ fontFamily: 'var(--font-sans)' }}
                                            className={`px-10 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${index % 3 === 1 ? 'bg-brand-sage text-white hover:bg-brand-slate shadow-xl' :
                                                index % 3 === 0 ? 'bg-white text-brand-sage hover:bg-brand-sand shadow-xl' :
                                                    'bg-brand-clay text-white hover:bg-brand-sage shadow-xl'
                                                }`}
                                        >
                                            Reserve
                                        </Link>
                                    </div>

                                    <div className={`absolute -right-16 -bottom-16 w-48 h-48 rounded-full opacity-5 group-hover:opacity-20 group-hover:scale-150 transition-all duration-1000 ${index % 3 === 1 ? 'bg-brand-clay' : 'bg-white'
                                        }`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
