import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

export default function Features() {
  return (
    <section className="relative transition-transform duration-500 ease-in-out transform hover:scale-105">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Join TechXIndia
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Empower your future with TechXIndia
            </h2>
            <p className="text-lg text-indigo-200/65">
              Join TechXIndia and empower yourself through seamless collaboration, open feedback loops, and shared progress across teams — all with just a click. Be part of a vibrant community driving innovation and growth.
            </p>
          </div>
          <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <Image
              className="max-w-none"
              src={FeaturesImage}
              width={1104}
              height={384}
              alt="Features"
            />
          </div>
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            {[
              {
                title: "Collaborative Milestones",
                description:
                  "Track and celebrate progress within a collaborative space, ensuring that every member’s contribution is recognized. TechXIndia fosters innovation and teamwork to make your milestones impactful.",
                iconPath:
                  "M0 0h14v17H0V0Zm2 2v13h10V2H2Z",
              },
              {
                title: "Empowering Teams",
                description:
                  "TechXIndia provides a platform for teams to collaborate seamlessly. By leveraging shared goals and open communication, we build stronger, more effective teams that push boundaries.",
                iconPath:
                  "M7 8V0H5v8h2Zm12 16v-4h-2v4h2Z",
              },
              {
                title: "Innovation Hub",
                description:
                  "At TechXIndia, we believe in creating an ecosystem where innovation thrives. From brainstorming to execution, every team member is empowered to bring fresh ideas to the table.",
                iconPath:
                  "M23.414 6 18 .586 16.586 2l3 3H7a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4h12.586l-3 3L18 11.414 23.414 6Z",
              },
              {
                title: "Strategic Growth",
                description:
                  "Focused on long-term goals, TechXIndia offers opportunities for growth, helping individuals scale their abilities while contributing to the overall success of the community.",
                iconPath:
                  "M8 16c0 1.219-.689 2.281-1.719 2.812-.31.176-.635.338-.953.523-.32.185-.617.379-.937.588-.7.412-1.394.849-2.074 1.344-.456.267-.91.537-1.375.827-.179.117-.356.237-.537.356-.521-.016-1.047-.165-1.5-.374-.493-.222-.969-.5-1.453-.828-.512-.349-.997-.724-1.464-1.097-.785-.543-1.579-1.066-2.417-1.658-.537-.356-1.069-.742-1.614-1.107l-.042-.029c-.393-.274-.767-.566-1.139-.858-.585-.476-.983-.99-1.293-1.617l-.042-.097c-.129-.393-.235-.797-.324-1.21l-.406-.51 4.221-3.276C4.029 6.986 3.29 4.76 3.29 4.759 3.008 4.348 3 4.15 3.003 3.96l4.206-.073L8 16Z",
              },
              {
                title: "Shared Learning",
                description:
                  "TechXIndia is built on the foundation of shared knowledge and learning. Collaborate with like-minded individuals to grow, evolve, and succeed together.",
                iconPath:
                  "M8 16c0 1.219-.689 2.281-1.719 2.812-.31.176-.635.338-.953.523-.32.185-.617.379-.937.588-.7.412-1.394.849-2.074 1.344-.456.267-.91.537-1.375.827-.179.117-.356.237-.537.356-.521-.016-1.047-.165-1.5-.374-.493-.222-.969-.5-1.453-.828-.512-.349-.997-.724-1.464-1.097-.785-.543-1.579-1.066-2.417-1.658-.537-.356-1.069-.742-1.614-1.107l-.042-.029c-.393-.274-.767-.566-1.139-.858-.585-.476-.983-.99-1.293-1.617l-.042-.097c-.129-.393-.235-.797-.324-1.21l-.406-.51 4.221-3.276C4.029 6.986 3.29 4.76 3.29 4.759 3.008 4.348 3 4.15 3.003 3.96l4.206-.073L8 16Z",
              },
              {
                title: "Seamless Integration",
                description:
                  "TechXIndia ensures that our platform integrates smoothly with the tools you use daily. Streamline your workflow and boost productivity with seamless integrations.",
                iconPath:
                  "M16 12l3 3 5-5-5-5-3 3V2H9v10h7v-1z",
              },
            ].map((feature, idx) => (
              <article key={idx} className="transition-all duration-500 ease-in-out hover:scale-105 hover:opacity-90">
                <svg
                  className="mb-3 fill-indigo-500 transition-all duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                >
                  <path d={feature.iconPath} />
                </svg>
                <h3 className="mb-1 text-[1rem] text-gray-200">
                  {`${idx + 1}. ${feature.title}`}
                </h3>
                <p className="text-indigo-200/65">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
