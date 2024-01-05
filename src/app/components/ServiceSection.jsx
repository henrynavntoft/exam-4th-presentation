import Link from "next/link";

export default function ServiceSection() {
  return (
    <>
      <section className="p-0 py-10">
        <h4 className="text-center mb-8">Services</h4>
        <div>
          {["Experience Design", "Development", "Branding", "Consultancy"].map(
            (service, index) => (
              <Link
                key={service}
                href={"/services"}
                className="cursor-pointer border-b border-foreground py-8 md:grid md:grid-cols-[20%_40%_40%] justify-between items-center hover-effect relative flex flex-col md:flex-row"
              >
                <span className="justify-self-start md:px-10">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="md:justify-self-start px-10">{service}</h3>
                <p className="md:justify-self-end px-10 md:px-10">
                  {service === "Experience Design" &&
                    "Crafting visually stunning and user-friendly interfaces that breathe life into your brands story."}
                  {service === "Development" &&
                    "Building scalable, and intuitive websites that drive engagement and conversion."}
                  {service === "Branding" &&
                    "Drawing out the essence of your brand to craft an image that sticks and stories that spread."}
                  {service === "Consultancy" &&
                    "Expert insights to navigate the digital terrain and elevate your business strategy with AI-driven solutions."}
                </p>
              </Link>
            )
          )}
        </div>
      </section>
    </>
  );
}
