import { Card, CardContent } from "../../../../assets/card";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "../../../../assets/table";
import { NavbarSubsection } from "../NavbarSubsection";
import { ContactForm } from "./ContactForm";

export const OurServicesSubsection = (): JSX.Element => {
  // Course data organized by category
  const courseCategories = [
    {
      name: "Math",
      courses: [
        "K-8 General Math",
        "Pre-Algebra",
        "Algebra 1",
        "Geometry",
        "Algebra 2",
        "Statistics",
        "Trigonometry",
        "AP Precalculus",
        "AP Calculus AB",
        "AP Calculus BC",
        "Competition/Olympiad Math",
        "Linear Algebra",
        "Multivariable Calculus",
      ],
    },
    {
      name: "Science",
      courses: [
        "International Psychology Olympiad",
        "International Neuroscience Olympiad",
        "AP Research",
        "AP Biology",
        "AP Chemistry",
        "AP Physics 1",
        "AP Physics 2",
        "AP Physics C: Mechanics",
        "AP Physics C: Electricity and Magnetism",
        "AP Computer Science A",
        "AP Computer Science Principles",
        "Machine Learning",
      ],
    },
    {
      name: "Humanities",
      courses: [
        "AP Psychology",
        "AP US History",
        "AP World History",
        "AP Language and Composition",
        "AP Literature",
        "AP Art History",
        "AP Music Theory",
        "AP Drawing",
        "AP Spanish Language Composition",
        "AP African American Studies",
        "AP 2-D Art and Design",
        "AP 3-D Art and Design",
        "Ap Spanish Lit",
      ],
    },
    {
      name: "Test + Admissions Prep",
      courses: ["SAT English", "SAT Math", "College Essay Prep"],
    },
  ];

  // Niche courses data
  const nicheCourses = [
    "3D Modeling",
    "Unity Game Design",
    "Intro to R",
    "Intro to Python",
    "Networking 101",
    "Personal Finance",
    "Chess",
    "Scratch Development",
  ];

  // Navigation items
  return (
    <section className="w-full bg-white">
      <NavbarSubsection />

      <div className="container flex flex-col items-center py-16">
        {/* Section Title */}
        <div className="w-full text-center mb-6">
          <h1 className="font-title font-[number:var(--title-font-weight)] text-black text-[length:var(--title-font-size)] tracking-[var(--title-letter-spacing)] leading-[var(--title-line-height)] [font-style:var(--title-font-style)]">
            What We Offer
          </h1>
        </div>

        {/* Description */}
        <div className="w-full max-w-[1253px] mb-12 font-['Lato',Helvetica] font-normal italic text-black text-xl text-center leading-[30px]">
          Our tutoring model aims to be inclusive and bring the learning to you,
          no matter how niche! We offer K-12 tutoring, AP classes, college prep,
          and more niche topics like personal finance, chess, how to use
          Scratch, game development in Unity, and much more. You can choose
          between personalized one-on-one tutoring or engaging small group
          classes, depending on what fits your learning style best!
        </div>

        {/* Course Table */}
        <div className="w-full max-w-[1187px] mb-16">
          <Card className="border border-solid border-[#b9b9b9] rounded overflow-hidden">
            <CardContent className="p-0">
              {/* Table Header */}
              <div className="flex w-full">
                {courseCategories.map((category, index) => (
                  <div
                    key={`category-${index}`}
                    className="flex-1 bg-[#d2e7ffc2] border-t border-l border-[#b9b9b9] p-3 py-5 text-center"
                  >
                    <h2 className="font-['Inter',Helvetica] font-normal text-black text-[25px] leading-[32.5px]">
                      {category.name}
                    </h2>
                  </div>
                ))}
              </div>

              {/* Course Rows */}
              <Table>
                <TableBody>
                  {Array.from({
                    length: Math.max(
                      ...courseCategories.map((c) => c.courses.length),
                    ),
                  }).map((_, rowIndex) => (
                    <TableRow key={`row-${rowIndex}`} className="border-none">
                      {courseCategories.map((category, colIndex) => (
                        <TableCell
                          key={`cell-${rowIndex}-${colIndex}`}
                          className={`border-t border-l border-[#b9b9b9] p-0 ${rowIndex >= category.courses.length ? "bg-[#0000000f]" : "bg-[#ffffff01]"}`}
                        >
                          <div className="px-3 py-2.5 text-left">
                            {rowIndex < category.courses.length ? (
                              <span className="font-['Inter',Helvetica] font-normal text-black text-sm leading-[18.2px]">
                                {category.courses[rowIndex]}
                              </span>
                            ) : (
                              <span className="font-['Inter',Helvetica] font-normal text-black text-xs leading-[15.6px]">
                                {""}
                              </span>
                            )}
                          </div>
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}

                  {/* Packages Row */}
                  <TableRow className="border-none">
                    <TableCell className="border-t border-l border-[#b9b9b9] p-0 bg-[#00000001]">
                      <div className="px-3 py-2.5 text-left">
                        <span className="font-['Inter',Helvetica] font-normal text-black text-sm leading-[18.2px]">
                          Linear Algebra
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="border-t border-l border-[#b9b9b9] p-0 bg-[#00000001]">
                      <div className="px-3 py-2.5 text-left">
                        <span className="font-['Inter',Helvetica] font-normal text-black text-sm leading-[18.2px]">
                          Machine Learning
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="border-t border-l border-[#b9b9b9] p-0 bg-[#ffffff01]">
                      <div className="px-3 py-2.5 text-left">
                        <span className="font-['Inter',Helvetica] font-normal text-black text-sm leading-[18.2px]">
                          AP 3-D Art and Design
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="border-t border-l border-[#b9b9b9] p-0 bg-[#d2e7ffc2]">
                      <div className="px-3 py-2.5 text-center">
                        <span className="font-['Inter',Helvetica] font-semibold text-black text-[25px] leading-[32.5px]">
                          Packages
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>

                  {/* Niche Courses Row */}
                  <TableRow className="border-none">
                    <TableCell className="border-t border-l border-[#b9b9b9] p-0 bg-[#00000001]">
                      <div className="px-3 py-2.5 text-left">
                        <span className="font-['Inter',Helvetica] font-normal text-black text-sm leading-[18.2px]">
                          Multivariable Calculus
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="border-t border-l border-[#b9b9b9] p-0 bg-[#d2e7ffc2]">
                      <div className="px-3 py-2.5 text-center">
                        <span className="font-['Inter',Helvetica] font-normal text-black text-[25px] leading-[32.5px]">
                          Niche Courses
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="border-t border-l border-[#b9b9b9] p-0 bg-[#ffffff01]">
                      <div className="px-3 py-2.5 text-left">
                        <span className="font-['Inter',Helvetica] font-normal text-black text-sm leading-[18.2px]">
                          Ap Spanish Lit
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="border-t border-l border-[#b9b9b9] p-0 bg-[#ffffff01]">
                      <div className="px-3 py-2.5 text-left">
                        <span className="font-['Inter',Helvetica] font-normal text-black text-[15px] leading-[19.5px]">
                          <span className="font-bold">Foundation: </span>
                          <span className="text-sm leading-[18.2px]">
                            Small Group Classes
                          </span>
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>

                  {/* Package Descriptions */}
                  <TableRow className="border-none">
                    <TableCell className="border-t border-l border-[#b9b9b9] p-0 bg-[#0000000f]">
                      <div className="px-3 py-2.5">
                        <span className="font-['Inter',Helvetica] font-normal text-black text-xs leading-[15.6px]">
                          {""}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="border-t border-l border-[#b9b9b9] p-0 bg-[#ffffff01]">
                      <div className="px-3 py-2.5 text-left">
                        <span className="font-['Inter',Helvetica] font-normal text-black text-sm leading-[18.2px]">
                          3D Modeling
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="border-t border-l border-[#b9b9b9] p-0 bg-[#ffffff01]">
                      <div className="px-3 py-2.5 text-left">
                        <span className="font-['Inter',Helvetica] font-normal text-black text-sm leading-[18.2px]">
                          AP Macroeconomics
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="border-t border-l border-[#b9b9b9] p-0 bg-[#ffffff01]">
                      <div className="px-3 py-2.5 text-left">
                        <span className="font-['Inter',Helvetica] font-normal text-[15px] leading-[19.5px]">
                          <span className="font-bold text-black">Pro</span>
                          <span className="text-black">: </span>
                          <span className="text-black text-sm leading-[18.2px]">
                            Homework feedback, personalized grading, one on one
                            coaching with tutor during office hour, in addition
                            to foundation package offerings
                          </span>
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>

                  {/* Out Of This World Package */}
                  <TableRow className="border-none">
                    <TableCell className="border-t border-l border-[#b9b9b9] p-0 bg-[#0000000f]">
                      <div className="px-3 py-2.5">
                        <span className="font-['Inter',Helvetica] font-normal text-black text-xs leading-[15.6px]">
                          {""}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="border-t border-l border-[#b9b9b9] p-0 bg-[#ffffff01]">
                      <div className="px-3 py-2.5 text-left">
                        <span className="font-['Inter',Helvetica] font-normal text-black text-sm leading-[18.2px]">
                          Unity Game Design
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="border-t border-l border-[#b9b9b9] p-0 bg-[#ffffff01]">
                      <div className="px-3 py-2.5 text-left">
                        <span className="font-['Inter',Helvetica] font-normal text-black text-sm leading-[18.2px]">
                          AP Microeconomics
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="border-t border-l border-[#b9b9b9] p-0 bg-[#ffffff01]">
                      <div className="px-3 py-2.5 text-left">
                        <span className="font-['Inter',Helvetica] font-normal text-black text-[15px] leading-[19.5px]">
                          <span className="font-bold">Out Of This World: </span>
                          <span className="text-sm leading-[18.2px]">
                            24/7 access to AI agent that provides homework help,
                            practice questions, and general academic support, in
                            addition to pro and foundation package offerings
                          </span>
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>

                  {/* Niche Courses */}
                  {nicheCourses.slice(2).map((course, index) => (
                    <TableRow key={`niche-${index}`} className="border-none">
                      <TableCell className="border-t border-l border-[#b9b9b9] p-0 bg-[#0000000f]">
                        <div className="px-3 py-2.5">
                          <span className="font-['Inter',Helvetica] font-normal text-black text-xs leading-[15.6px]">
                            {""}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="border-t border-l border-[#b9b9b9] p-0 bg-[#ffffff01]">
                        <div className="px-3 py-2.5 text-left">
                          <span className="font-['Inter',Helvetica] font-normal text-black text-sm leading-[18.2px]">
                            {course}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="border-t border-l border-[#b9b9b9] p-0 bg-[#0000000f]">
                        <div className="px-3 py-2.5">
                          <span className="font-['Inter',Helvetica] font-normal text-black text-xs leading-[15.6px]">
                            {""}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="border-t border-l border-[#b9b9b9] p-0 bg-[#0000000f]">
                        <div className="px-3 py-2.5">
                          <span className="font-['Inter',Helvetica] font-normal text-black text-xs leading-[15.6px]">
                            {""}
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <ContactForm/>
      </div>
    </section>
  );
};
