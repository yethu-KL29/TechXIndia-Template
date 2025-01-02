import React from "react";

export default function HeroHome() {
  return (
    <>
      <section className="relative w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1" style={{ maxWidth: "1200px" }}>
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
        Welcome to <span className="text-gradient-transition">TechXIndia</span>
          {/* SVGs */}
          <img
            className="sqD squiggle-hero-html w-16 top-[-90px] right-[5%] sm:top-[-90px] sm:right-[170px]"
            style={{ animationDelay: "0.1s" }}
            src="/static/doodles/hero/html.svg"
            alt="html doodle"
          />
          <img
            className="sqD squiggle-hero-nextjs hidden top-[75px] right-0 w-11"
            style={{ animationDelay: "0.2s" }}
            src="/static/doodles/hero/nextjs.svg"
            alt="nextjs doodle"
          />
         
          <img
            className="sqD hidden sm:block bottom-[-340px] left-[-180px]"
            style={{ animationDelay: "0.4s" }}
            src="/static/doodles/hero/coder.svg"
            alt="coder doodle"
          />
          <img
            className="sqD hidden sm:block left-[100px] lg:left-[160px] bottom-[-150px]"
            style={{ animationDelay: "0.5s" }}
            src="/static/doodles/hero/js.svg"
            alt="js doodle"
          />
          <img
            className="sqD bottom-[-320px] right-[65%] sm:right-[45%]"
            style={{ animationDelay: "0.6s" }}
            src="/static/doodles/hero/dino.svg"
            alt="dino doodle"
          />
          <img
            className="sqD right-[-60px] sm:right-0 bottom-[-180px] lg:[5%]"
            style={{ animationDelay: "0.7s" }}
            src="/static/doodles/hero/paintbrush.svg"
            alt="paintbrush doodle"
          />
          <img
            className="sqD squiggle-hero-pop1 hidden sm:block sm:top-[-130px] sm:left-[15%] lg:top-[-130px] lg:left-[120px]"
            src="/static/doodles/hero/pop1.svg"
            alt="pop1 doodle"
          />
          <img
            className="sqD left-[-35px] bottom-[-85px] sm:bottom-[-100px] sm:left-5 opacity-40"
            style={{ animationDelay: "0.9s" }}
            src="/static/doodles/hero/code.svg"
            alt="code doodle"
          />
        </h1>
        <p className="text-xl mb-5 text-indigo-200/65" data-aos="fade-up" data-aos-delay={200}>
          Join us for the premier tech event of the year, showcasing cutting-edge technology and innovative solutions from industry leaders.
        </p>
        <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
          <div data-aos="fade-up" data-aos-delay={400}>
            <a
              className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
              href="#0"
            >
              <span className="relative inline-flex items-center">
                Register Now
                <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                  -&gt;
                </span>
              </span>
            </a>
          </div>
          <div data-aos="fade-up" data-aos-delay={600}>
            <a
              className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
              href="#0"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
