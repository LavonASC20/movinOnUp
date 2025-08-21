import { Card, CardContent } from "../../../../assets/card";
import ExpandableCard from "../../../../assets/expandableCard";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "../../../../assets/table";
import { NavbarSubsection } from "../NavbarSubsection";
import { ContactForm } from "./contactForm";

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
        "AP Literature and Composition",
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
      name: "Test & Admissions Prep",
      courses: [
        "SAT English", 
        "SAT Math", 
        "College Essay Prep",
      ],
    },
    {
      name: "Niche Courses",
      courses: [
        "3D Modeling",
        "Unity Game Design",
        "Intro to R",
        "Intro to Python",
        "Networking 101",
        "Personal Finance",
        "Chess",
        "Scratch Development",
      ]
    },
  ];

  const packageCategories = [
    {
      name: "Packages",
      packages: [
        "Foundation: Sessions, recordings, and interactive, in-session practice exercises.",
        "Pro: Homework, graded feedback, personalized comments, and one-on-one coaching with your tutor during office hour (in addition to foundation package offerings).",
        "Out Of This World: 24/7 access to our AI agent that provides homework help, personalized practice exercises and full-length exams, along with general academic support (in addition to pro and foundation package offerings).",
      ],
    }
  ]

  // Navigation items
  return (
    <section className="w-full bg-white pt-[100px]">
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
          Explore our catalog of K-12 and college tutoring, AP classes, college prep,
          and even "niche" topics. You can choose between personalized one-on-one
          tutoring or engaging small group classes, depending on what fits your learning style best.
          Can't find the course you want to take, or don't know what each entails? Reach out via our "Book Now" form!
        </div>

        {/* Course cards */}
        <div className = "grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ExpandableCard 
            title = "Math"
            collapsedContent = "From counting to partial derivatives, we've got you covered!"
            expandedContent = {courseCategories.find(category => category.name === "Math")?.courses.join("\n") || ""}
          />
          <ExpandableCard 
            title = "Science"
            collapsedContent = "Learn about tiny microbes, chemical reactions, or even planetary motion!"
            expandedContent = {courseCategories.find(category => category.name === "Science")?.courses.join("\n") || ""}
          />
        </div>

        <div className = "grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ExpandableCard 
            title = "Humanities"
            collapsedContent = "Venture through various historical periods and literary analyses with us!"
            expandedContent = {courseCategories.find(category => category.name === "Humanities")?.courses.join("\n") || ""}
          />
          <ExpandableCard 
            title = "Test & Admissions Prep"
            collapsedContent = "Testing and admissions got you stressed? Let us guide you!"
            expandedContent = {courseCategories.find(category => category.name === "Test & Admissions Prep")?.courses.join("\n") || ""}
          />
        </div>

        <div className = "grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ExpandableCard 
            title = "Niche Courses"
            collapsedContent = "Want to flex new skills on your friends and applications? Check out our niche courses!"
            expandedContent = {courseCategories.find(category => category.name === "Niche Courses")?.courses.join("\n") || ""}
          />
          <ExpandableCard 
            title = "Packages"
            collapsedContent = "With our packages, get the best value for your learning journey!"
            expandedContent = {packageCategories.find(pack => pack.name === "Packages")?.packages.join("\n") || ""}
          />
        </div>
        
        {/* Contact Form */}
        <ContactForm/>
      </div>
    </section>
  );
};
