import React, { useState } from 'react';
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";
import { Link } from 'react-router-dom';

function Projects() {
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  const projects = [
    { id: 1, image: project1 },
    { id: 2, image: project2 },
    { id: 3, image: project3 },
    { id: 4, image: project4 },
    { id: 5, image: project5 },
    { id: 6, image: project6 },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100' id="projects">
      <div className="flex justify-center items-center py-4">
        <h1 className='text-7xl font-bold text-gray-400 uppercase'>my recent work</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className='relative group m-4 shadow-md overflow-hidden h-80 w-72'
            onMouseEnter={() => setHoveredProjectId(project.id)}
            onMouseLeave={() => setHoveredProjectId(null)}
          >
            {/* Affichage conditionnel de l'image ou du div avec lien */}
            {hoveredProjectId === project.id ? (
              // Div affiché lors du survol
              <div className='absolute inset-0 flex items-center justify-center bg-gray-500 '>
                <Link
                  to="#"
                  className='text-white text-lg font-semibold hover:underline hover:text-white'
                >
                  Visit website
                </Link>
              </div>
            ) : (
              // Image par défaut
              <img
                src={project.image}
                alt={`Project ${project.id}`}
       
                className='   w-full h-full object-cover transition-transform duration-300'
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
