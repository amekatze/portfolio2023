interface WorkProps {
  fraunces: any;
}

export default function Work({ fraunces }: WorkProps) {
  return (
    <div className="px-6 md:px-24">
      <h1 className={`${fraunces.className} md:text-7xl text-5xl  uppercase `}>
        My Projects
      </h1>
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-10 w-full">
        <div className="project-card">
          <div className="project-image"></div>
          <h2 className={`${fraunces.className} text-3xl uppercase `}>
            Project Title
          </h2>
          <p>Sed ut perspiciatis unde omnis iste natus →</p>
        </div>
        <div className="project-card">
          <div className="project-image"></div>
          <div>
            <h2 className={`${fraunces.className} text-3xl uppercase `}>
              Project Title
            </h2>
            <p>Sed ut perspiciatis unde omnis iste natus →</p>
          </div>
        </div>{" "}
        <div className="project-card">
          <div className="project-image"></div>
          <div>
            <h2 className={`${fraunces.className} text-3xl uppercase `}>
              Project Title
            </h2>
            <p>Sed ut perspiciatis unde omnis iste natus →</p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image"></div>
          <div>
            <h2 className={`${fraunces.className} text-3xl uppercase `}>
              Project Title
            </h2>
            <p>Sed ut perspiciatis unde omnis iste natus →</p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image"></div>
          <div>
            <h2 className={`${fraunces.className} text-3xl uppercase `}>
              Project Title
            </h2>
            <p>Sed ut perspiciatis unde omnis iste natus →</p>
          </div>
        </div>
      </div>
    </div>
  );
}
