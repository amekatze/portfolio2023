import Image from "next/image";

interface HeaderProps {
  fjalla: any;
}

const Header: React.FC<HeaderProps> = ({ fjalla }) => {
  return (
    <div className="flex flex-col gap-14 md:my-64 my-40 md:px-24 px-6 h-screen header">
      <div className={`${fjalla.className} md:text-8xl text-6xl uppercase`}>
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
          Check out my{" "}
          <b>
            <a
              href="http://www.github.com/amekatze"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </b>{" "}
          →
        </li>
        <li>
          Check out my{" "}
          <b>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </b>{" "}
          →
        </li>
      </ul>
      <div className="techstack grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-screen">
        <IconLink
          href="https://www.typescriptlang.org/"
          src="/icons/typescript.svg"
          alt="Typescript"
        />
        <IconLink
          href="https://nextjs.org/"
          src="/icons/nextjs.svg"
          alt="Next.js"
        />
        <IconLink
          href="https://react.dev/"
          src="/icons/react.svg"
          alt="React.js"
        />

        <IconLink href="https://vuejs.org/" src="/icons/vue.svg" alt="Vue.js" />

        <IconLink
          href="https://nodejs.org/en"
          src="/icons/nodejs.svg"
          alt="Node.js"
        />

        <IconLink
          href="https://www.python.org/"
          src="/icons/python.svg"
          alt="Python"
        />

        <IconLink
          href="https://www.djangoproject.com/"
          src="/icons/django.svg"
          alt="Django"
        />

        <IconLink
          href="https://tailwindcss.com/"
          src="/icons/tailwind.svg"
          alt="Tailwind"
        />

        <IconLink
          href="https://sass-lang.com/"
          src="/icons/sass.svg"
          alt="Sass"
        />

        {/* Add more IconLink components for additional icons */}
      </div>
    </div>
  );
};

interface IconLinkProps {
  href: string;
  src: string;
  alt: string;
}

const IconLink: React.FC<IconLinkProps> = ({ href, src, alt }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className="icon">
        <Image src={src} width={50} height={50} alt={alt} />
      </div>
    </a>
  );
};

export default Header;
