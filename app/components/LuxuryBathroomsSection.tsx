'use client';

import { Parallax } from 'react-scroll-parallax';

export default function LuxuryBathroomsSection() {
    return (
        <section className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">
            <Parallax translateY={[-15, 15]} className="absolute inset-0 w-full h-full">
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: 'url("/images/luxuryRoomBath.jpg")' }}
                />
                <div className="absolute inset-0 bg-black/60 z-10" />
            </Parallax>



            <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 md:px-12 h-full">
                <h2
                    style={{ fontFamily: 'var(--font-tan-mon-cheri)' }}
                    className="font-serif text-4xl md:text-5xl lg:text-6xl max-w-3xl text-neutral-100/90 text-base md:text-lg leading-relaxed mb-6 uppercase"
                >
                    Luxuriöse Badezimmer
                </h2>

                <p className="max-w-3xl text-neutral-100/90 text-base md:text-lg leading-relaxed">
                    Unsere Zimmer verfügen über edle Badezimmer mit freistehenden Badewannen, regenduschen
                    und handverlesenen Pflegeprodukten — gestaltet für entspannende Momente voller Luxus.
                </p>
            </div>
        </section>
    );
}
