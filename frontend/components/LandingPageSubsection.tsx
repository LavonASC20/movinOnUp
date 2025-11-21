"use client";

import { JSX } from "react";
import { Button, buttonVariants } from "@/components/button";
import { Card, CardContent } from "@/components/card";
import { NavbarSubsection } from "@/components/NavbarSubsection";
import Image from "next/image"
import Link from "next/link"

export const LandingPageSubsection = (): JSX.Element => {
  const teamMembers = [
    {
      name: "Lavon Sykes",
      imageSource: "/lavon.png",
    },
    {
      name: "Maame Forson",
      imageSource: "/maame.png",
    },
    {
      name: "Barisere Tuka",
      imageSource: "/bari.png",
    },
    {
      name: "Hannah Munzberg",
      imageSource: "/hannah.png",
    },
  ];

  const goals = [
    "To redefine education through innovation",
    "To be inclusive and diverse",
    "To be teachers you can trust",
    "To give you resources and access",
    "To inspire young people to pursue knowledge",
  ];

  return (
      <section className="w-full bg-white overflow-y-auto pt-[100px]">
        {/* Navigation */}
        <NavbarSubsection />

        <div className="pr-[75px] pl-[75px]">
          {/* Hero Section */}
          <div className="container mx-auto px-4 py-12 flex flex-col items-center">
            <h1 className="font-bold text-[64px] text-black tracking-[-1.28px] text-center">
              Human-Driven, AI-Accelerated
            </h1>

            <div className="mt-8 text-[23px] text-black text-center leading-[34.5px]">
              <span className="font-medium">
                We combine the power of experienced tutors and personalized AI support. <br />
                With us, there&apos;s only one way to go:{" "}
              </span>
              <span className="font-bold">
                UP!
                <br />
              </span>
              <span className="font-medium">
                {" "}
                <br />
              </span>
            </div>

            <div className="relative mt-8 w-[50vw] max-w-[1000px] h-auto">
              <Image 
                src="/usLetter.png" 
                className="w-full h-auto object-contain" 
                width={1000}
                height={688}
                alt="Us letter image" 
              />
            </div>
          </div>

          {/* Redefining Learning Section */}
          <div className="container mx-auto px-4 py-12">
            <h2 className="text-[55px] font-semibold text-black tracking-[-1.10px] underline text-center mb-12 [-webkit-text-stroke:1px_#000000]">
              Redefining How You Learn
            </h2>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <div className="text-[22px] text-black leading-[33px]">
                  <span className="font-medium">
                    Worried about irresponsible AI use leading to lower on-demand performance?&nbsp;&nbsp;Our platform solves this through our modern learning approach, combining{" "}
                  </span>
                  <span className="font-bold">live tutoring</span>
                  <span className="font-medium">&nbsp;</span>
                  <span className="font-bold">and</span>
                  <span className="font-medium">&nbsp;</span>
                  <span className="font-bold">AI assistance</span>
                  <span className="font-medium">
                    .<br />
                    <br />
                  </span>
                </div>

                <div className="mt-12 flex justify-center">
                  <Link href = "/services">
                    <Button className="rounded-lg shadow-button-shadow text-white text-2xl px-6 py-3 font-medium">
                      Our Offerings
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <div className="relative w-full max-w-[1000px] rounded-[8px_8px_8px_8px] overflow-hidden h-auto">
                  <Image 
                    className="w-full h-auto object-contain" 
                    src="/landingpage1.png" 
                    alt="Our Mission image" 
                    width={1348}
                    height={1348}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Our Goals Section */}
          <div className="container mx-auto px-4 py-12">
            <h2 className="text-[55px] font-semibold text-black tracking-[-1.10px] font-['Inter',Helvetica] underline text-center mb-12 [-webkit-text-stroke:1px_#000000]">
              Our Goals
            </h2>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="relative w-full max-w-[1000px] rounded-[8px_8px_8px_8px] overflow-hidden h-auto">
                  <Image 
                    className="w-full h-auto object-contain" 
                    src="/landingpage2.png" 
                    alt="Our Goals image" 
                    width={1458}
                    height={1030}
                  />
                </div>

              <div className="w-full md:w-1/2">
                <div className="text-[22px] text-black text-center font-medium leading-[33px]">
                  {goals.map((goal, index) => (
                    <div key={index}>
                      {goal} <br />
                    </div>
                  ))}
                </div>

                <div className="mt-12 flex justify-center">
                  <Link href = "/mission">
                    <Button className="rounded-lg shadow-button-shadow text-white text-2xl px-6 py-3 font-medium">
                      Find Out More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Who We Are Section */}
          <div className="container mx-auto px-4 py-12">
            <h2 className="text-[55px] font-semibold text-black tracking-[-1.10px] underline text-center mb-12 [-webkit-text-stroke:1px_#000000]">
              Who We Are
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {teamMembers.slice(0, 2).map((member, index) => (
                <Card key={index} className="border-none">
                  <CardContent className="p-0">
                    <div className="relative w-full max-w-[1000px] rounded-[8px_8px_8px_8px] overflow-hidden h-auto">
                      <Image 
                        className="w-full h-auto object-contain" 
                        src={member.imageSource} 
                        alt={member.name}
                        width={788}
                        height={810}
                      />
                    </div>
                    <div className="mt-6 text-center">
                      <h3 className="font-medium text-2xl text-black leading-9">
                        {member.name}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {teamMembers.slice(2, 4).map((member, index) => (
                <Card key={index} className="border-none">
                  <CardContent className="p-0">
                    <div className="relative w-full max-w-[1000px] rounded-[8px_8px_8px_8px] overflow-hidden h-auto">
                      <Image 
                        className="w-full h-auto object-contain" 
                        src={member.imageSource} 
                        alt={member.name}
                        width={788}
                        height={810}
                      />
                    </div>
                    <div className="mt-6 text-center">
                      <h3 className="font-medium text-2xl text-black leading-9">
                        {member.name}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Link href = "/team">
                <Button className="rounded-lg shadow-button-shadow text-white text-2xl px-6 py-3 font-medium">
                  Full Tutor Profiles
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
      </section>
  );
};
