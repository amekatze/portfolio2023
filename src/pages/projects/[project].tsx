import { Fjalla_One } from "next/font/google";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import projects from "../../projects.json";

const fjalla = Fjalla_One({ weight: "400", preload: false });

export default function Project() {
  const router = useRouter();
  const project_id = router.query.project;

  const projectId = parseInt(project_id as string, 10);
  console.log(router.query);

  const project = projects.find((project) => project.id === projectId);

  return (
    <>
      <div className="px-6 md:px-20 mt-28 py-10 pb-20 work">
        <h1 className={`${fjalla.className} md:text-5xl text-3xl uppercase `}>
          {project ? project.title : "Project Not Found"}
        </h1>
        {project && (
          <div>
            <p>{project.description}</p>
            {/* Add more details or components based on your project object */}
          </div>
        )}
      </div>
    </>
  );
}
