'use client';

import { useEffect, useState } from 'react';

export default function Menubar() {
    const menuItems = ['Home', 'Zimmer', 'Kontakt'];
    const [solid, setSolid] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            // when user scrolls past 60% of the viewport height, show solid background
            const threshold = window.innerHeight * 0.6;
            setSolid(window.scrollY > threshold);
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${solid ? 'bg-slate-800' : 'bg-transparent'}`}>
            <div className="flex items-center justify-between px-40 md:px-40 py-6">
                {/* Logo */}
                <div className={`text-lg font-bold tracking-widest ${solid ? 'text-neutral-100' : 'text-neutral-100'}`}>
                    VISTA SUITES
                </div>

                {/* Menu Items */}
                <div className="flex gap-8">
                    {menuItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item.toLowerCase())}
                            className="text-neutral-100 hover:opacity-80 transition-opacity uppercase text-sm font-medium tracking-wide"
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}
