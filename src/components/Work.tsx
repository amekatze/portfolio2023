import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import projects from "../projects.json";

interface WorkProps {
  fjalla: any;
}

export default function Work({ fjalla }: WorkProps) {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(filter));

  return (
    <div className="px-6 md:px-20 sm:mt-10 mt-48 py-10 pb-20 work" id="work">
      <h1 className={`${fjalla.className} md:text-5xl text-3xl uppercase`}>
        My Projects
      </h1>

      <div className="mb-4 relative">
        <label htmlFor="filter" className="mr-2 ">
          Filter by
        </label>
        <select
          id="filter"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          className="py-2 px-4 rounded-md text-black"
        >
          <option value="all">All</option>
          <option value="design">Design</option>
          <option value="code">Code</option>
        </select>
      </div>

      <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 w-full">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="project-card relative overflow-hidden group"
          >
            <h2 className={`${fjalla.className} text-3xl mb-4 uppercase`}>
              {project.title}
            </h2>{" "}
            <Link
              key={project.id}
              href={`/projects/${encodeURIComponent(project.id)}`}
              passHref
            >
              <div className="project-image mb-4 relative overflow-hidden">
                <Image
                  src={project.cover}
                  width={500}
                  height={500}
                  alt="Project Image"
                  loading="lazy"
                  className="rounded-md w-full h-full object-cover transition-transform group-hover:scale-125"
                />
                <div className="project-description overlay absolute bottom-0 left-0 w-full h-20">
                  <p className="ml-10  text-center absolute bottom-1/2 transform translate-y-1/2">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
            {project.tags.map((tag) => (
              <span key={tag} className={`${tag} hover:text-red`}>
                {tag}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
