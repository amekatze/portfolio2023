interface WorkProps {
  fraunces: any;
}

export default function Work({ fraunces }: WorkProps) {
  return (
    <>
      <h1 className={`${fraunces.className} text-7xl uppercase `}>My Work</h1>
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
    </>
  );
}
