import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2"> Urban Vulnerability in Mexico City: A 5-Year PS-InSAR and SBAS Analysis of Ground Deformation (2019-2024)</h3>
                <p className="text-gray-400 mb-4">
                Leveraging SBAS and PS-InSAR, five years (2019–2024) of ground deformation in Mexico City were analyzed to pinpoint vulnerable buildings.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {["Python", "ArcGIS Pro"].map((tech, key) => (
                    <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                        "
                    >
                        {tech}
                    </span>
                    ))}
                </div>

                <div className="flex justify-between items-center">
                    <a
                    href="#mexico-city-deformation"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                    >
                    View Project →
                    </a>
                </div>
                </div>



            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Monitoring Land Subsidence and Vegetation Changes in Po Valley</h3>
              <p className="text-gray-400 mb-4">
              Advanced DInSAR and RVI techniques uncover substantial land subsidence and vegetation changes 
              in the Po Valley near Bologna, Italy, driven by groundwater extraction and urban development.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["SNAP"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#po-valley-deformation"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Analysing Socio-Economic Patterns Across America</h3>
              <p className="text-gray-400 mb-4">
              Advanced clustering techniques reveal distinct U.S. state groupings based on employment, education, healthcare, industry, and income metrics.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["SPSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#socioeconusa"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Mapping Canopy Dynamics: LiDAR Analysis of Tree Health in Allan Gardens</h3>
              <p className="text-gray-400 mb-4">
              LiDAR data from 2015 to 2019 reveals dynamic tree canopy changes in Allen Gardens, indicating overall vegetation growth.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["ArcGIS Pro"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#allan-canopy-dynamics"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Urban Sprawl Analysis</h3>
              <p className="text-gray-400 mb-4">
              Comparative analysis of suburban sprawl in Guelph and Winterthur 
              (2001–2021) reveals contrasting urban expansion patterns and 
              impacts using Landsat-derived NDBI.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["ArcGIS Pro", "Erdas IMAGINE"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="#urban-sprawl-analysis"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};