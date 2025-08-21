import { NavbarSubsection } from "../NavbarSubsection";

export const OurMissionSubsection = (): JSX.Element => {
  return (
    <section className="w-full bg-white pt-[100px]">
      <NavbarSubsection />

      <div className="container mx-auto px-4 py-12 flex flex-col items-center">
        <h1 className="w-full font-title font-[number:var(--title-font-weight)] text-black text-[length:var(--title-font-size)] text-center tracking-[var(--title-letter-spacing)] leading-[var(--title-line-height)] [font-style:var(--title-font-style)]">
          What We Do
        </h1>

        <div className="max-w-[1139px] mt-6 mb-12">
          <p className="font-['Lexend',Helvetica] font-medium text-black text-[22px] text-center leading-[33px]">
            We redefine how AI is used in modern education. 
            We provide young minds of all ages with the tools,
            ethics, and support to pursue knowledge and their professional interests.
            Our platform encourages this in fun and equitable ways, filling gaps 
            in traditional educational systems while reinforcing academic skills.
            Rather than exercising an outcome-first approach, we focus on the 
            student-centric process of meta-learning, empowering students to take control
            of their own education.
          </p>
        </div>

        <div className="w-full max-w-[1112px] h-[691px] mb-12">
          <img
            className="w-full h-full object-cover"
            alt="What We Do Image"
            src="/movinOnUp/ourmission1.png"
          />
        </div>

        <h1 className="w-full font-title font-[number:var(--title-font-weight)] text-black text-[length:var(--title-font-size)] text-center tracking-[var(--title-letter-spacing)] leading-[var(--title-line-height)] [font-style:var(--title-font-style)]">
          Our Long Term Goals
        </h1>

        <div className="max-w-[1126px] mt-6 mb-12">
          <p className="font-['Lexend',Helvetica] font-medium text-black text-[22px] text-center leading-[33px]">
            We aim to increase students' access to important resources to further their 
            pursuit of knowledge. We will continue to foster inclusive
            social and academic spaces. We will push students to 
            learn rigorously, exercise their freedom to chase virtue, and 
            become more confident in their own abilities. We plan to empower our students
            to realize positive impact in their lives and in the lives of people in their
            communities.
          </p>
        </div>

        <div className="w-full max-w-[1044px] h-[622px] mb-12">
          <img
            className="w-full h-full object-cover"
            alt="Long Term Goals Image"
            src="/movinOnUp/ourmission2.png"
          />
        </div>
      </div>
    </section>
  );
};
