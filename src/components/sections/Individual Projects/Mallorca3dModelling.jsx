import { useState } from "react";
import { RevealOnScroll } from "../../RevealOnScroll";

export const Mallorca3DModel = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projectTitle = "3D City Model of Mallorca, Spain Using QGIS & Blender";
  const abstract =
    "This project explores the potential of open-source tools for geospatial visualization by building a 3D model of Mallorca, Spain. The model integrates rendered satellite imagery, elevation data, building shapefiles, and road networks using QGIS and Blender. The goal was to investigate the feasibility and practicality of creating detailed, geospatially accurate urban models using only open-source software.";
  const keywords = [
    "3D Modeling",
    "QGIS",
    "Blender",
    "Mallorca",
    "Open Source GIS",
    "City Modeling",
    "Digital Elevation Model",
    "Geospatial Visualization",
    "Remote Sensing",
    "GIS"
  ];

  const figures = [
    {
      src: "/Images/Mallorca_afar.png",
      caption: "Overview of Mallorca island rendered with elevation and imagery."
    },
    {
      src: "/Images/Mallorca_Sideview.png",
      caption: "Side perspective showing terrain and 3D extrusions of buildings."
    },
    {
      src: "/Images/Mallorca_CityView.png",
      caption: "Zoomed-in city view of Palma with building footprints and road networks."
    }
  ];

  return (
    <section
      id="mallorca-3d-model"
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
