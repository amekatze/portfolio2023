import Image from "next/image";

interface NavProps {
  fraunces: any;
}

export default function Header({ fraunces }: NavProps) {
  return (
    <div className="flex flex-col gap-14 md:my-64 my-40 md:px-24 px-6 h-scren header ">
      <div className={`${fraunces.className} md:text-8xl text-6xl uppercase`}>
        Hi, I'm Mali.
        <br />
        I'm a Full-Stack Developer
        <br />& UX/UI Designer.
      </div>
      <p className="text-2xl ml-10">
        Based in Tokyo, Japan born and raised in Germany. I create beautiful
        solutions to complex problems and questions.
      </p>
      <ul className="uppercase text-xl ml-10">
        <li>
          Check out my
          <b>
            <a href="http://www.github.com/amekatze" target="_blank">
              {" "}
              github{" "}
            </a>
          </b>
          →
        </li>
        <li>
          Check out my
          <b>
            <a href="https://www.linkedin.com/" target="_blank">
              {" "}
              linkedin{" "}
            </a>
          </b>
          →
        </li>
      </ul>
      <div className="techstack flex flex-wrap gap-6 px-6 mx-10 max-w-screen">
        <a href="https://www.typescriptlang.org/" target="_blank">
          <div className="icon">
            <Image
              src="/icons/typescript.svg"
              width={50}
              height={50}
              alt="Typescript"
            />
          </div>
        </a>
        <a href="https://nextjs.org/" target="_blank">
          <div className="icon">
            <Image
              src="/icons/nextjs.svg"
              width={50}
              height={50}
              alt="Next.js"
            />
          </div>
        </a>
        <a href="https://react.dev/" target="_blank">
          <div className="icon">
            <Image
              src="/icons/react.svg"
              width={50}
              height={50}
              alt="React.js"
            />
          </div>
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <div className="icon">
            <Image src="/icons/vue.svg" width={50} height={50} alt="Vue.js" />
          </div>
        </a>
        <a href="https://nodejs.org/en" target="_blank">
          <div className="icon">
            <Image
              src="/icons/nodejs.svg"
              width={50}
              height={50}
              alt="Node.js"
            />
          </div>
        </a>
        <a href="https://www.python.org/" target="_blank">
          <div className="icon">
            <Image
              src="/icons/python.svg"
              width={50}
              height={50}
              alt="Python"
            />
          </div>
        </a>
        <a href="https://www.djangoproject.com/" target="_blank">
          <div className="icon">
            <Image
              src="/icons/django.svg"
              width={50}
              height={50}
              alt="Django"
            />
          </div>
        </a>
        <a href="https://tailwindcss.com/" target="_blank">
          <div className="icon">
            <Image
              src="/icons/tailwind.svg"
              width={50}
              height={50}
              alt="Tailwind"
            />
          </div>
        </a>
        <a href="https://sass-lang.com/" target="_blank">
          <div className="icon">
            <Image src="/icons/sass.svg" width={50} height={50} alt="Sass" />
          </div>
        </a>
      </div>
    </div>
  );
}
