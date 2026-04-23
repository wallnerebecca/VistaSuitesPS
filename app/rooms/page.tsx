import RoomCard from "@/components/Cards/RoomCard";

export default function Page() {
    return (
        <section className="bg-neutral-200 py-20">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-serif mb-8 text-neutral-800 uppercase">ROOMS & Suites</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <RoomCard
                        image="/luxuryRoom.jpg"
                        title="LUXURY ROOM"
                        details="MAX 2 GUESTS / 1 QUEEN OR 2 SINGLE BEDS"
                    />

                    <RoomCard
                        image="/deluxeRoom.jpg"
                        title="DELUXE ROOM"
                        details="MAX 2 GUESTS / 1 QUEEN OR 2 SINGLE BEDS"
                    />

                    <RoomCard
                        image="/studioSuite.jpg"
                        title="STUDIO SUITE"
                        details="MAX 4 GUESTS / 1 KING BED"
                    />
                </div>
            </div>
        </section>
    );
}
