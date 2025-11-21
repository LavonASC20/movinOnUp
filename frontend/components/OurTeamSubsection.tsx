"use client";

import { Card, CardContent } from "./card";
import { NavbarSubsection } from "./NavbarSubsection";
import { JSX } from "react";
import Image from "next/image"

export const OurTeamSubsection = (): JSX.Element => {
  // Team member data
  const teamMembers = [
    {
      id: 1,
      name: "Lavon Sykes",
      bio: "Lavon is inspired by the surge of AI and machine learning as an agent of exploration and knowledge creation. He has an A.B. in Applied Mathematics in Computer Science and Economics from Harvard University, and an S.M. in Applied Mathematics in Statistics from Harvard University, where he was a member of research groups using AI to power data-driven solutions in climate models for economic outcomes, scene graph generation using graph attention networks, and LLM problem solving capability. He loves teaching because seeing someone excited about learning a difficult concept feels like a win for both him and the student. He's been teaching and tutoring for the past 6 years and loves working with various levels of education!",
      src: "/lavon.png"
    },
    {
      id: 2,
      name: "Maame Forson",
      bio: "Maame has a BA from Harvard University where she studied Psychology on the Cognitive Neuroscience Track and Social Anthropology. She conducted neuroscience research about the change in the rate of brain aging in individuals who live in privileged environments vs those who live in environmentally deprived areas. Throughout college, she was a part of multiple public service, education, and cultural initiatives, melding together her multiple passions. She has been tutoring for the past 5 years and working with kids for the past 8, and loves to teach because she believes education is a necessity and it's really rewarding to see students progress through their academic and non-academic goals. Also, she appreciates the flexibiity and variety teaching affords because we are all students!",
      src: "/maame.png"
    },
    {
      id: 3,
      name: "Barisere Tuka",
      bio: "Barisere is passionate about finding ways to make education more accessible. She has a B.A. in History and Literature and, throughout college, has consistently worked with kids on volunteering and tutoring programs. Through working with children, the need to meet them where they were at further affirmed her passion.",
      src: "/bari.png"
    },
    {
      id: 4,
      name: "Hannah Munzberg",
      bio: "Hannah has many interests that culminate in the understanding and uplifting of communities. She graduated from Harvard University with a bachelor's degree in History of Art and Architecture, architectural design focused, with a secondary in Global Health and Health Policy. This achievement, a great deal for someone from her educationally disadvantaged area, is credited to her mentors who brought her into teaching and learning. Due to her having been in such a place, Hannah cares deeply about encouraging youth and curating a multifaceted support system that meets their needs.",
      src: "/hannah.png"
    },
  ];

  return (
    <section className="w-full bg-white pt-[100px]">
      {/* Navigation Bar */}
      <NavbarSubsection />

      <div className="pr-[75px] pl-[75px]">
        {/* Main Content */}
        <div className="container py-16">
          {/* Section Header */}
          <div className="mb-16">
            <h1 className="text-center font-bold text-black text-[69.9px] tracking-[-1.40px] mb-6">
              Our Team
            </h1>
            <p className="text-center font-light text-black italic text-[21px] tracking-[-0.42px] leading-normal max-w-4xl mx-auto">
              Get to know our tutors, and see why we&apos;re the perfect fit for you! <br />
              All our tutors have extensive experience in and out of the classroom. They work
              with young people as teachers, tutors, program coordinators, and mentors.
            </p>
          </div>

          {/* Team Members */}
          <div className="flex flex-col gap-16">
            {teamMembers.map((member, index) => (
              <div key={member.id} className="flex flex-row gap-8">
                {/* Even-indexed members have image on left, bio on right */}
                {index % 2 === 0 ? (
                  <>
                    <div className="w-[354px] flex-shrink-0">
                      <Card className="border-0">
                        <CardContent className="p-0">
                          <div className="flex flex-col gap-5">
                            <div className="relative mt-8 w-full max-w-[1000px] h-auto">
                              <Image 
                                alt={`${member.name} profile`}
                                src= {member.src}
                                className="w-full h-auto object-contain" 
                                width={788}
                                height={810}
                              />
                            </div>
                            <h3 className="font-medium text-black text-[21.6px] text-center leading-[32.4px]">
                              {member.name}
                            </h3>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="flex-1 flex items-center text-justify">
                      <p className="font-medium text-black text-[22px] leading-[33px]">
                        {member.bio}
                      </p>
                    </div>
                  </>
                ) : (
                  /* Odd-indexed members have bio on left, image on right */
                  <>
                    <div className="flex-1 flex items-center text-justify">
                      <p className="font-medium text-black text-[22px] leading-[33px]">
                        {member.bio}
                      </p>
                    </div>
                    <div className="w-[354px] flex-shrink-0">
                      <Card className="border-0">
                        <CardContent className="p-0">
                          <div className="flex flex-col gap-5">
                            <div className="relative mt-8 w-full max-w-[1000px] h-auto">
                              <Image 
                                alt={`${member.name} profile`}
                                src= {member.src}
                                className="w-full h-auto object-contain" 
                                width={788}
                                height={810}
                              />
                            </div>
                            <h3 className="font-medium text-black text-[21.6px] text-center leading-[32.4px]">
                              {member.name}
                            </h3>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
