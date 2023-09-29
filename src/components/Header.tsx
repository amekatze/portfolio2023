import Image from "next/image";

interface NavProps {
  fraunces: any;
}

export default function Header({ fraunces }: NavProps) {
  return (
    <div className="flex flex-col gap-14 md:my-60 my-70 md:px-24 px-6 h-scren header ">
      <div className={`${fraunces.className} md:text-8xl text-6xl uppercase`}>
        Hi, I'm Mali.
        <br />
        I'm a Full-Stack Developer.
      </div>
      <p className="text-2xl ml-10">
        Based in Tokyo, Japan born and raised in Germany.
      </p>
      <ul className="uppercase text-xl ml-10">
        <li>
          Check out my <b>projects</b> →
        </li>
        <li>
          Check out my <b>thoughts</b> →
        </li>
        <li>
          Check out my <b>art</b> →
        </li>
      </ul>
      <div className="techstack flex flex-wrap gap-6 px-2 mx-10 max-w-screen">
        <Image
          src="/icons/typescript.svg"
          width={50}
          height={50}
          alt="Typescript"
          className="icon"
        />
        <Image
          src="/icons/nextjs.svg"
          width={50}
          height={50}
          alt="Next.js"
          className="icon"
        />
        <Image
          src="/icons/react.svg"
          width={50}
          height={50}
          alt="React.js"
          className="icon"
        />
        <Image
          src="/icons/vue.svg"
          width={50}
          height={50}
          alt="Vue.js"
          className="icon"
        />
        <Image
          src="/icons/python.svg"
          width={50}
          height={50}
          alt="Sass"
          className="icon"
        />
        <Image
          src="/icons/django.svg"
          width={50}
          height={50}
          alt="Sass"
          className="icon"
        />
        <Image
          src="/icons/tailwind.svg"
          width={50}
          height={50}
          alt="Tailwind"
          className="icon"
        />
        <Image
          src="/icons/sass.svg"
          width={50}
          height={50}
          alt="Sass"
          className="icon"
        />
      </div>
    </div>
  );
}
