import { useState } from "react";
import { RevealOnScroll } from "../../RevealOnScroll";


export const UrbanSprawlAnalysis = () => {
  // State for expanded image modal
  const [selectedImage, setSelectedImage] = useState(null);

  // Project details
  const projectTitle = "Comparative Suburban Sprawl Analysis: Guelph vs. Winterthur (2001–2021)";
  const abstract =
    "A comparative study of suburban sprawl in Guelph, Canada and Winterthur, Switzerland from 2001 to 2021 using Landsat imagery and NDBI to assess urban expansion, its impact on ecosystems, infrastructure, and community quality of life.";
  const keywords = [
    "Suburban Sprawl",
    "Guelph",
    "Winterthur",
    "NDBI",
    "Remote Sensing",
    "Urban Development",
    "Sustainability"
  ];

  // Figures: two images (NDBI maps) + two GIFs (land-use change)
  const figures = [
    {
      src: "/Images/guelph_ndbi.png", // Replace with your actual file path
      caption: "Figure 1: NDBI map of Guelph (2001–2021) showing urban expansion."
    },
    {
      src: "/Images/winterthur_ndbi.png", // Replace with your actual file path
      caption: "Figure 2: NDBI map of Winterthur (2001–2021) demonstrating controlled development."
    },
    {
      src: "/Gifs/guelph_change.gif", // Replace with your actual file path
      caption: "Figure 3: Animated land-use change in Guelph (brown: urban, yellow: residential, green: vegetation)."
    },
    {
      src: "/Gifs/winterthur_change.gif", // Replace with your actual file path
      caption: "Figure 4: Animated land-use change in Winterthur (brown: urban, yellow: residential, green: vegetation)."
    }
  ];

  return (
    <section
      id="urban-sprawl-analysis"
      className="min-h-screen flex items-center justify-center py-20"
    >
     <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-lime-600 to-amber-400 bg-clip-text text-transparent text-center">
          {projectTitle}
        </h2>

        {/* Glass Container */}
        <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          {/* Abstract */}
          <p className="text-gray-300 mb-6">{abstract}</p>

          {/* Keywords */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 text-lime-400">Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {keywords.map((keyword, idx) => (
                <span
                  key={idx}
                  className="bg-lime-600/10 text-lime-400 py-1 px-3 rounded-full text-sm
                             hover:bg-lime-600/20 hover:shadow-[0_2px_8px_rgba(132,204,22,0.2)]
                             transition-all"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Figures */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 text-lime-400">
              Project Results &amp; Images
            </h3>
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
