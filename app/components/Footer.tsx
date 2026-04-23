'use client';

import { Parallax } from 'react-scroll-parallax';

export default function Footer() {
    return (
        <footer id="kontakt" className="relative w-full overflow-hidden text-neutral-100">
            <Parallax translateY={[0, 10]} className="absolute inset-0 w-full h-full">
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: 'url("/images/footerBackground.jpg")' }}
                />
            </Parallax>

            {/* gradient to darken the bottom heavily */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 py-28" style={{ fontFamily: 'var(--font-red-hat)' }}>
                <div className="max-w-3xl mx-auto text-center mb-25">
                    <h3 className="text-2xl md:text-3xl text-neutral-100/90 uppercase tracking-wider">Maßgeschneiderte Gastfreundschaft</h3>
                </div>
                <div className="w-full h-px bg-neutral-700/40 mx-auto mt-4" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
                    <div>
                        <h3 className="font-bold uppercase tracking-widest mb-4">Standort</h3>
                        <address className="not-italic text-sm leading-relaxed text-neutral-100/90">
                            Vista Suites<br />
                            Marktplatz 12<br />
                            1110 Wien<br />
                            Österreich
                        </address>
                    </div>

                    <div>
                        <h3 className="font-bold uppercase tracking-widest mb-4">Öffnungszeiten</h3>
                        <p className="text-sm leading-relaxed text-neutral-100/90">
                            Rezeption: 07:00 – 22:00<br />
                            Frühstücksbuffet: 07:00 – 11:00<br />
                            Bar: 18:00 – 01:00<br />
                            Zimmerservice: 06:30 – 23:00
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold uppercase tracking-widest mb-4">Folgen Sie uns</h3>
                        <div className="flex gap-4">
                            <a className="text-neutral-100/90 hover:text-neutral-100" href="#" aria-label="Instagram">
                                Instagram
                            </a>
                            <a className="text-neutral-100/90 hover:text-neutral-100" href="#" aria-label="Facebook">
                                Facebook
                            </a>
                            <a className="text-neutral-100/90 hover:text-neutral-100" href="#" aria-label="X">
                                X
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-neutral-700/40 pt-6 text-sm text-neutral-100/70">
                    © {new Date().getFullYear()} Vista Suites — Alle Rechte vorbehalten
                </div>
            </div>
        </footer >
    );
}
