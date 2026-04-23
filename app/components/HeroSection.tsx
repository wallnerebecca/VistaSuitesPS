'use client';

import { Parallax } from 'react-scroll-parallax';
import { useState } from 'react';
import ReservationModal from './ReservationModal';
import Menubar from './Menubar';

export default function HeroSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Menubar />

            {/* Hero Section with Parallax */}
            <section id="home" className="relative h-screen w-full overflow-hidden bg-gray-900">
                {/* Parallax Background Image */}
                <Parallax translateY={[-20, 20]} className="absolute inset-0 w-full h-full">
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: 'url("/images/landingPageHeader.jpg")',
                            width: '100vw',
                        }}
                    />
                </Parallax>

                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40 z-10" />

                {/* Content Container */}
                <div className="relative z-20 w-full h-full flex items-end justify-between px-12 pb-12">

                    {/* LEFT: Title */}
                    <div className="w-2/3">
                        <h1
                            style={{ fontFamily: 'var(--font-tan-mon-cheri)' }}
                            className="
                        text-[clamp(8rem,18vw,14rem)]
                        font-normal
                        text-neutral-100
                        uppercase
                        leading-[1.15]
                        tracking-[-0.02em]
                    "
                        >
                            VISTA
                            <br />
                            SUITES
                        </h1>
                    </div>

                    {/* RIGHT: Button */}
                    <div className="w-1/3 flex justify-end">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="
                bg-slate-800/90
                backdrop-blur-sm
                text-neutral-100
                px-10 py-5
                uppercase
                tracking-widest
                text-sm
                hover:bg-slate-700
                transition-all
                duration-300
                flex items-center gap-4
                group
            "
                        >
                            <span className="text-left leading-tight">
                                ZIMMER <br /> RESERVIEREN
                            </span>
                            <span className="text-2xl group-hover:translate-x-1 transition-transform">
                                →
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Reservation Modal */}
            <ReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
