import ExpandableCard from "../../../../assets/expandableCard";
import { NavbarSubsection } from "../NavbarSubsection";

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
        "AP Statistics",
        "Linear Algebra",
        "Multivariable Calculus",
      ],
    },
    {
      name: "Science",
      courses: [
        "Biology",
        "Chemistry",
        "Physics",
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
        "Deep Learning",
      ],
    },
    {
      name: "Humanities",
      courses: [
        "English K-8",
        "High School English",
        "History K-8",
        "World History",
        "US History",
        "Psychology",
        "AP Psychology",
        "AP US History",
        "AP World History",
        "AP Language and Composition",
        "AP Literature and Composition",
        "AP Art History",
        "AP Drawing",
        "AP Spanish Language Composition",
        "AP African American Studies",
        "Ap Spanish Lit",
      ],
    },
    {
      name: "Test & Admissions Prep",
      courses: [
        "SAT English", 
        "SAT Math", 
        "College Essay Prep",
        "ACT English",
        "ACT Math",
        "SSAT",
        "PSAT",
        "State-level Standardized Tests",
        "Common App Prep",
        "Extracurriculars Guidance",
        "Interview Prep",
        "Resume Building",
        "Portfolio & Project Building",
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
        "AP 2-D Art and Design",
        "AP 3-D Art and Design",
        "AP Music Theory",
      ]
    },
  ];

  const packageCategories = [
    {
      name: "Packages",
      packages: [
        <> <strong>Foundation</strong>: Sessions, recordings, and interactive, in-session practice exercises. </>,
        <> <strong>Pro</strong>: Homework, graded feedback, personalized comments, and one-on-one coaching with your tutor during office hour (in addition to foundation package offerings). </>,
        <> <strong>Out Of This World</strong>: 24/7 access to our AI agent that provides homework help, personalized practice exercises and full-length exams, along with general academic support (in addition to pro and foundation package offerings). </>,
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
          {/* First column of three cards */}
          <div className = "flex flex-col gap-8">
            <ExpandableCard 
              title = "Math"
              collapsedContent = {
                <div style = {{ backgroundImage: 'url("public/math_symbols.PNG")', backgroundSize: 'cover' }}>
                  From counting to partial derivatives, we've got you covered!
                </div>
              }
              expandedContent = {
                <ul className =  "list-disc pl-5 space-y-2">
                  {courseCategories.find(category => category.name === "Math")?.courses.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              }
            />
            <ExpandableCard 
              title = "Science"
              collapsedContent = "Learn about tiny microbes, chemical reactions, or even planetary motion!"
              expandedContent = {
                <ul className =  "list-disc pl-5 space-y-2">
                  {courseCategories.find(category => category.name === "Science")?.courses.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              }
            />
            <ExpandableCard 
              title = "Humanities"
              collapsedContent = "Venture through various historical periods and literary analyses with us!"
              expandedContent = {
                <ul className =  "list-disc pl-5 space-y-2">
                  {courseCategories.find(category => category.name === "Humanities")?.courses.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              }
            />
          </div>

          {/* Second column of three cards */}
          <div className = "flex flex-col gap-8">
            <ExpandableCard 
              title = "Test & Admissions Prep"
              collapsedContent = "Testing and admissions got you stressed? Let us guide you!"
              expandedContent = {
                <ul className =  "list-disc pl-5 space-y-2">
                  {courseCategories.find(category => category.name === "Test & Admissions Prep")?.courses.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              }
            />
            <ExpandableCard 
              title = "Niche Courses"
              collapsedContent = "Want to flex new skills on your friends and applications? Check out our niche courses!"
              expandedContent = {
                <ul className =  "list-disc pl-5 space-y-2">
                  {courseCategories.find(category => category.name === "Niche Courses")?.courses.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              }
            />
            <ExpandableCard 
              title = "Packages"
              collapsedContent = "With our packages, get the best value for your learning journey!"
              expandedContent = {
                <ul className =  "list-disc pl-5 space-y-2">
                  {packageCategories.find(category => category.name === "Packages")?.packages.map((packageDesc, index) => (
                    <li key={index}>{packageDesc}</li>
                  ))}
                </ul>
              }
            />
          </div>  
        </div>
      </div>
    </section>
  );
};
