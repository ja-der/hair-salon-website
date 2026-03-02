import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Booking() {
    const navigate = useNavigate();
    const [selectedService, setSelectedService] = useState('');
    const [selectedStylist, setSelectedStylist] = useState('');
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2026, 2, 1)); // Default to first day for demo
    const [selectedTime, setSelectedTime] = useState('');
    const [currentMonth, setCurrentMonth] = useState(new Date(2026, 2, 1)); // March 2026

    const services = [
        'Precision Cut',
        'Wash & Cut',
        'Color & Tone',
        'Balayage',
        'Deep Treatment',
        'Scalp Treatment',
        'Styling Session'
    ];

    const stylists = [
        { id: '1', name: 'Alex Rivera', role: 'Senior Stylist' },
        { id: '2', name: 'Jordan Smith', role: 'Color Expert' },
        { id: '3', name: 'Casey Bell', role: 'Master Barber' }
    ];

    const timeSlots = [
        '09:00', '10:00', '11:00', '12:00',
        '13:00', '14:00', '15:00', '16:00',
        '17:00', '18:00', '19:00'
    ];

    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();

        return { daysInMonth, startingDayOfWeek };
    };

    const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);

    const handlePrevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    };

    const handleDateClick = (day: number) => {
        const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        setSelectedDate(date);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedService && selectedDate && selectedTime) {
            navigate('/client-info', {
                state: {
                    service: selectedService,
                    date: selectedDate,
                    time: selectedTime
                }
            });
        }
    };

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return (
        <div className="min-h-screen">
            <Navigation />

            <section className="pt-32 pb-24 px-6 md:px-12 bg-brand-sand/30">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white p-12 border border-brand-sage/10 shadow-lg">
                        <h1
                            style={{ fontFamily: 'var(--font-serif)' }}
                            className="text-7xl mb-8 text-brand-sage"
                        >
                            Book Your Visit
                        </h1>
                        <p
                            style={{ fontFamily: 'var(--font-sans)' }}
                            className="text-base text-muted-foreground leading-relaxed mb-16 max-w-xl"
                        >
                            Select your preferred service, date, and time. We look forward to seeing you.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-16">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="relative">
                                    <label
                                        style={{ fontFamily: 'var(--font-sans)' }}
                                        className="text-xs uppercase tracking-widest font-bold text-brand-sage block mb-4"
                                    >
                                        Select Service
                                    </label>
                                    <select
                                        value={selectedService}
                                        onChange={(e) => setSelectedService(e.target.value)}
                                        className="w-full bg-brand-sand/20 border border-brand-sage/10 px-6 py-5 appearance-none cursor-pointer hover:border-brand-sage/30 transition-all focus:border-brand-clay outline-none font-medium"
                                        style={{ fontFamily: 'var(--font-sans)' }}
                                        required
                                    >
                                        <option value="">Select a service</option>
                                        {services.map((service) => (
                                            <option key={service} value={service}>
                                                {service}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="absolute right-6 top-[3.25rem] pointer-events-none opacity-40">
                                        <ChevronRight size={20} className="rotate-90" />
                                    </div>
                                </div>
                                <div className="relative">
                                    <label
                                        style={{ fontFamily: 'var(--font-sans)' }}
                                        className="text-xs uppercase tracking-widest font-bold text-brand-sage block mb-4"
                                    >
                                        Select Stylist
                                    </label>
                                    <select
                                        value={selectedStylist}
                                        onChange={(e) => setSelectedStylist(e.target.value)}
                                        className="w-full bg-brand-sand/20 border border-brand-sage/10 px-6 py-5 appearance-none cursor-pointer hover:border-brand-sage/30 transition-all focus:border-brand-clay outline-none font-medium"
                                        style={{ fontFamily: 'var(--font-sans)' }}
                                        required
                                    >
                                        <option value="">Select a specialist</option>
                                        {stylists.map((s) => (
                                            <option key={s.id} value={s.id}>
                                                {s.name} — {s.role}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="absolute right-6 top-[3.25rem] pointer-events-none opacity-40">
                                        <ChevronRight size={20} className="rotate-90" />
                                    </div>
                                </div>
                            </div>
                            {selectedService && selectedStylist && (
                                <div className="p-8 bg-brand-sage text-white animate-in fade-in slide-in-from-top-4 duration-500">
                                    <div className="flex items-center justify-between mb-8">
                                        <div>
                                            <h3 style={{ fontFamily: 'var(--font-serif)' }} className="text-2xl mb-1">
                                                Fastest Availability
                                            </h3>
                                            <p className="text-xs opacity-70 uppercase tracking-widest">
                                                No need to search — these slots are open now
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-3xl font-serif">Mar 01</span>
                                            <span className="block text-[10px] opacity-60 uppercase tracking-tighter">Earliest Possible</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                        {['09:00', '11:00', '14:00', '16:00'].map((time) => (
                                            <button
                                                key={time}
                                                type="button"
                                                onClick={() => {
                                                    setSelectedDate(new Date(2026, 2, 1));
                                                    setSelectedTime(time);
                                                }}
                                                className={`py-3 text-sm font-bold border transition-all ${selectedTime === time && selectedDate?.getDate() === 1
                                                    ? 'bg-white text-brand-sage border-white'
                                                    : 'border-white/20 hover:bg-white/10'
                                                    }`}
                                            >
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                <div>
                                    <label
                                        style={{ fontFamily: 'var(--font-sans)' }}
                                        className="text-xs uppercase tracking-widest font-bold text-brand-sage block mb-4"
                                    >
                                        Choose Date
                                    </label>
                                    <div className="border border-brand-sage/10 p-6 bg-brand-sand/10">
                                        <div className="flex items-center justify-between mb-8">
                                            <button
                                                type="button"
                                                onClick={handlePrevMonth}
                                                className="p-2 hover:bg-brand-sage hover:text-white transition-all rounded-full"
                                            >
                                                <ChevronLeft size={18} />
                                            </button>
                                            <span
                                                style={{ fontFamily: 'var(--font-serif)' }}
                                                className="text-xl text-brand-sage"
                                            >
                                                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                                            </span>
                                            <button
                                                type="button"
                                                onClick={handleNextMonth}
                                                className="p-2 hover:bg-brand-sage hover:text-white transition-all rounded-full"
                                            >
                                                <ChevronRight size={18} />
                                            </button>
                                        </div>

                                        <div className="grid grid-cols-7 gap-1">
                                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
                                                <div
                                                    key={day}
                                                    style={{ fontFamily: 'var(--font-sans)' }}
                                                    className="text-[10px] font-bold uppercase tracking-widest text-brand-clay text-center pb-4"
                                                >
                                                    {day}
                                                </div>
                                            ))}
                                            {Array.from({ length: startingDayOfWeek }).map((_, index) => (
                                                <div key={`empty-${index}`} />
                                            ))}
                                            {Array.from({ length: daysInMonth }).map((_, index) => {
                                                const day = index + 1;
                                                const isSelected = selectedDate?.getDate() === day &&
                                                    selectedDate?.getMonth() === currentMonth.getMonth() &&
                                                    selectedDate?.getFullYear() === currentMonth.getFullYear();

                                                return (
                                                    <button
                                                        key={day}
                                                        type="button"
                                                        onClick={() => handleDateClick(day)}
                                                        className={`aspect-square text-sm transition-all font-medium ${isSelected
                                                            ? 'bg-brand-sage text-white shadow-md'
                                                            : 'hover:bg-brand-sand hover:text-brand-sage'
                                                            }`}
                                                        style={{ fontFamily: 'var(--font-sans)' }}
                                                    >
                                                        {day}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label
                                        style={{ fontFamily: 'var(--font-sans)' }}
                                        className="text-xs uppercase tracking-widest font-bold text-brand-sage block mb-4"
                                    >
                                        Choose Time
                                    </label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {timeSlots.map((time) => (
                                            <button
                                                key={time}
                                                type="button"
                                                onClick={() => setSelectedTime(time)}
                                                className={`py-4 text-sm font-medium transition-all ${selectedTime === time
                                                    ? 'bg-brand-clay text-white shadow-md'
                                                    : 'bg-brand-sand/30 border border-brand-sage/10 text-brand-slate hover:border-brand-clay'
                                                    }`}
                                                style={{ fontFamily: 'var(--font-sans)' }}
                                            >
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-brand-sage text-white px-12 py-5 hover:bg-brand-sage/90 transition-all disabled:opacity-30 disabled:cursor-not-allowed font-bold uppercase tracking-widest text-xs"
                                style={{ fontFamily: 'var(--font-sans)', borderRadius: '0' }}
                                disabled={!selectedService || !selectedDate || !selectedTime}
                            >
                                Confirm Details & Continue
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
