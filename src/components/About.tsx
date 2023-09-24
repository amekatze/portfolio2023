import Image from "next/image";

interface AboutProps {
  fraunces: any;
}

export default function About({ fraunces }: AboutProps) {
  return (
    <div className="about mt-60 mb-40 pb-32">
      <h1
        className={`${fraunces.className} md:text-7xl text-5xl  uppercase text-center`}
      >
        About Me
      </h1>
      <div className="flex flex-wrap md:px-14 justify-center gap-[60px] py-10 px-10">
        <Image
          src="/images/IMG_7025.JPG"
          width={350}
          height={350}
          alt="A photo of me!"
          className="rounded-md grayscale"
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
