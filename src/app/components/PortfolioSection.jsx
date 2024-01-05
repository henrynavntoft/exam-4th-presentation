import { Image, Button } from "@nextui-org/react";
import Link from "next/link";

export default function PortfolioSection() {
  return (
    <>
      <section className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 flex flex-col mb-4">
          <h4 className="mb-4">Portfolio</h4>
          <p className="max-w-sm mb-4">
            In the heart of Copenhagen, we merge human ingenuity with AIs
            precision, transforming bold ideas into digital realities. Our
            expertise is not just in creating; it is in empowering you with the
            knowledge to excel in a digital-first future. Join us, and lets
            shape the digital landscape with clarity, creativity, and a human
            touch.
          </p>

          <Link href={"/port"}>
            <Button>See all projects</Button>
          </Link>
        </div>

        <div className="flex-1 grid grid-cols-2 grid-rows-1 gap-4 pt-4">
          <div>
            <Image
              src="/ex-port.png"
              alt="Project 1"
              layout="fill"
              loading="lazy"
            />
          </div>
          <div>
            <Image
              src="/ex-port.png"
              alt="Project 2"
              layout="fill"
              loading="lazy"
            />
          </div>
          <div>
            <Image
              src="/ex-port.png"
              alt="Project 3"
              layout="fill"
              loading="lazy"
            />
          </div>
          <div>
            <Image
              src="/ex-port.png"
              alt="Project 4"
              layout="fill"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
