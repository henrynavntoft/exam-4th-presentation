import { useRef } from "react";
import HeroScene from "./HeroScene";

export default function HeroSection() {
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
      <section className="relative h-screen flex justify-center items-center">
        <HeroScene />
        <div className="z-10 text-center">
          <h1 className="logo">Etheray</h1>
          <p className=" flex justify-center mt-4 max-w-xl mx-auto">
            Bringing a personal touch to your company - We use AI to boost our
            creativity while bringing new ideas and improved workflows to
            reality.
          </p>
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
        className="h-screen flex flex-col justify-center items-center mx-auto max-w-4xl gap-10 "
      >
        <div className="">
          <h2 className="">Develop solutions that improve the experience</h2>
        </div>

        <div className="">
          <h5 className="">How we do it</h5>
          <p className="">
            We are a design studio in the heart of Copenhagen. We are two
            devoted friends whos mission is merging human creativity with AIs
            precision. Our size is our strength. Thanks to our size and
            knowledge we are flexible for many challenges transforming bold
            ideas into digital realities. Our expertise is not just in creating;
            it is in empowering you with the knowledge to help your company
            stand out in the market.
          </p>
        </div>
      </section>
    </>
  );
}
