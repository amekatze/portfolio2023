import Image from "next/image";

interface AboutProps {
  fjalla: any;
}

export default function About({ fjalla }: AboutProps) {
  return (
    <div
      className="about mt-20 pt-10 pb-20 px-6 md:px-20 flex items-center flex-col"
      id="about"
    >
      <h1
        className={`${fjalla.className} md:text-5xl text-3xl uppercase text-right md:px-14`}
      >
        About Me
      </h1>
      <div className="flex flex-wrap gap-20">
        <Image
          src="/images/IMG_8117.jpg"
          width={260}
          height={250}
          alt="A photo of me!"
          loading="lazy"
          className="rounded-md object-cover"
        />
        <div className="max-w-[600px] text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          con. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatu. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id es. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, to. Nemo enim ipsam voluptatem quia
          voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma.
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit.
        </div>
      </div>
    </div>
  );
}
