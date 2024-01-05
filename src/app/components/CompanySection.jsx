import { Button, Image } from "@nextui-org/react";
import Link from "next/link";

export default function CompanySection() {
  return (
    <>
      <section>
        <h4 className="text-center mb-8">Company Core</h4>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
          <article className="flex flex-col-reverse gap-8 md:flex-row ">
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="">Marcin</h2>
              <p className="">Visual Designer</p>
              <p className="mt-4 max-w-xl">
                As a creative visual designer, I bring imagination to life,
                painting the digital canvas with designs that tell your unique
                story in vivid color and form.
              </p>
              <div className="flex gap-6 mt-4">
                <Link href={"/"}>
                  <Image
                    radius="none"
                    className="dark:invert"
                    alt=""
                    src="linkedin.svg"
                    width={30}
                    height={30}
                    loading="lazy"
                  />
                </Link>
                <Link href={"/"}>
                  <Image
                    radius="none"
                    className="dark:invert"
                    alt=""
                    src="be.svg"
                    width={30}
                    height={30}
                    loading="lazy"
                  />
                </Link>
                <Link href={"/"}>
                  <Image
                    radius="none"
                    className="dark:invert"
                    alt=""
                    src="web.svg"
                    width={30}
                    height={30}
                    loading="lazy"
                  />
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <Image
                alt=""
                src="/marcin-hor.webp"
                width={1000}
                height={1000}
                isZoomed
                loading="lazy"
              />
            </div>
          </article>

          <article className="flex flex-col-reverse gap-8 md:flex-row-reverse">
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="">Henry</h2>
              <p className="">Developer</p>
              <p className="mt-4 max-w-xl">
                As an interactive website developer and marketer, I weave
                together engaging narratives and innovative technologies,
                ensuring every click connects and captivates.
              </p>
              <div className="flex gap-6 mt-4">
                <Link href={"/"}>
                  <Image
                    radius="none"
                    className="dark:invert"
                    alt=""
                    src="linkedin.svg"
                    width={30}
                    height={30}
                    loading="lazy"
                  />
                </Link>
                <Link href={"/"}>
                  <Image
                    radius="none"
                    className="dark:invert"
                    alt=""
                    src="github-mark.svg"
                    width={30}
                    height={30}
                    loading="lazy"
                  />
                </Link>
                <Link href={"/"}>
                  <Image
                    radius="none"
                    className="dark:invert"
                    alt=""
                    src="web.svg"
                    width={30}
                    height={30}
                    loading="lazy"
                  />
                </Link>
              </div>
            </div>

            <div className="flex-1">
              <Image
                alt=""
                src="/henry-hor.webp"
                width={1000}
                height={1000}
                isZoomed
                loading="lazy"
              />
            </div>
          </article>
        </div>
        <div className="flex justify-center mt-10">
          <Link href={"/about"}>
            <Button>See more</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
