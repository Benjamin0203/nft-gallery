"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";

import { GlobalStyles } from "../../components/shared/GlobalStyles";
import Intro from "../pages/Intro";
import About from "../pages/About";
import Contact from "../pages/Contact";
import PageLayout from "components/PageLayout";
import Link from "next/link";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
         <PageLayout>
      <GlobalStyles />
      <main>
        <div style={{ marginTop: "5rem" }}>
          <Intro />
          <About />
          <Contact />
        </div>
      </main>
          </PageLayout>
    </>
  );
}

