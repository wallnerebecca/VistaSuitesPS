'use client';

import TestimonialCard from './Cards/TestimonialCard';
import testimonials from '../data/testimonials.json';

export default function TestimonialsSection() {
    return (
        <section className="w-full bg-slate-800 py-32 md:py-60 px-6 md:px-12 min-h-[60vh]">
            <div className="max-w-screen-2xl mx-auto">
                <h2
                    style={{ fontFamily: 'var(--font-tan-mon-cheri)' }}
                    className="font-serif text-5xl md:text-6xl lg:text-7xl text-neutral-100 leading-tight mb-16 uppercase">
                    WAS UNSERE GÄSTE SAGEN
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <TestimonialCard key={idx} quote={t.quote} author={t.author} />
                    ))}
                </div>
            </div>
        </section>
    );
}
