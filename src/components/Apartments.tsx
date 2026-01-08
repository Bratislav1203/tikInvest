import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

export default function FloorPlan() {
    const PLAN_IMAGE = "stanovi/sviStanovi.jpeg";

    // Globalni pomeraj overlay-a (fino podešavanje)
    const Y_OFFSET = -12;

    const apartments = useMemo(
        () => [
            {
                id: "stan1",
                label: "Stan 1",
                image: "stanovi/1.png",
                coords: [453, 520, 554, 524, 551, 304, 508, 297, 508, 314, 369, 318, 369, 354, 453, 355]
            },
            {
                id: "stan2",
                label: "Stan 2",
                image: "stanovi/2.png",
                coords: [456, 139, 548, 159, 548, 298, 505, 300, 507, 319, 475, 316, 475, 282, 454, 283]
            },
            {
                id: "stan3",
                label: "Stan 3",
                image: "stanovi/3.png",
                coords: [299, 95, 300, 214, 342, 219, 342, 281, 453, 281, 453, 133]
            },
            {
                id: "stan4",
                label: "Stan 4",
                image: "stanovi/4.png",
                coords: [73, 18, 55, 75, 81, 86, 79, 102, 200, 143, 202, 181, 202, 213, 292, 217, 297, 85]
            },
            {
                id: "stan5",
                label: "Stan 5",
                image: "stanovi/5.png",
                coords: [78, 109, 197, 146, 199, 214, 264, 219, 264, 284, 201, 284, 202, 249, 25, 251, 32, 182, 61, 182]
            },
            {
                id: "stan6",
                label: "Stan 6",
                image: "stanovi/6.png",
                coords: [55, 255, 196, 254, 194, 287, 259, 291, 260, 356, 206, 358, 205, 387, 17, 389, 19, 331, 47, 330]
            }
        ],
        []
    );

    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const [selected, setSelected] = useState<typeof apartments[0] | null>(null);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelected(null);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    const coordsToPoints = (coords: number[]) => {
        const pts = [];
        for (let i = 0; i < coords.length; i += 2) {
            pts.push(`${coords[i]},${coords[i + 1] + Y_OFFSET}`);
        }
        return pts.join(" ");
    };

    const centroid = (coords: number[]) => {
        let x = 0;
        let y = 0;
        const n = coords.length / 2;
        for (let i = 0; i < coords.length; i += 2) {
            x += coords[i];
            y += coords[i + 1] + Y_OFFSET;
        }
        return { x: x / n, y: y / n };
    };

    const hovered = hoveredId
        ? apartments.find((a) => a.id === hoveredId)
        : null;

    return (
        <>
            <section id="apartments" className="py-24 bg-surface">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <RevealOnScroll>
                            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
                                Raspored stanova
                            </h2>
                            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
                                Interaktivni prikaz dostupnih stambenih jedinica. <br />
                                <span className="text-secondary font-medium">Pređite mišem</span> preko stana za pregled, <span className="text-secondary font-medium">kliknite</span> za detalje.
                            </p>
                        </RevealOnScroll>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <RevealOnScroll delay={200} direction="up">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-slate-100 transform transition-all duration-300 hover:shadow-3xl">
                                <img
                                    src={PLAN_IMAGE}
                                    alt="Raspored stanova"
                                    className="w-full h-auto block"
                                />

                                <svg
                                    className="absolute inset-0 w-full h-full"
                                    viewBox="0 0 554 524"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    <defs>
                                        <filter id="hoverBlur" x="-25%" y="-25%" width="150%" height="150%">
                                            <feGaussianBlur stdDeviation="5" />
                                        </filter>
                                    </defs>

                                    {apartments.map((apt) => {
                                        const isHovered = hoveredId === apt.id;
                                        const c = centroid(apt.coords);

                                        return (
                                            <g
                                                key={apt.id}
                                                className="cursor-pointer"
                                                onMouseEnter={() => setHoveredId(apt.id)}
                                                onMouseLeave={() => setHoveredId(null)}
                                                onClick={() => setSelected(apt)}
                                                style={{
                                                    transformBox: "fill-box",
                                                    transformOrigin: "center",
                                                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                                                }}
                                                transform={isHovered ? "scale(1.02)" : "scale(1)"}
                                            >
                                                {/* osnovna granica */}
                                                <polygon
                                                    points={coordsToPoints(apt.coords)}
                                                    className="fill-transparent stroke-primary/10 transition-all duration-300"
                                                    strokeWidth={isHovered ? "2" : "1"}
                                                />

                                                {/* suptilan hover */}
                                                <polygon
                                                    points={coordsToPoints(apt.coords)}
                                                    className={`transition-all duration-300 ${isHovered ? "fill-accent/20 stroke-accent" : "fill-transparent stroke-transparent"}`}
                                                    strokeWidth="2"
                                                />

                                                {/* broj stana */}
                                                <text
                                                    x={c.x}
                                                    y={c.y}
                                                    textAnchor="middle"
                                                    dominantBaseline="middle"
                                                    className={`select-none pointer-events-none font-heading font-bold transition-all duration-300 ${isHovered ? "fill-primary text-xl" : "fill-slate-900/40 text-lg"}`}
                                                >
                                                    {apt.label.replace("Stan ", "")}
                                                </text>
                                            </g>
                                        );
                                    })}
                                </svg>

                                {hovered && (
                                    <div className="absolute bottom-6 left-6 animate-fade-in">
                                        <div className="bg-white/95 backdrop-blur-md px-6 py-4 rounded-xl shadow-xl border-l-4 border-secondary">
                                            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Izabrano</div>
                                            <div className="text-2xl font-bold text-primary font-heading">
                                                {hovered.label}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* MODAL */}
            {selected && (
                <div
                    className="fixed inset-0 z-[60] bg-primary/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
                    onClick={() => setSelected(null)}
                >
                    <div
                        className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full p-2 md:p-6 animate-slide-up"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute z-10 top-4 right-4 p-2 bg-slate-100 rounded-full text-slate-500 hover:text-primary hover:bg-slate-200 transition-all duration-300"
                            onClick={() => setSelected(null)}
                        >
                            <X size={24} />
                        </button>

                        <div className="p-4">
                            <h3 className="text-3xl font-heading font-bold text-primary mb-6 border-b border-slate-100 pb-4">
                                {selected.label}
                            </h3>

                            <div className="bg-slate-50 rounded-xl p-4 md:p-8 flex items-center justify-center">
                                <img
                                    src={selected.image}
                                    alt={selected.label}
                                    className="w-full max-h-[70vh] object-contain drop-shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
