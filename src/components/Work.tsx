import Image from "next/image";
import Link from "next/link";
import projects from "../projects.json";

interface WorkProps {
  fraunces: any;
}

export default function Work({ fraunces }: WorkProps) {
  return (
    <div className="px-6 md:px-20 mt-10 py-10 pb-20 work">
      <h1 className={`${fraunces.className} md:text-5xl text-3xl uppercase `}>
        My Projects
      </h1>
      <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 w-full">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={`/projects/${encodeURIComponent(project.title)}`}
          >
            <div className="project-card">
              <div className="project-image mb-4 object-cover">
                <Image
                  src={project.cover}
                  width={500}
                  height={500}
                  alt="Project Image"
                  className="rounded-md w-full h-full"
                />
              </div>
              <h2 className={`${fraunces.className} text-3xl uppercase `}>
                {project.title}
              </h2>
              <p>{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
