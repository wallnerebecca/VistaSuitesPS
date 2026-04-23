"use client";

import { useState } from "react";

interface ReservationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        nationality: "",
        travelPurpose: "",
        checkIn: "",
        checkOut: "",
        guests: "1",
        roomType: "standard",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Reservation submitted:", formData);
        onClose();

        setFormData({
            name: "",
            email: "",
            phone: "",
            nationality: "",
            travelPurpose: "",
            checkIn: "",
            checkOut: "",
            guests: "1",
            roomType: "standard",
            message: "",
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">

                {/* Header */}
                <div className="sticky top-0 bg-white border-b flex items-center justify-between px-6 py-4">
                    <h2 className="text-2xl font-bold uppercase">
                        Zimmer Reservieren
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 text-2xl"
                    >
                        ×
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">Name *</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                            placeholder="Ihr Name"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                            placeholder="your@email.com"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">Telefon</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                            placeholder="+49 123 456789"
                        />
                    </div>


                    {/* Nationality */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">Nationalität</label>
                        <input
                            type="text"
                            name="nationality"
                            value={formData.nationality}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                            placeholder="z.B. German"
                        />
                    </div>

                    {/* Travel Purpose */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">
                            Reisezweck
                        </label>
                        <select
                            name="travelPurpose"
                            value={formData.travelPurpose}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                        >
                            <option value="">Bitte wählen</option>
                            <option value="business">Geschäftlich</option>
                            <option value="leisure">Urlaub</option>
                            <option value="other">Sonstiges</option>
                        </select>
                    </div>

                    {/* Check-in */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">Anreise *</label>
                        <input
                            type="date"
                            name="checkIn"
                            value={formData.checkIn}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                        />
                    </div>

                    {/* Check-out */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">Abreise *</label>
                        <input
                            type="date"
                            name="checkOut"
                            value={formData.checkOut}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                        />
                    </div>

                    {/* Guests */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">
                            Anzahl Gäste *
                        </label>
                        <select
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                        >
                            <option value="1">1 Gast</option>
                            <option value="2">2 Gäste</option>
                            <option value="3">3 Gäste</option>
                            <option value="4">4 Gäste</option>
                            <option value="5">5+ Gäste</option>
                        </select>
                    </div>

                    {/* Room Type */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">
                            Zimmertyp *
                        </label>
                        <select
                            name="roomType"
                            value={formData.roomType}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                        >
                            <option value="standard">Luxury</option>
                            <option value="deluxe">Deluxe</option>
                            <option value="suite">Studio Suite</option>
                        </select>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">
                            Besondere Wünsche
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={3}
                            className="w-full px-4 py-2 border border-gray-300 rounded resize-none"
                            placeholder="Ihre Nachricht..."
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-3 font-bold uppercase tracking-widest hover:bg-gray-800 transition"
                    >
                        Reservierung Anfragen
                    </button>
                </form>
            </div>
        </div>
    );
}