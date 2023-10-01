import { Fjalla_One } from "next/font/google";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Work from "@/components/Work";
import About from "@/components/About";

const fjalla = Fjalla_One({ weight: "400", preload: false });

export default function Home() {
  return (
    <Layout>
      <Header fjalla={fjalla} />
      <Work fjalla={fjalla} />
      <About fjalla={fjalla} />
    </Layout>
  );
}
