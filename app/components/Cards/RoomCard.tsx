"use client";

import Image from "next/image";

type RoomCardProps = {
    image: string;
    title: string;
    details: string;
};

export default function RoomCard({
    image,
    title,
    details,
}: RoomCardProps) {
    return (
        <div className="w-full border border-neutral-300 bg-transparent">
            {/* Image */}
            <div className="relative w-full h-64">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-6 bg-white">
                {/* Top row */}
                <div className="flex items-start justify-between">
                    <p className="text-sm tracking-wide text-slate-800 leading-snug">
                        {details}
                    </p>

                    {/* Icons */}
                    <div className="flex gap-2">
                        <span>🛏️</span>
                        <span>🛏️</span>
                        <span>🛏️</span>
                    </div>
                </div>

                {/* Title */}
                <h3
                    style={{ fontFamily: 'var(--font-tan-mon-cheri)' }}
                    className="text-2xl md:text-3xl font-serif tracking-widest text-slate-800 whitespace-nowrap">
                    {title}
                </h3>



            </div>
            {/* CTA removed from card — placed under card in RoomsSection */}
        </div>
    );
}