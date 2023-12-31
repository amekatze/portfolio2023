import { Fjalla_One } from "next/font/google";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import About from "@/components/About";
const Work = dynamic(() => import("@/components/Work"));

const fjalla = Fjalla_One({ weight: "400", preload: false });

export default function Home() {
  return (
    <>
      <Header fjalla={fjalla} />
      <Work fjalla={fjalla} />
      <About fjalla={fjalla} />
    </>
  );
}
