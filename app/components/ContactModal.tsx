"use client";

import { useState } from "react";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        gender: "",
        message: "",
    });
    const [success, setSuccess] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
            onClose();
            setFormData({ name: "", email: "", age: "", gender: "", message: "" });
        }, 1500);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-white border-b flex items-center justify-between px-6 py-4">
                    <h2 className="text-2xl font-bold uppercase">Kontakt</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 text-2xl"
                    >
                        ×
                    </button>
                </div>
                {success ? (
                    <div className="p-6 text-green-600 text-center font-semibold text-lg">Erfolgreich abgeschickt!</div>
                ) : (
                    <form onSubmit={handleSubmit} className="p-6 space-y-4">
                        <div>
                            <label className="block text-sm font-semibold mb-2">Name *</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-2">E-Mail *</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-2">Alter</label>
                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                min="0"
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-2">Geschlecht</label>
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="w-full border rounded px-3 py-2"
                            >
                                <option value="">Bitte wählen</option>
                                <option value="männlich">Männlich</option>
                                <option value="weiblich">Weiblich</option>
                                <option value="divers">Divers</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-2">Nachricht (optional)</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={3}
                                className="w-full border rounded px-3 py-2"
                                placeholder="Ihre Nachricht..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-slate-800 text-white py-2 rounded font-semibold hover:bg-slate-700 transition"
                        >
                            Abschicken
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
