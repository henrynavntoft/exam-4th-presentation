"use client";
import { Input, RadioGroup, Radio, Textarea, Button } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import UnderFooter from "./UnderFooter";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    budget: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/route", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Form submitted successfully:", result);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <footer className="flex flex-col sm:flex-row justify- align-top m-10 gap-10 ">
        <div className="flex-1">
          <h2 className=" mb-4">
            Develop your <br /> skills with <br /> Etheray
          </h2>
          <div className="flex gap-8 ">
            <div className="space-y-2">
              <h5 className="">Structure</h5>
              <ol className="space-y-2">
                <Link href={"/"}>
                  <li>Home</li>
                </Link>
                <Link href={"/services"}>
                  <li>Services</li>
                </Link>
                <Link href={"/port"}>
                  <li>Portfolio</li>
                </Link>
                <Link href={"/about"}>
                  <li>About</li>
                </Link>
              </ol>
            </div>
            <div className="flex flex-col justify-between ">
              <h5 className="">Check out our social</h5>
              <div className="flex gap-6 text-center items-center">
                <Link href={"/"}>
                  <Image
                    className="dark:invert"
                    radius="none"
                    src="insta.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                </Link>
                <Link href={"/"}>
                  <Image
                    className="dark:invert"
                    radius="none"
                    src="linkedin.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                </Link>
                <Link href={"/"}>
                  <Image
                    className="dark:invert"
                    radius="none"
                    src="web.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                </Link>
              </div>
              <div className="flex gap-6">
                <Link href={"/"} className="flex flex-col">
                  <span>Carrer</span>
                  <Image
                    src="thing.svg"
                    width={30}
                    height={30}
                    alt=""
                    className="dark:invert"
                    radius="none"
                  />
                </Link>
                <Link href={"/"} className="flex flex-col">
                  <span>Teams</span>
                  <Image
                    src="thing.svg"
                    width={30}
                    height={30}
                    alt=""
                    className="dark:invert"
                    radius="none"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <form className="flex flex-col flex-1 gap-6" onSubmit={"/"}>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              name="name"
              type="text"
              isRequired
              variant="bordered"
              label="Name"
              placeholder="Enter your name"
              onChange={handleChange}
            />
            <Input
              name="email"
              type="email"
              isRequired
              variant="bordered"
              label="Email"
              placeholder="Enter your email"
              onChange={handleChange}
            />
          </div>
          <Textarea
            name="message"
            label="Message"
            isRequired
            variant="bordered"
            placeholder="Enter your message"
            onChange={handleChange}
          />
          <div className="flex items-end gap-10 justify-between">
            <RadioGroup
              name="budget"
              isRequired
              orientation="horizontal"
              label="Project Budget"
              onChange={handleChange}
            >
              <Radio value="1-10k">1-10k</Radio>
              <Radio value="10-20k">10-20k</Radio>
              <Radio value="20-50k">20-50k</Radio>
              <Radio value="50-100k">50-100k</Radio>
            </RadioGroup>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </footer>
      <UnderFooter />
    </>
  );
}
