import { useState } from "react";
import { RevealOnScroll } from "../../RevealOnScroll";

export const AllanCanopyDynamics = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projectTitle = "Detecting Tree Canopy Changes in Allen Gardens Using LiDAR";
  const abstract =
    "A comparative analysis of LiDAR data from 2015 and 2019 in Allen Gardens to detect and quantify changes in tree canopy, including the mapping of newly planted or removed trees and measurements of canopy height and crown diameter for selected trees.";
  const keywords = [
    "LiDAR",
    "Tree Canopy",
    "Change Detection",
    "Allen Gardens",
    "CHM",
    "ForestTools",
    "Remote Sensing",
    "Urban Vegetation"
  ];

  // Four figures representing key results
  const figures = [
    {
      src: "/Images/allen_trees_changes.png", // Update with your actual file path
      caption:
        "Figure 1: Visual map of tree canopy changes in Allen Gardens, where red indicates canopy reduction or removal and green indicates growth or new plantings."
    },
    {
      src: "/Images/allen_pie_chart.png", // Update with your actual file path
      caption:
        "Figure 2: Pie chart showing the percentage breakdown of tree canopy changes in Allen Gardens."
    },
    {
      src: "/Images/allen_bar_heights.png", // Update with your actual file path
      caption:
        "Figure 3: Bar graph comparing tree top and crown base heights for selected trees in 2015 and 2019."
    },
    {
      src: "/Images/allen_bar_crowndiameter.png", // Update with your actual file path
      caption:
        "Figure 4: Bar chart displaying the crown diameter of selected trees in 2015 and 2019."
    }
  ];

  return (
    <section
      id="allan-canopy-dynamics"
      className="min-h-screen flex items-center justify-center py-20"
    >
     <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-lime-400 bg-clip-text text-transparent text-center">
          {projectTitle}
        </h2>

        {/* Glass Container */}
        <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          {/* Abstract */}
          <p className="text-gray-300 mb-6">{abstract}</p>

          {/* Keywords */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 text-emerald-400">Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {keywords.map((keyword, idx) => (
                <span
                  key={idx}
                  className="bg-emerald-600/10 text-emerald-400 py-1 px-3 rounded-full text-sm 
                             hover:bg-emerald-600/20 hover:shadow-[0_2px_8px_rgba(16,185,129,0.2)] 
                             transition-all"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Figures */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 text-emerald-400">
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
