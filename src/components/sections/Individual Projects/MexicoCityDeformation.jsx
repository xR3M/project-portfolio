import { useState } from "react";
import { RevealOnScroll } from "../../RevealOnScroll";

export const MexicoCityDeformation = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Project details
  const projectTitle = "Urban Subsidence Monitoring in Mexico City using SBAS and PS-InSAR";
  const abstract =
    "This study analyzes urban subsidence driven by groundwater extraction in Mexico City using Sentinel-1 SAR data. By integrating Small Baseline Subset (SBAS) and Persistent Scatterers (PS) methods, the research provides detailed insights into ground deformation, identifies at-risk infrastructure, and informs urban planning strategies.";
  const keywords = [
    "InSAR",
    "SBAS",
    "PS-InSAR",
    "Urban Subsidence",
    "Remote Sensing",
    "Ground Deformation"
  ];

  const figures = [
    {
      src: "/Images/aoi.png",
      caption:
        "Figure 1: The map displays Mexico City (red box) as the area of interest and the SAR imagery sub-swath (green area)."
    },
    {
      src: "/Images/sbas.png",
      caption:
        "Figure 4: SBAS Ground Deformation Map illustrating subsidence (negative values) and uplift (positive values)."
    },
    {
      src: "/Images/sbas_with_buildings.png",
      caption:
        "Figure 6: Subsidence and uplift impact on buildings in Mexico City, highlighting areas of significant ground deformation."
    },
    {
      src: "/Images/piechart.png",
      caption:
        "Figure 7: Pie chart showing the distribution of buildings experiencing varying degrees of subsidence or uplift."
    }
  ];
  return (
    <section
      id="mexico-city-deformation"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            {/* Title */}
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-500 to-sky-400 bg-clip-text text-transparent text-center">
            {projectTitle}
            </h2>

            {/* Glass Container */}
            <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            {/* Abstract */}
            <p className="text-gray-300 mb-6">{abstract}</p>

            {/* Keywords */}
            <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Keywords</h3>
                <div className="flex flex-wrap gap-2">
                {keywords.map((keyword, idx) => (
                    <span
                    key={idx}
                    className="bg-indigo-500/10 text-indigo-300 py-1 px-3 rounded-full text-sm
                                hover:bg-indigo-500/20 hover:shadow-[0_2px_8px_rgba(99,102,241,0.2)] 
                                transition-all"
                    >
                    {keyword}
                    </span>
                ))}
                </div>
            </div>

            {/* Figures */}
            <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Project Results &amp; Images</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {figures.map((figure, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                    <img
                        src={figure.src}
                        alt={`Figure ${idx + 1}`}
                        className="rounded-xl hover:-translate-y-1 transition-all max-w-xs w-full mx-auto cursor-pointer"
                        onClick={() => setSelectedImage(figure.src)}
                    />
                    <p className="text-gray-300 text-sm italic mt-2">
                        {figure.caption}
                    </p>
                    </div>
                ))}
                </div>
            </div>

            {/* PDF Link */}
            <div className="mt-8 text-center">
                <a
                href="/Project Documents/MRP Final Copy.pdf"
                className="text-indigo-300 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                >
                View Full Research Paper
                </a>
            </div>
            </div>
        </div>

        {/* Modal for Expanded Image */}
        {selectedImage && (
            <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
            >
            <img
                src={selectedImage}
                alt="Expanded view"
                className="max-w-full max-h-full rounded-lg"
            />
            </div>
        )}
      </RevealOnScroll>
    </section>
  );
};
