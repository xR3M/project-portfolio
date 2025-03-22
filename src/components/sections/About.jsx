import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {

        const programmingLanguages = ["Python", "R", "SQL"];
        const techSkills = ["ArcGIS Pro", "QGIS", "FME", "SNAP", "Google Earth Engine", "Excel", "Git", "Tensorflow", "Keras", "Pytorch", "MySQL", "Postgres"];
        const imageriesHandled = ["LiDAR", "Synthetic Aperture Radar (Sentinel 1)", "Landsat", "Optical (Sentinel 2)"]
        
    return (
     <section 
        id="about" 
        className="min-h-screen flex items-center justify-center py-20">
         <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> About Me</h2>

                <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gra-300 mb-6">
                        I am a Geospatial Analyst who transforms complex spatial data clear, actionable 
                        insights. Working at the intersection of GIS, remote sensing, and technology, 
                        I use tools like ArcGIS Pro, SQL, Excel, and Python to craft detailed maps, 
                        streamline data processes, and integrate diverse datasets. I’m passionate about 
                        uncovering hidden narratives in data to drive smarter urban planning and 
                        innovative environmental solutions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Languages
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {programmingLanguages.map((tech, key) => (
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                    ">
                                        {tech}
                                    </span>
                                ))}
                                
                            </div>

                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Technologies
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {techSkills.map((tech, key) => (
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59.130.2246.0.2)] transition
                                    ">
                                        {tech}
                                    </span>
                                ))}
                                
                            </div>

                        </div>


                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Imageries Handled
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {imageriesHandled.map((tech, key) => (
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59.130.2246.0.2)] transition
                                    ">
                                        {tech}
                                    </span>
                                ))}
                                
                            </div>

                        </div>

                    </div>
                </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">
                        📚 Education
                    </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>
                                MSA in Spatial Analysis
                            </strong> - Toronto Metropolitan University (2023-2024)
                        </li>
                        <li>
                            Relevant Coursework: Remote Sensing and Spatial Analysis, Spatial Analysis of Land Resources, Applied Spatial Statistics, Database Management and Spatial Technologies
                        </li>
                        <li>
                            <strong>
                                B.S. in Applied Statistics
                            </strong> - University of Toronto (2019-2023)
                        </li>
                        <li>
                            Relevant Coursework: Machine Learning, Remote Sensing, Software Design,  Databases, Geographical Information Processing, Spatial Data Science, Applied Statistical Modelling, Regression Analysis
                        </li>
                        
                    </ul>

                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">
                        💼 Work Experience
                    </h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold">Geospatial Analyst at Northcrest Developments (2024 - Present)</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>Leverage ArcGIS Pro to create high-quality maps and spatial analyses.</li>
                                <li>Utilize SQL for efficient querying and data extraction.</li>
                                <li>Employ Excel for data cleaning, merging, and organization.</li>
                                <li>Develop Python scripts to automate coordinate extraction and streamline data workflows.</li>
                                <li>Integrate multiple data sources (CAD drawings, shapefiles, JSON files) for comprehensive urban planning insights.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold">Geospatial Analyst Intern at Toronto Fire Services (September 2023 - December 2023)</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>Developed advanced tool in FME to identify optimal intersections for EVP systems.</li>
                                <li>Performed Geospatial Analysis to understand traffic patterns, aiding in strategic decision-making.</li>
                                <li>Employed Python with libraries like Matplotlib and Seaborn for in-depth descriptive statistical analysis, assessing EVP system performance.</li>
                                <li>Created correlation tables using Python to identify metrics most strongly associated with the average travel time of fire apparatus vehicles, informing strategic enhancements.</li>
                            </ul>





                        </div>

                    </div>

                </div>

            </div>



            </div>
     </RevealOnScroll>

    </section>
    )
}