import React from "react";
import { Button } from "../../../../components/ui/button";
import { NavbarSubsection } from "../NavbarSubsection";

export const OurMissionSubsection = (): JSX.Element => {
  return (
    <section className="w-full bg-white">
      <NavbarSubsection />

      <div className="container mx-auto px-4 py-12 flex flex-col items-center">
        <h1 className="w-full font-title font-[number:var(--title-font-weight)] text-black text-[length:var(--title-font-size)] text-center tracking-[var(--title-letter-spacing)] leading-[var(--title-line-height)] [font-style:var(--title-font-style)]">
          What We Do
        </h1>

        <div className="max-w-[1139px] mt-6 mb-12">
          <p className="font-['Lexend',Helvetica] font-medium text-black text-[22px] text-center leading-[33px]">
            Through our work, we redefine how AI is used in education and
            inspire young people K-12 through by combining AI and human
            interaction. We provide young minds of all ages with the tools,
            ethics, and support to pursue knowledge and professional interests
            in fun and equitable ways to fill the gaps in traditional schooling
            systems and reinforce academic skills and expectations
          </p>
        </div>

        <div className="w-full max-w-[1112px] h-[691px] mb-12">
          <img
            className="w-full h-full object-cover"
            alt="What We Do Image"
            src="/img/what-we-do.png"
          />
        </div>

        <h1 className="w-full font-title font-[number:var(--title-font-weight)] text-black text-[length:var(--title-font-size)] text-center tracking-[var(--title-letter-spacing)] leading-[var(--title-line-height)] [font-style:var(--title-font-style)]">
          Our Long Term Goals
        </h1>

        <div className="max-w-[1126px] mt-6 mb-12">
          <p className="font-['Lexend',Helvetica] font-medium text-black text-[22px] text-center leading-[33px]">
            We seek to inspire young people—regardless of background—to create
            and pursue knowledge for the sake of learning. We aim to increase
            access to resources and foster intellectually welcoming and
            inclusive social and academic spaces, in which students are able to
            learn equitably, make impacts in their environments, and exercise a
            freedom to chase virtue and knowledge. We plan to empower positive
            impact in their own lives and in the lives of people in their
            communities through building their confidence in learning.
          </p>
        </div>

        <div className="w-full max-w-[1044px] h-[622px] mb-12">
          <img
            className="w-full h-full object-cover"
            alt="Long Term Goals Image"
            src="/img/long-term-goals.png"
          />
        </div>
      </div>
    </section>
  );
};
