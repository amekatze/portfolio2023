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
      <div className="flex flex-wrap gap-16">
        <Image
          src="/images/IMG_8117.jpg"
          width={300}
          height={250}
          alt="A photo of me!"
          loading="lazy"
          className="rounded-md object-cover"
        />
        <div className="max-w-[600px] text-xl">
          Hi, I'm Mali. I'm a UX/UI Designer and Fullstack Developer. With a
          background in IT as a Technical Coordinator, primarily in the
          logistics field, I've navigated the complexities of managing data and
          transforming it into user-friendly, front-facing solutions. My journey
          in technology has equipped me with a versatile skill set, enabling me
          to seamlessly integrate design aesthetics with the intricacies of
          fullstack development.
          <br />
          <br />
          I've led projects and managed teams, bringing a collaborative and
          leadership dimension to my skill set. I understand how to initiate and
          successfully conclude a project, conduct thorough research to
          comprehend end users, and effectively communicate with stakeholders.
          Beyond the tech realm, I've also embraced my artistic side as a
          freelance artist. What started as a hobby has organically woven into
          my professional path, allowing me to fuse my understanding of design
          and aesthetics into every aspect of my career.
        </div>
      </div>
    </div>
  );
}
