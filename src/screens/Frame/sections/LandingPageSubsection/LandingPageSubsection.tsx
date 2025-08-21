import { Button } from "../../../../assets/button";
import { Card, CardContent } from "../../../../assets/card";
import { NavbarSubsection } from "../NavbarSubsection";

export const LandingPageSubsection = (): JSX.Element => {
  const teamMembers = [
    {
      name: "Lavon Sykes",
      imageSource: "/movinOnUp/lavon.png",
    },
    {
      name: "Maame Forson",
      imageSource: "/movinOnUp/maame.png",
    },
    {
      name: "Barisere Tuka",
      imageSource: "/movinOnUp/bari.png",
    },
    {
      name: "Hannah Munzberg",
      imageSource: "/movinOnUp/hannah.png",
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
    <div className="mx-auto px-2">
      <section className="w-full bg-white overflow-y-auto pt-[100px]">
        {/* Navigation */}
        <NavbarSubsection />

        {/* Hero Section */}
        <div className="container mx-auto px-4 py-12 flex flex-col items-center">
          <h1 className="font-bold text-[64px] text-black tracking-[-1.28px] font-['Inter',Helvetica] text-center">
            Human-Driven, AI-Accelerated
          </h1>

          <div className="mt-8 text-[23px] text-black text-center font-['Lexend',Helvetica] leading-[34.5px]">
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

          <div className="mt-8 w-full max-w-[1000px]">
            <img 
              src="/movinOnUp/usLetter.png" 
              className="w-[75vw] h-auto object-cover" 
              alt="Us letter image" 
            />
          </div>
        </div>

        {/* Redefining Learning Section */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-[55px] font-semibold text-black tracking-[-1.10px] font-['Inter',Helvetica] underline text-center mb-12 [-webkit-text-stroke:1px_#000000]">
            Redefining How You Learn
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <div className="text-[22px] text-black font-['Lexend',Helvetica] leading-[33px]">
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
                <a href = "/movinOnUp/ourservices">
                  <Button className="bg-[#a18eff] rounded-lg shadow-button-shadow text-white text-2xl px-6 py-3 font-medium font-['Inter',Helvetica]">
                    Our Offerings
                  </Button>
                </a>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="rounded-[8px_0px_0px_8px] overflow-hidden">
                <img className="w-full h-auto object-cover" src="/movinOnUp/landingpage1.png" alt="Our Mission image" />
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
            <div className="w-full md:w-1/2">
              <img className="w-full h-auto object-cover" src = "/movinOnUp/landingpage2.png" alt="Our goals image" />
            </div>

            <div className="w-full md:w-1/2">
              <div className="text-[22px] text-black text-center font-['Lexend',Helvetica] font-medium leading-[33px]">
                {goals.map((goal, index) => (
                  <div key={index}>
                    {goal} <br />
                  </div>
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <a href = "/movinOnUp/ourmission">
                  <Button className="bg-[#a18eff] rounded-lg shadow-button-shadow text-white text-2xl px-6 py-3 font-medium font-['Inter',Helvetica]">
                    Find Out More
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Who We Are Section */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-[55px] font-semibold text-black tracking-[-1.10px] font-['Inter',Helvetica] underline text-center mb-12 [-webkit-text-stroke:1px_#000000]">
            Who We Are
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {teamMembers.slice(0, 2).map((member, index) => (
              <Card key={index} className="border-none">
                <CardContent className="p-0">
                  <div className="rounded-lg overflow-hidden">
                    <img
                      className="h-full w-auto object-cover"
                      alt={member.name}
                      src={member.imageSource}
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="font-medium text-2xl text-black font-['Inter',Helvetica] leading-9">
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
                  <div className="rounded-lg overflow-hidden">
                    <img
                      className="h-full w-auto object-cover"
                      alt={member.name}
                      src={member.imageSource}
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="font-medium text-2xl text-black font-['Inter',Helvetica] leading-9">
                      {member.name}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a href = "/movinOnUp/ourteam">
              <Button className="bg-[#a18eff] rounded-lg shadow-button-shadow text-white text-2xl px-6 py-3 font-medium font-['Inter',Helvetica]">
                Full Tutor Profiles
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
