import { Link, useLocation } from 'react-router';

export function Navigation() {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
                <div className="flex items-center justify-between">
                    <Link to="/" style={{ fontFamily: 'var(--font-serif)' }} className="text-2xl tracking-tight">
                        Elegant Cuts
                    </Link>

                    <div className="flex gap-12" style={{ fontFamily: 'var(--font-sans)' }}>
                        <Link
                            to="/"
                            className={`text-sm uppercase tracking-wider transition-opacity hover:opacity-60 ${isActive('/') ? 'opacity-100' : 'opacity-50'
                                }`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/services"
                            className={`text-sm uppercase tracking-wider transition-opacity hover:opacity-60 ${isActive('/services') ? 'opacity-100' : 'opacity-50'
                                }`}
                        >
                            Services
                        </Link>
                        <Link
                            to="/booking"
                            className={`text-sm uppercase tracking-wider transition-opacity hover:opacity-60 ${isActive('/booking') ? 'opacity-100' : 'opacity-50'
                                }`}
                        >
                            Book
                        </Link>
                        <Link
                            to="/location"
                            className={`text-sm uppercase tracking-wider transition-opacity hover:opacity-60 ${isActive('/location') ? 'opacity-100' : 'opacity-50'
                                }`}
                        >
                            Location
                        </Link>
                        <Link
                            to="/contact"
                            className={`text-sm uppercase tracking-wider transition-opacity hover:opacity-60 ${isActive('/contact') ? 'opacity-100' : 'opacity-50'
                                }`}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
