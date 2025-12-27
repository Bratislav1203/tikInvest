import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";

export default function FloorPlan() {
    const PLAN_IMAGE = "/stanovi/sviStanovi.jpeg";

    // Globalni pomeraj overlay-a (fino podešavanje)
    const Y_OFFSET = -12;

    const apartments = useMemo(
        () => [
            {
                id: "stan1",
                label: "Stan 1",
                image: "/stanovi/1.png",
                coords: [453, 520, 554, 524, 551, 304, 508, 297, 508, 314, 369, 318, 369, 354, 453, 355]
            },
            {
                id: "stan2",
                label: "Stan 2",
                image: "/stanovi/2.png",
                coords: [456, 139, 548, 159, 548, 298, 505, 300, 507, 319, 475, 316, 475, 282, 454, 283]
            },
            {
                id: "stan3",
                label: "Stan 3",
                image: "/stanovi/3.png",
                coords: [299, 95, 300, 214, 342, 219, 342, 281, 453, 281, 453, 133]
            },
            {
                id: "stan4",
                label: "Stan 4",
                image: "/stanovi/4.png",
                coords: [73, 18, 55, 75, 81, 86, 79, 102, 200, 143, 202, 181, 202, 213, 292, 217, 297, 85]
            },
            {
                id: "stan5",
                label: "Stan 5",
                image: "/stanovi/5.png",
                coords: [78, 109, 197, 146, 199, 214, 264, 219, 264, 284, 201, 284, 202, 249, 25, 251, 32, 182, 61, 182]
            },
            {
                id: "stan6",
                label: "Stan 6",
                image: "/stanovi/6.png",
                coords: [55, 255, 196, 254, 194, 287, 259, 291, 260, 356, 206, 358, 205, 387, 17, 389, 19, 331, 47, 330]
            }
        ],
        []
    );

    const [hoveredId, setHoveredId] = useState(null);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === "Escape") setSelected(null);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    const coordsToPoints = (coords) => {
        const pts = [];
        for (let i = 0; i < coords.length; i += 2) {
            pts.push(`${coords[i]},${coords[i + 1] + Y_OFFSET}`);
        }
        return pts.join(" ");
    };

    const centroid = (coords) => {
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
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">
                        Raspored stanova
                    </h2>

                    <p className="text-lg text-slate-600 text-center mb-10 max-w-3xl mx-auto">
                        Pređite mišem preko stana da vidite granice, a klikom otvorite detaljan prikaz.
                    </p>

                    <div className="max-w-5xl mx-auto">
                        <div className="relative rounded-xl overflow-hidden shadow-xl">
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
                                            transform={isHovered ? "scale(1.015)" : "scale(1)"}
                                            style={{
                                                transformBox: "fill-box",
                                                transformOrigin: "center",
                                                transition: "transform 160ms ease"
                                            }}
                                        >
                                            {/* osnovna granica */}
                                            <polygon
                                                points={coordsToPoints(apt.coords)}
                                                className="fill-transparent stroke-slate-900/20"
                                                strokeWidth="1.6"
                                            />

                                            {/* suptilan hover */}
                                            {isHovered && (
                                                <polygon
                                                    points={coordsToPoints(apt.coords)}
                                                    filter="url(#hoverBlur)"
                                                    style={{ fill: "rgba(16,185,129,0.1)" }}
                                                />
                                            )}

                                            {/* broj stana */}
                                            <text
                                                x={c.x}
                                                y={c.y}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                                className="select-none pointer-events-none font-semibold"
                                                style={{
                                                    fontSize: 18,
                                                    fill: isHovered
                                                        ? "rgba(5,150,105,0.9)"
                                                        : "rgba(15,23,42,0.55)"
                                                }}
                                            >
                                                {apt.label.replace("Stan ", "")}
                                            </text>
                                        </g>
                                    );
                                })}
                            </svg>

                            {hovered && (
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow">
                                    <div className="text-sm text-slate-500">Izabrano</div>
                                    <div className="text-lg font-bold text-slate-900">
                                        {hovered.label}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* MODAL */}
            {selected && (
                <div
                    className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
                    onClick={() => setSelected(null)}
                >
                    <div
                        className="relative bg-white rounded-xl shadow-2xl max-w-5xl w-full p-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 text-slate-600 hover:text-black"
                            onClick={() => setSelected(null)}
                        >
                            <X size={28} />
                        </button>

                        <h3 className="text-2xl font-bold text-slate-900 mb-6">
                            {selected.label}
                        </h3>

                        <img
                            src={selected.image}
                            alt={selected.label}
                            className="w-full max-h-[75vh] object-contain rounded-lg"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
