import { useState } from "react";
import { RevealOnScroll } from "../../RevealOnScroll";

export const PoValleyDeformation = () => {
  // State for expanded image modal
  const [selectedImage, setSelectedImage] = useState(null);

  // Project details
  const projectTitle = "Po Valley Deformation and Vegetation Dynamics near Bologna, Italy";
  const abstract =
    "This study investigates land subsidence and vegetation changes in the Po Valley near Bologna between 2015 and 2019 using advanced DInSAR and Radar Vegetation Index (RVI) techniques. The analysis reveals significant ground displacement due to groundwater extraction and urban development, and it quantifies changes in vegetation cover over the study period.";
  const keywords = [
    "Po Valley",
    "Bologna",
    "DInSAR",
    "RVI",
    "Land Subsidence",
    "Vegetation Dynamics",
    "Remote Sensing",
    "SAR"
  ];

  // Figures (update src values as needed)
  const figures = [
    {
      src: "/Images/wrapped_interferogram.png", // Figure 4
      caption:
        "Figure 4: Map Displaying Wrapped Interferogram near Bologna, Italy."
    },
    {
      src: "/Images/unwrapped_interferogram.png", // Figure 5
      caption:
        "Figure 5: Map Displaying Unwrapped Interferogram near Bologna, Italy."
    },
    {
      src: "/Images/displacement_map.png", // Figure 6
      caption:
        "Figure 6: Displacement Map indicating areas under subsidence (red) and uplift (blue)."
    },
    {
      src: "/Images/rvi_maps.jpeg", // Figure 7
      caption:
        "Figure 7: Radar Vegetation Index Maps for 2015 and 2019 illustrating vegetation dynamics."
    }
  ];

  return (
    <section
      id="po-valley-deformation"
      className="min-h-screen flex items-center justify-center py-20"
    >
     <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-amber-500 to-rose-400 bg-clip-text text-transparent text-center">
          {projectTitle}
        </h2>

        {/* Glass Container */}
        <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          {/* Abstract */}
          <p className="text-gray-300 mb-6">{abstract}</p>

          {/* Keywords */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 text-amber-400">Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {keywords.map((keyword, idx) => (
                <span
                  key={idx}
                  className="bg-amber-500/10 text-amber-400 py-1 px-3 rounded-full text-sm 
                             hover:bg-amber-500/20 hover:shadow-[0_2px_8px_rgba(251,191,36,0.2)]
                             transition-all"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Figures */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 text-amber-400">
              Project Results &amp; Images
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {figures.map((figure, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <img
                    src={figure.src}
                    alt={`Figure ${idx + 4}`}
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
