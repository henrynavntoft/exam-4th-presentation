"use client";

import Link from "next/link";
import Scene404 from "./components/404Scene";
import { Button } from "@nextui-org/react";

export default function Custom404() {
  return (
    <>
      <section className="relative h-screen flex justify-center items-center">
        <Scene404 />
        <div className="z-10 text-center">
          <h1 className="logo">404</h1>
          <h3 className=" mb-4">Page under construction</h3>
          <Button>
            <Link href={"/"}>Go back</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
