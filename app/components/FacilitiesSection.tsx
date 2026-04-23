'use client';

import { Parallax } from 'react-scroll-parallax';

export default function FacilitiesSection() {
    return (
        <section className="w-full bg-neutral-200 py-24 px-6 md:px-16">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

                {/* LEFT COLUMN — SLOW PARALLAX */}
                <div className="flex flex-col gap-24">

                    {/* Breakfast */}
                    <Parallax translateY={[-5, 5]}>
                        <div>
                            <div
                                className="w-full aspect-[4/3] bg-cover bg-center"
                                style={{ backgroundImage: 'url("/images/breakfast.jpg")' }}
                            />
                            <p className="mt-4 text-slate-800 text-base md:text-lg leading-relaxed">
                                Beginnen Sie Ihren Morgen mit unserem liebevoll zubereiteten Frühstücksbuffet:
                                frische Croissants, regionale Spezialitäten und hausgemachte Marmeladen —
                                ein genussvoller Start in den Tag.
                            </p>
                        </div>
                    </Parallax>

                    {/* Bar */}
                    <Parallax translateY={[-5, 5]}>
                        <div>
                            <div
                                className="w-full aspect-[4/3] bg-cover bg-center"
                                style={{ backgroundImage: 'url("/images/hotelBar.png")' }}
                            />
                            <p className="mt-4 text-slate-800 text-base md:text-lg leading-relaxed">
                                Unsere Hotelbar lädt zu entspannten Abenden ein. Genießen Sie ausgewählte
                                Weine, feine Spirituosen und kreative Cocktails in stilvollem Ambiente.
                            </p>
                        </div>
                    </Parallax>

                </div>

                {/* RIGHT COLUMN — FAST PARALLAX */}
                <div className="md:pt-32">

                    <Parallax translateY={[-30, 80]}>
                        <div>
                            <div
                                className="w-full aspect-[4/3] bg-cover bg-center"
                                style={{ backgroundImage: 'url("/images/hotel.jpg")' }}
                            />
                            <p className="mt-4 text-slate-800 text-base md:text-lg leading-relaxed">
                                Unsere Hotelfassade vereint moderne Architektur mit zeitloser Eleganz.
                                Klare Linien und hochwertige Materialien prägen das stilvolle Erscheinungsbild.
                            </p>
                        </div>
                    </Parallax>

                </div>

            </div>
        </section>
    );
}