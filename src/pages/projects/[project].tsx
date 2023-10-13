import { Fjalla_One } from "next/font/google";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import projects from "../../projects.json";

const fjalla = Fjalla_One({ weight: "400", preload: false });

export default function Project() {
  const router = useRouter();
  const project_id = router.query.project;

  const projectId = parseInt(project_id as string, 10);
  const project = projects.find((project) => project.id === projectId);

  return (
    <div className="px-6 md:px-20 mt-28 py-10 pb-20 work">
      <Link href="/#work" className="text-xl">
        ← BACK
      </Link>

      <h1 className={`${fjalla.className} md:text-5xl text-3xl uppercase `}>
        {project ? project.title : "Project Not Found"}
      </h1>
      {project && (
        <div className="flex flex-col justify-center items-center w-full">
          {project.images.map((image) => (
            <Image
              src={image}
              width={800}
              height={800}
              alt="Project Image"
              className="rounded-md mb-2"
            />
          ))}
          <p>{project.description}</p>
          <div className="flex gap-4 mt-4">
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
