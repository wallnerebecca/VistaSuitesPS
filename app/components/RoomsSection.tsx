'use client';
import RoomCard from "./Cards/RoomCard";
import rooms from '../data/rooms.json';
import { useState } from "react";
import ReservationModal from "./ReservationModal";

export default function RoomsSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <section id="zimmer" className="bg-neutral-200 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h2
                        style={{ fontFamily: 'var(--font-tan-mon-cheri)' }}
                        className="font-serif text-5xl md:text-6xl lg:text-7xl font-serif mb-8 text-slate-800 uppercase">Zimmer &amp; Suiten</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {rooms.map((r) => (
                            <div key={r.id} className="flex flex-col items-stretch">
                                <RoomCard
                                    image={r.image}
                                    title={r.title}
                                    details={r.details}
                                />
                                <div className="mt-4 flex justify-start">
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="inline-flex items-center px-6 py-3 text-sm tracking-widest uppercase">
                                        <span className="text-slate-800">Jetzt Reservieren</span>
                                        <span className="ml-3 text-slate-800">→</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Reservation Modal */}
            <ReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
