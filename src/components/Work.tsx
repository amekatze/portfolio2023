import Image from "next/image";
import Link from "next/link";
import projects from "../projects.json";

interface WorkProps {
  fjalla: any;
}

export default function Work({ fjalla }: WorkProps) {
  return (
    <div className="px-6 md:px-20 md:mt-10 mt-48 py-10 pb-20 work" id="work">
      <h1 className={`${fjalla.className} md:text-5xl text-3xl uppercase `}>
        My Projects
      </h1>
      <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 w-full">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${encodeURIComponent(project.id)}`}
            passHref
          >
            <div className="project-card">
              <div className="project-image mb-4">
                <Image
                  src={project.cover}
                  width={500}
                  height={500}
                  alt="Project Image"
                  loading="lazy"
                  className="rounded-md w-full h-full object-cover"
                />
              </div>
              <h2 className={`${fjalla.className} text-3xl uppercase `}>
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
