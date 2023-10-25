"use client";

import { useState } from "react";
import { Fjalla_One } from "next/font/google";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import projects from "../../projects.json";

const fjalla = Fjalla_One({ weight: "400", preload: false });

export default function Project() {
  const router = useRouter();
  const project_id = router.query.project;

  const projectId = parseInt(project_id as string, 10);
  const project = projects.find((project) => project.id === projectId);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    if (project) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % project.images.length
      );
    }
  };

  const goToPrevImage = () => {
    if (project) {
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex - 1 + project.images.length) % project.images.length
      );
    }
  };

  const handleMiniImageClick = (index: any) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="px-6 md:px-20 mt-28 py-10 pb-20 work">
      <Link href="/#work" className="text-xl">
        ← BACK
      </Link>

      <h1 className={`${fjalla.className} md:text-5xl text-3xl uppercase `}>
        {project ? project.title : "Project Not Found"}
      </h1>
      {project && (
        <div className="flex flex-col justify-center items-center w-full relative">
          <p className="text-xl mb-2">Project Images</p>
          <div className="relative flex items-center justify-center gap-4 w-[80%]">
            {project.images.length > 1 && (
              <Image
                src="/icons/arrow.svg"
                width={30}
                height={30}
                alt="Project Image"
                onClick={goToPrevImage}
                className="rounded-md mb-2 cursor-pointer rotate-180 icons"
              />
            )}

            <Image
              src={project.images[currentImageIndex]}
              width={800}
              height={800}
              alt="Project Image"
              className="rounded-md mb-2 w-full"
            />

            {project.images.length > 1 && (
              <Image
                src="/icons/arrow.svg"
                width={30}
                height={30}
                alt="Project Image"
                onClick={goToNextImage}
                className="rounded-md mb-2 cursor-pointer  icons"
              />
            )}
          </div>
          {project.images.length > 1 && (
            <div className="flex flex-wrap justify-center flex-wrap gap-2">
              {project.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Mini Image ${index}`}
                  className={`rounded-md hover:brightness-50 md:w-28 w-20 cursor-pointer ${
                    index === currentImageIndex ? "selected" : ""
                  } `}
                  onClick={() => handleMiniImageClick(index)}
                />
              ))}
            </div>
          )}
          <div className="mt-20">
            <p>{project.description}</p>
          </div>
          <div className="flex gap-4 mt-2">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <div className="project-link w-20 h-20 rounded-full flex items-center justify-center">
                  LIVE
                </div>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project-link w-20 h-20 rounded-full flex items-center justify-center">
                  CODE
                </div>
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
