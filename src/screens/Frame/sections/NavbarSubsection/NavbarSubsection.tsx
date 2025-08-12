import { Button } from "../../../../assets/button";


export const NavbarSubsection = (): JSX.Element => {
    const navigationItems = [
        { label: "Our Mission", href: "/ourmission" },
        { label: "Our Services", href: "/ourservices" },
        { label: "Our Team", href: "/ourteam" },
    ];
  return (
      <header className="sticky top-0 z-50 w-full h-[100px] bg-[#d2e7ff] shadow">
        <div className="container mx-auto flex items-center justify-between h-full">
        <a href="/" className="text-2xl font-bold text-black">
          <img src="./movinOnUp/yellowFill.png" alt="Logo" className="h-10" /> 
        </a>
          <nav className="flex items-center gap-10">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="font-['Lexend',Helvetica] font-medium text-black text-xl leading-[30px]"
              >
                {item.label}
              </a>
            ))}
                <a href = "/ourservices">
                    <Button className="bg-black text-white rounded-lg shadow-button-shadow">
                    Book Now
                    </Button>
                </a>
          </nav>
        </div>
      </header>
  );
};
