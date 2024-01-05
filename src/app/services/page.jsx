"use client";

import { useRef } from "react";
import HeroScene from "../components/HeroScene";
import { Image } from "@nextui-org/react";

export default function Services() {
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
      {/* <HeroScene /> */}
      <section className="relative h-screen flex justify-center items-center">
        <div className="z-10 mx-10 text-center">
          <h4 className="">Explore our services</h4>
          <h1 className="flex justify-center mt-4 mx-4">
            Your vision, <br />
            our innovation
          </h1>
        </div>
        <p
          onClick={scrollToTarget}
          className="absolute bottom-0 mb-32 cursor-pointer"
        >
          Scroll
        </p>
      </section>

      <section ref={scrollTargetRef} className="p-10">
        <article className="flex flex-col md:flex-row gap-4 my-10">
          <div className="flex flex-col gap-2 flex-1">
            <p>01</p>

            <h2>Experience Design</h2>
            <p>
              At Etheray, our Experience Design is more than visual appeal it is
              about creating an intuitive path for users to explore and interact
              with ease. Imagine an online gallery where art enthusiasts can
              virtually navigate through exhibitions; we make such engaging
              journeys possible. By mapping out every click, swipe, and scroll,
              we ensure that each digital touchpoint is a step toward a
              delightful user experience. Designing intuitive navigation
              structures. Crafting user-centric interfaces. Streamlining user
              interactions for optimal flow.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="ex-service.png"
              alt="Project 1"
              layout="fill"
              objectFit="cover"
              width={400}
            />
          </div>
        </article>
        <article className="flex flex-col md:flex-row gap-4 my-10">
          <div className="flex flex-col gap-2 flex-1">
            <p>02</p>

            <h2>Web Development</h2>
            <p>
              At Etheray, our Experience Design is more than visual appeal it is
              about creating an intuitive path for users to explore and interact
              with ease. Imagine an online gallery where art enthusiasts can
              virtually navigate through exhibitions; we make such engaging
              journeys possible. By mapping out every click, swipe, and scroll,
              we ensure that each digital touchpoint is a step toward a
              delightful user experience. Designing intuitive navigation
              structures. Crafting user-centric interfaces. Streamlining user
              interactions for optimal flow.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="ex-service.png"
              alt="Project 1"
              layout="fill"
              objectFit="cover"
              width={400}
            />
          </div>
        </article>
        <article className="flex flex-col md:flex-row gap-4 my-10">
          <div className="flex flex-col gap-2 flex-1">
            <p>03</p>
            <h2>Branding</h2>
            <p>
              At Etheray, our Experience Design is more than visual appeal it is
              about creating an intuitive path for users to explore and interact
              with ease. Imagine an online gallery where art enthusiasts can
              virtually navigate through exhibitions; we make such engaging
              journeys possible. By mapping out every click, swipe, and scroll,
              we ensure that each digital touchpoint is a step toward a
              delightful user experience. Designing intuitive navigation
              structures. Crafting user-centric interfaces. Streamlining user
              interactions for optimal flow.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="ex-service.png"
              alt="Project 1"
              layout="fill"
              objectFit="cover"
              width={400}
            />
          </div>
        </article>
        <article className="flex flex-col md:flex-row gap-4 my-10">
          <div className="flex flex-col gap-2 flex-1">
            <p>04</p>
            <h2>Consultancy</h2>
            <p>
              At Etheray, our Experience Design is more than visual appeal it is
              about creating an intuitive path for users to explore and interact
              with ease. Imagine an online gallery where art enthusiasts can
              virtually navigate through exhibitions; we make such engaging
              journeys possible. By mapping out every click, swipe, and scroll,
              we ensure that each digital touchpoint is a step toward a
              delightful user experience. Designing intuitive navigation
              structures. Crafting user-centric interfaces. Streamlining user
              interactions for optimal flow.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="ex-service.png"
              alt="Project 1"
              layout="fill"
              objectFit="cover"
              width={400}
            />
          </div>
        </article>
      </section>
    </>
  );
}
