"use client";

import { useRef } from "react";
import HeroScene from "../components/HeroScene";
import { Button, Image, Input } from "@nextui-org/react";
import CompanySection from "../components/CompanySection";

export default function About() {
  const scrollTargetRef = useRef(null);

  const scrollToTarget = () => {
    if (scrollTargetRef.current) {
      window.scrollTo({
        top: scrollTargetRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <HeroScene />
      <section className="relative h-screen flex justify-center items-center">
        <div className="z-10 mx-10 text-center">
          <h4 className="">Story about us</h4>
          <h1 className="flex justify-center mt-4 mx-4">
            Lighting the way to innovation
          </h1>
        </div>
        <p
          onClick={scrollToTarget}
          className="absolute bottom-0 mb-32 cursor-pointer"
        >
          Scroll
        </p>
      </section>

      <section
        ref={scrollTargetRef}
        className="text-center h-screen flex flex-col justify-center max-w-4xl mx-auto"
      >
        <h4>Our mission</h4>
        <p>
          We are committed to leading the evolution of AI-driven design,
          crafting experiences that resonate with users globally. Our vision is
          to merge human-centered design with cutting-edge AI, making the
          extraordinary a reality.
        </p>
      </section>
      <CompanySection />
      <section className="">
        <div className="text-center my-10">
          <h4 className="mb-4">Success Stories</h4>
          <p>
            At Etheray, we turn ambitious ideas into digital marvels. Our
            mission is to empower businesses with AI-infused design that
            captivates and converts. Partnering with us means embarking on a
            journey of innovation and growth. We are not just designing
            websites; we are crafting experiences that resonate, engage, and
            drive success. Join us, and lets create something extraordinary
            together.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center justify-items-center">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="w-150 h-auto flex justify-center">
              <Image
                src="/Customer.png"
                alt="Project 1"
                layout="intrinsic"
                width={150}
                objectfit="cover"
              />
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <h4>Join us</h4>
          <p>
            Ready for a creative leap? Partner with Etheray and transform your
            digital landscape. Lets innovate together - your future starts here.
          </p>
          <form
            action={"/"}
            className="flex justify-center items-center gap-4 w-full max-w-xl mx-auto"
          >
            <Input
              name="email"
              type="email"
              isRequired
              variant="bordered"
              label="Email"
              placeholder="Enter your email"
            />
            <Button>Sign Up</Button>
          </form>
        </div>
      </section>
    </>
  );
}
