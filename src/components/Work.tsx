import Image from "next/image";
import Link from "next/link";
import projects from "../projects.json";

interface WorkProps {
  fjalla: any;
}

export default function Work({ fjalla }: WorkProps) {
  return (
    <div className="px-6 md:px-20 sm:mt-10 mt-48 py-10 pb-20 work" id="work">
      <h1 className={`${fjalla.className} md:text-5xl text-3xl uppercase`}>
        My Projects
      </h1>
      <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 w-full">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${encodeURIComponent(project.id)}`}
            passHref
          >
            <div className="project-card relative overflow-hidden group">
              <h2 className={`${fjalla.className} text-3xl mb-4 uppercase`}>
                {project.title}
              </h2>
              <div className="project-image mb-4 relative overflow-hidden">
                <Image
                  src={project.cover}
                  width={500}
                  height={500}
                  alt="Project Image"
                  loading="lazy"
                  className="rounded-md w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="project-description overlay absolute bottom-0 left-0 w-full h-20">
                  <p className="ml-10  text-center absolute bottom-1/2 transform translate-y-1/2">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
