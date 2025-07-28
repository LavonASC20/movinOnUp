import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { NavbarSubsection } from "../NavbarSubsection";

export const OurTeamSubsection = (): JSX.Element => {
  // Team member data
  const teamMembers = [
    {
      id: 1,
      name: "Lavon Sykes",
      bio: "Lavon is inspired by the surge of AI and machine learning as an agent of exploration and knowledge creation. He has an A.B. in Applied Mathematics in Computer Science and Economics from Harvard University, and an S.M. in Applied Mathematics in Statistics from Harvard University, where he was a member of research groups using AI to power data-driven solutions in climate models for economic outcomes, scene graph generation using graph attention networks, and LLM problem solving capability. He loves teaching because seeing someone excited about learning a difficult concept feels like a win for both him and the student. He's been teaching and tutoring for the past 6 years and loves working with various levels of education!",
    },
    {
      id: 2,
      name: "Maame Forson",
      bio: "Maame has a BA from Harvard University where she studied Psychology on the Cognitive Neuroscience Track and Social Anthropology. She conducted neuroscience research about the change in the rate of brain aging in individuals who live in privileged environments vs those who live in environmentally deprived areas. Throughout college, she was a part of multiple public service, education, and cultural initiatives, melding together her multiple passions. She has been tutoring for the past 5 years and working with kids for the past 8, and loves to teach because she believes education is a necessity and it's really rewarding to see students progress through their academic and non-academic goals. Also, she appreciates the flexibiity and variety teaching affords because we are all students!",
    },
    {
      id: 3,
      name: "Barisere Tuka",
      bio: "Barisere is passionate about finding ways to make education more accessible. She has a B.A. in History and Literature and, throughout college, has consistently worked with kids on volunteering and tutoring programs. Through working with children, the need to meet them where they were at further affirmed her passion.",
    },
    {
      id: 4,
      name: "Hannah Munzberg",
      bio: "Hannah has many interests that culminate in the understanding and uplifting of communities. She graduated from Harvard University with a bachelor's degree in History of Art and Architecture, architectural design focused, with a secondary in Global Health and Health Policy. This achievement, a great deal for someone from her educationally disadvantaged area, is credited to her mentors who brought her into teaching and learning. Due to her having been in such a place, Hannah cares deeply about encouraging youth and curating a multifaceted support system that meets their needs.",
    },
    {
      id: 5,
      name: "Alissandra Perez",
      bio: "Ailyn Alissandra holds a B.A. in Psychology with a focus on Cognitive Neuroscience from Harvard University, where she discovered her passion for research and education. Her recent work has explored how structural racism affects the mental health of Latine and Black adolescents.  She began tutoring and offering college advice during her freshman year and later became a full-time online teacher during the summer. Since then, she has dedicated herself to community service—working with marginalized youth and grounding her approach in restorative justice. She encourages all her students to be active participants in their communities.She's passionate about breaking down complex psychology and history concepts into fun, digestible lessons and helping students make meaningful connections. Alissandra believes education is a vehicle to success and is committed to helping each student find the key that unlocks their journey to wherever their heart leads them.",
    },
  ];

  return (
    <section className="w-full bg-white">
      {/* Navigation Bar */}
      <NavbarSubsection />

      {/* Main Content */}
      <div className="container py-16">
        {/* Section Header */}
        <div className="mb-16">
          <h1 className="text-center font-['Inter',Helvetica] font-bold text-[69.9px] tracking-[-1.40px] mb-6">
            Our Team
          </h1>
          <p className="text-center font-['Lato',Helvetica] font-light italic text-[21px] tracking-[-0.42px] leading-normal max-w-4xl mx-auto">
            Get to know us, and see why we&apos;re the perfect fit for you! Our
            tutors are passionate, accomplished scholars from top
            universities&nbsp;&nbsp;studying, researching, and working in a vast
            variety of fields. <br />
            We all have extensive experience in and out of the classroom working
            with children as teachers, tutors, program coordinators, and
            mentors.
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
                          <div className="w-[354px] h-[364px] rounded-[7.2px] overflow-hidden">
                            <img
                              className="w-full h-full object-cover"
                              alt={`${member.name} profile`}
                            />
                          </div>
                          <h3 className="font-['Inter',Helvetica] font-medium text-black text-[21.6px] text-center leading-[32.4px]">
                            {member.name}
                          </h3>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="flex-1">
                    <p className="font-['Lexend',Helvetica] font-medium text-black text-[22px] leading-[33px]">
                      {member.bio}
                    </p>
                  </div>
                </>
              ) : (
                /* Odd-indexed members have bio on left, image on right */
                <>
                  <div className="flex-1">
                    <p className="font-['Lexend',Helvetica] font-medium text-black text-[22px] leading-[33px]">
                      {member.bio}
                    </p>
                  </div>
                  <div className="w-[354px] flex-shrink-0">
                    <Card className="border-0">
                      <CardContent className="p-0">
                        <div className="flex flex-col gap-5">
                          <div className="w-[354px] h-[364px] rounded-[7.2px] overflow-hidden">
                            <img
                              className="w-full h-full object-cover"
                              alt={`${member.name} profile`}
                            />
                          </div>
                          <h3 className="font-['Inter',Helvetica] font-medium text-black text-[21.6px] text-center leading-[32.4px]">
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
    </section>
  );
};
