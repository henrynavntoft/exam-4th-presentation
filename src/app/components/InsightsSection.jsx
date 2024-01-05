import { Button, Image, Input } from "@nextui-org/react";
import Link from "next/link";

export default function InsightsSection() {
  return (
    <>
      <section>
        <h4 className=" text-center mb-8">Insights</h4>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-4 flex-1 justify-center ">
            <h3>Creative workshops</h3>
            <p>
              In our Creative Workshops, we guide companies on integrating AI
              into their daily operations, aiming to enhance efficiency and
              spark creativity. Our focus is on making AI approachable for
              employees of all ages, equipping them with the skills needed for
              the evolving digital landscape. At Etheray, we believe in
              demystifying AI, shifting from skepticism to empowerment. Join us
              to learn how AI can be a tool for innovation, giving your team the
              edge in a tech-forward world.
            </p>

            <form className="flex justify-between items-center gap-4" action="">
              <Input
                type="email"
                isRequired
                variant="bordered"
                label="Email"
                placeholder="Enter your email"
              />
              <Button>Submit</Button>
            </form>
          </div>

          <div className="flex flex-1 justify-center items-center">
            <video
              autoPlay
              muted
              loop
              className="rounded-2xl"
              src="/video.mp4"
            ></video>
          </div>
        </div>
        <div className="my-10">
          <h3 className="text-center my-4">
            Learn how to generate more time with AI
          </h3>
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <Link
              href={"/"}
              className="flex flex-col justify-center items-center"
            >
              <Image
                alt=""
                src="/Workshop_1.png"
                layout="fill"
                loading="lazy"
              />
              <p className="">Creative coding workshop</p>
              <p>by Henry Navntoft</p>
            </Link>
            <Link
              href={"/"}
              className="flex flex-col justify-center items-center"
            >
              <Image
                alt=""
                src="/Workshop_2.png"
                layout="fill"
                loading="lazy"
              />
              <p className="">3D with spline</p>
              <p>by Marcin Grygo</p>
            </Link>
            <Link
              href={"/"}
              className="flex flex-col justify-center items-center"
            >
              <Image
                alt=""
                src="/Workshop_3.png"
                layout="fill"
                loading="lazy"
              />
              <p className="">AI as graphic designer</p>
              <p>by Henry Navntoft & Marcin Grygo</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
