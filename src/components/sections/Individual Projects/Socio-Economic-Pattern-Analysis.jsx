import { useState } from "react";
import { RevealOnScroll } from "../../RevealOnScroll";

export const SocioEconomicPatternAnalysis = () => {
  // State for expanded image modal
  const [selectedImage, setSelectedImage] = useState(null);

  // Project details
  const projectTitle = "Socio-Economic Pattern Analysis of the American Economy";
  const abstract =
    "This analysis examines the intricate patterns of socio-economic stratification across the United States. It explores key variables such as employment status, educational attainment, healthcare occupations, industry sectors, and median household income. Using SPSS hierarchical and K-means clustering analyses, the study reveals distinct clusters among states, providing insights into regional economic health and potential.";
  const keywords = [
    "Employment",
    "Education",
    "Healthcare",
    "Industry",
    "Income",
    "Clustering",
    "SPSS",
    "K-means",
    "Hierarchical Clustering",
    "Economic Stratification"
  ];

  // Figures (replace src paths with your actual image paths)
  const hierarchicalMap = {
    src: "/Images/hierarchical_map.png",
    caption:
      "Figure 1: Hierarchical Clustering Map illustrating the socio-economic grouping of states."
  };
  const kmeansMap = {
    src: "/Images/kmeans_map.png",
    caption: "Figure 2: K-Means Clustering Map showing distinct state groupings."
  };
  const barGraph = {
    src: "/Images/bargraph.png",
    caption:
      "Figure 3: Bar Graph of Cluster Centers highlighting differences in key socio-economic variables."
  };
  const dendrogram = {
    src: "/Images/rated_zscore_dendrogram.png",
    caption:
      "Figure 4: Rated Z-Score Dendrogram – Hierarchical clustering of U.S. states based on socio-economic variables."
  };

  return (
    <section id="socioeconusa" className="flex items-start justify-center py-16">
     <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-center">
          {projectTitle}
        </h2>

        {/* Glass Container */}
        <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          {/* Abstract */}
          <p className="text-gray-300 mb-6">{abstract}</p>

          {/* Keywords */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-purple-400">Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {keywords.map((keyword, idx) => (
                <span
                  key={idx}
                  className="bg-purple-500/10 text-purple-400 py-1 px-3 rounded-full text-sm 
                             hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(192,132,252,0.2)] 
                             transition-all"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4 text-purple-400">
            Project Results &amp; Images
          </h3>

          {/* Two-column layout: Left column stacks three images; Right column has dendrogram */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column: Hierarchical Map, K-Means Map, Bar Graph */}
            <div className="flex flex-col gap-6">
              {/* Hierarchical Map */}
              <div className="flex flex-col items-center">
                <img
                  src={hierarchicalMap.src}
                  alt="Hierarchical Clustering Map"
                  className="rounded-xl hover:-translate-y-1 transition-all w-full max-w-md cursor-pointer"
                  onClick={() => setSelectedImage(hierarchicalMap.src)}
                />
                <p className="text-gray-300 text-sm italic mt-2">
                  {hierarchicalMap.caption}
                </p>
              </div>

              {/* K-Means Map */}
              <div className="flex flex-col items-center">
                <img
                  src={kmeansMap.src}
                  alt="K-Means Clustering Map"
                  className="rounded-xl hover:-translate-y-1 transition-all w-full max-w-md cursor-pointer"
                  onClick={() => setSelectedImage(kmeansMap.src)}
                />
                <p className="text-gray-300 text-sm italic mt-2">
                  {kmeansMap.caption}
                </p>
              </div>

              {/* Bar Graph */}
              <div className="flex flex-col items-center">
                <img
                  src={barGraph.src}
                  alt="Bar Graph of Cluster Centers"
                  className="rounded-xl hover:-translate-y-1 transition-all w-full max-w-md cursor-pointer"
                  onClick={() => setSelectedImage(barGraph.src)}
                />
                <p className="text-gray-300 text-sm italic mt-2">
                  {barGraph.caption}
                </p>
              </div>
            </div>

            {/* Right Column: Dendrogram */}
            <div className="flex flex-col items-center">
              <img
                src={dendrogram.src}
                alt="Rated Z-Score Dendrogram"
                className="rounded-xl hover:-translate-y-1 transition-all w-full max-w-lg cursor-pointer"
                onClick={() => setSelectedImage(dendrogram.src)}
              />
              <p className="text-gray-300 text-sm italic mt-2">
                {dendrogram.caption}
              </p>
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
